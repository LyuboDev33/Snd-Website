let offer_div = document.querySelectorAll('.offer_div');
let most_soldP = document.querySelector('.most_soldP');
let advantage = document.querySelectorAll('.advantage');
let delivery_icons = document.querySelectorAll('.delivery_icons');
let collapsed = document.querySelectorAll('.collapsed');

let observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); 
      observeNext(entry.target);
    }
  });
});

let products = document.querySelectorAll('.products');

let observerProducts = new IntersectionObserver((entries) => {  
  entries.forEach(entry => { 
    if(entry.isIntersecting()){  
      entry.target.classList.add('show');
    }
  })
});


offer_div.forEach(div => { 
  div.addEventListener('mouseover', function () { 
    div.style.transition = '0.5s';
  });
});

function observeNext(currentElement) {
  let nextElement = currentElement.nextElementSibling;

  if (nextElement && (
    nextElement.classList.contains('offer_div') || 
    nextElement.classList.contains('advantage') || 
    nextElement.classList.contains('delivery_icons') ||
    nextElement.classList.contains('collapsed')
  )) {
    setTimeout(() => {
      observer.observe(nextElement);
    }, 200);
  }
}

observer.observe(offer_div[0]);
observer.observe(advantage[0]);
observer.observe(delivery_icons[0]);
observer.observe(collapsed[0]);
observer.observe(most_soldP);


