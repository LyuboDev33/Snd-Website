let product_numb = document.querySelector('.cart_products_number');
let numbArray = JSON.parse(sessionStorage.getItem('data'));



if(numbArray === null || numbArray.length === 0) {
  product_numb.innerHTML = '';

} else { 
product_numb.innerHTML = numbArray.length;
}


let sidebarBackground = document.querySelector('.cart_sidebar_container')
let insideSidebar = document.querySelector('.cart_sidebar_modal')

let menuBar = document.querySelector('.menu_bar');

menuBar.addEventListener('click', function () {
sidebarBackground.style.display = 'flex';
setTimeout(function () {
  insideSidebar.style.transition = 'transform 0.5s ease';
  insideSidebar.style.transform = "translateX(16%)";
}, 100);
});

let closeSidebarBtn = document.querySelector('.closeSidebar');


closeSidebarBtn.addEventListener('click', function () {


insideSidebar.style.transition = 'transform 0.5s ease';
insideSidebar.style.transform = "translateX(120%)";

setTimeout(function () {
  sidebarBackground.style.display = 'none';

}, 500)


});

function updateResize () { 

  if(window.innerWidth > 768) { 
    sidebarBackground.style.display = 'none';
    insideSidebar.style.transform = "translateX(120%)";

  }

}

updateResize ();

window.addEventListener("resize", updateResize);


setTimeout(function () { 
  let cookieModal = document.querySelector('.js-cookie-consent');

  cookieModal.style.transform = 'translateY(0)';



}, 5000)