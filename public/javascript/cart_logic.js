let addToCartBtn = document.querySelectorAll('.add_to_cart_btn');

let finPriceElement = document.getElementById('fin_price');
let finPriceText = finPriceElement.textContent.replace(' лв.', '');
let finPrice = parseFloat(finPriceText);

let hidden_discount = document.querySelector('.hidden_discount');
let priceTag = document.querySelector('.price_tag');
let saveUpElement = document.querySelector('.saveUp');
let sizesDiv = document.querySelector('.span_available_sizes');


let discountValue = parseFloat(hidden_discount.value);
let discounted_price = finPrice - (finPrice * discountValue / 100);
let optionsSection = document.getElementById('sizes');



let saveUp = finPrice - discounted_price;

saveUpElement.textContent = "Спестявате " + saveUp.toFixed(2) + " лв.";

if (discountValue === 0) {
  priceTag.remove();
  saveUpElement.remove();
} else {
  finPriceElement.textContent = discounted_price.toFixed(2) + " лв.";
}

let stringSizes = document.querySelector('.sizes_template').value;


let sizesFin = stringSizes.split(', ').map(size => `<span class='available_sizes_styles'>${size}</span>`).join(' ');

sizesDiv.innerHTML += sizesFin;
let spans = document.querySelectorAll('.available_sizes_styles')
spans.forEach(spanBTN => {
  if (spanBTN.innerHTML.trim() === '') {
    spanBTN.style.display = 'none';
  }
});


let options = stringSizes.split(', ')
  .map(option => option.trim())
  .map(option => `<option class='all_options' value="${option}"> ${option}</option>`); optionsSection.innerHTML = `<option disabled selected>Изберете размер</option>` + options;

let allOptions = document.querySelectorAll('.all_options');

allOptions.forEach(opt => {

  if (opt.value.trim() === '' || opt.innerHTML.trim() === '') {
    opt.remove();
  }
});

let message = document.querySelector('.succes_message');
let containerBackground = document.querySelector('.container_background');
let imagePopup = document.querySelector('.succes_tick_svg');
let cartNumb = document.querySelector('.cart_products_number')
let emptySizes = document.getElementById('sizes');
let labelSizes = document.querySelector('.label_selectSize');

if (emptySizes.length === 1) {
  emptySizes.remove();
  labelSizes.remove();
}


addToCartBtn.forEach(clickBtn => {

  clickBtn.addEventListener('click', function (e) {

    e.preventDefault();

    let form = clickBtn.closest('form');
    let pickOption = form.querySelector('#sizes');


    if (pickOption === null) {

      sizeAndNoSize('Няма');

    } else if (pickOption.value === 'Изберете размер') {

      form.querySelector('.errorSize').innerHTML = 'Моля изберете размер от падащото меню!';

      setTimeout(function () {
        form.querySelector('.errorSize').innerHTML = '';
      }, 5000);

    } else {


      sizeAndNoSize(document.getElementById('sizes').value);

    }

  });

});


function sizeAndNoSize(twoSizes) {
  let productName = document.querySelector('.header_h1').textContent;
  let productImage = document.querySelector('.main_page_productIMG').src;
  let productPrice = document.getElementById('fin_price').textContent;
  let productSize = twoSizes;
  let productUniqueID = document.querySelector('.hidden_uniqueID').value;
  let product_original_price = document.getElementById('fin_price').textContent;



  if (!sessionStorage.getItem('data')) {
    sessionStorage.setItem('data', '[]');
  }

  let getArray = JSON.parse(sessionStorage.getItem('data'));

  let productExists = false;

  getArray.forEach(arr => {

    if (productImage === arr.image &&
      productName === arr.name &&
      productPrice === arr.price &&
      productSize === arr.size &&
      productUniqueID === arr.uniqueID) {
      productExists = true;
    }

  });

  if (productExists) {
    containerBackground.style.display = 'flex';
    imagePopup.src = '/img/main_page_img/dizzy.svg';
    message.innerHTML = 'Този продукт e вече добавен в количката! <br><br> За избор на количество, моля преминете към плащане.';

    closeModal();

  } else {
    // NEW DATA ARRAY
    let newData = {
      name: productName,
      price: productPrice,
      image: productImage,
      size: productSize,
      uniqueID: productUniqueID,
      originalPrice: product_original_price

    };
    getArray.push(newData);
    sessionStorage.setItem('data', JSON.stringify(getArray));
    cartNumb.innerHTML = getArray.length;
    // NEW DATA ARRAY
    imagePopup.src = '/img/main_page_img/success.svg';
    containerBackground.style.display = 'flex';
    message.innerHTML = 'Продуктът беше добавен успешно!';
    closeModal();

  }

  // CloseX Logic


  function closeModal() {
    let closeBtn = document.querySelector('.close_x');
    let continueShopping = document.querySelector('.continue_shopping');

    continueShopping.addEventListener('click', function () {
      containerBackground.classList.add('fade-out-background')
      setTimeout(function () {
        containerBackground.style.display = 'none';
        containerBackground.classList.remove('fade-out-background')
      }, 1000)
    });

    closeBtn.addEventListener('click', function () {
      containerBackground.classList.add('fade-out-background')
      setTimeout(function () {
        containerBackground.style.display = 'none';
        containerBackground.classList.remove('fade-out-background')
      }, 1000)
    });
  }

}

// CloseX Logic

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// Logic for Opening pictures on Big Screen 

let images = document.querySelector('.main_page_productIMG');
let close_x_image = document.querySelector('.close_x_image'); 
let zoom_image = document.querySelector('.zoom_image'); 

let imageBackground = document.querySelector('.image_background');


  images.addEventListener('click', function () { 

    if(window.innerWidth < 992) { 
      return;
      
    } else { 
      imageBackground.style.display = 'flex';
    close_x_image.style.display = 'flex';
  
    let parentDiv = images.parentElement;
    let imageSrc = parentDiv.querySelector('.main_page_productIMG');
  
    zoom_image.src = imageSrc.src;

    backgroundClick ();

    }

    
  
  });
  
  close_x_image.addEventListener('click', function () { 
  
    imageBackground.style.display = 'none';
    close_x_image.style.display = 'none';
  
  })

  window.addEventListener('resize', removeXBackground);

  function removeXBackground () { 

    if(window.innerWidth < 992) { 

      imageBackground.style.display = 'none';

    }

  }

  function backgroundClick () { 

    imageBackground.addEventListener('click', function () { 
      imageBackground.style.display = 'none';
      close_x_image.style.display = 'none';
    })
   
  }