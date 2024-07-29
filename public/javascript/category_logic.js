let hidden_discounts = document.querySelectorAll('.hidden_discount'); 
let price_tag_real = document.querySelectorAll('.price_tag');
let finPrice = document.querySelectorAll('.fin_price');
let div_span_sizes = document.querySelectorAll('.div_span_sizes');
let categorySize = document.querySelectorAll('.all_span_sizes');


hidden_discounts.forEach(el => {
  let prodDiv = el.closest('.products');
  if (el.value == 0) {
    prodDiv.querySelector('.price_tag').remove();
    prodDiv.querySelector('.discount_info').remove();
  }
});


price_tag_real.forEach((priceTag, index) => {

  let parsedRealPrice = parseFloat(priceTag.innerHTML);
  let discount = hidden_discounts[index];
  
  if (discount) {
    let discountValue = parseFloat(discount.value);
    let discount_price = parsedRealPrice - (parsedRealPrice * discountValue / 100);
    finPrice[index].innerHTML = discount_price.toFixed(2) + " лв.";
  }

});

div_span_sizes.forEach((spans, index) =>  { 

    let spanSizes = spans.value.split(', ').map(span => `<span class='span_sizes'>${span}</span>`).join(' ');
    categorySize[index].innerHTML = spanSizes;

    let allSPANS = document.querySelectorAll('.span_sizes');

    allSPANS.forEach(span => { 
      if(span.innerHTML.trim() === ''){  
        span.remove();
      }
    });


});

let inside_second_div = document.querySelectorAll('.inside_second_div');

div_span_sizes.forEach(div => {


  if (div.value === ',  ,  ,  ,  , ') {
  
    let parentProduct = div.closest('.products');
    let parentDiv = parentProduct.querySelector('.inside_second_div');

    if (parentDiv) {
        parentDiv.style.height = '0';
        parentProduct.style.height = 'auto';
    }

  }
})

function scrollEffectProducts() {
  let allProducts = document.querySelectorAll('.products');

  let observerProducts = new IntersectionObserver((allEntries) => {
    allEntries.forEach((eachEntry) => {
      if (eachEntry.isIntersecting) {
        eachEntry.target.classList.add('show');
        setTimeout(function () {
          allProducts.forEach(prod => {
            prod.style.transition = '0.5s';
          })
        }, 1500)
      }
    })
  })

  allProducts.forEach((el) => {
    observerProducts.observe(el);
  });

}

scrollEffectProducts();

