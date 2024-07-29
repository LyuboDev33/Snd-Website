let addProduct = document.getElementById('addProd');

let price_tag = document.getElementById('price_tag');
let product_name = document.getElementById('product_name');
let price_discount = document.getElementById('price_discount');
let product_desc = document.getElementById('product_desc');
let selling_price = document.getElementById('selling_price');

let numbers = /^(\d+([\.,]\d{1,2})?)?$/;
let letters = /^[A-Za-zА-Яа-яЁё\s]+$/;

let nameError = document.getElementById('nameError');
let numbError = document.getElementById('numbError');
let discountError = document.getElementById('discountError')
let textError = document.getElementById('textError');
let selling_error = document.getElementById('sellingError');
let category_product = document.getElementById('category_product');



addProduct.addEventListener('click', function (e) {

  e.preventDefault();
  

  let valid = true;


  function getContent() {
    return tinymce.get('product_desc').getContent();
  }
  
  var productDescContent = getContent();
  
  if (productDescContent.trim() === '') {
    valid = false;
    textError.innerHTML = 'Полето е задължително';
  
    setTimeout(function () { 
      textError.innerHTML = '';
  
    }, 10000)
  }

  if (selling_price.value.trim() === '') {
    selling_error.innerHTML = 'Полето е задължително';
    valid = false;
    setTimeout(function () {
      selling_error.innerHTML = '';
    }, 10000);
  } else if (!selling_price.value.match(numbers)) {
    selling_error.innerHTML = "В полето са разрешени само цифри!";
    valid = false;
    setTimeout(function () {
      selling_error.innerHTML = '';
    }, 10000);
  }

  if (price_tag.value.trim() === '') {
    numbError.innerHTML = 'Полето е задължително';
    valid = false;
    setTimeout(function () {
      numbError.innerHTML = '';
    }, 10000);
  } else if (!price_tag.value.match(numbers)) {
    numbError.innerHTML = "В полето са разрешени само цифри!";
    valid = false;
    setTimeout(function () {
      numbError.innerHTML = '';
    }, 10000);
  }

  if (product_name.value.trim() === '') {
    nameError.innerHTML = 'Полето е задължително';
    valid = false;
    setTimeout(function () {
      nameError.innerHTML = '';
    }, 10000);

  } else if (!product_name.value.match(letters)) {

    nameError.innerHTML = "В полето са разрешени само букви!";
    valid = false;
    setTimeout(function () {
      nameError.innerHTML = '';
    }, 10000);

  }

  if (price_discount.value.trim() === '') {
    discountError.innerHTML = 'Полето е задължително';
    valid = false;
    setTimeout(function () {
      discountError.innerHTML = '';
    }, 10000);

  } else if (!price_discount.value.match(numbers)) {

    discountError.innerHTML = "В полето са разрешени само цифри!";
    valid = false;
    setTimeout(function () {
      discountError.innerHTML = '';
    }, 10000);

  }



  if (valid) {
    document.querySelector('.formAddProduct').submit();
  }

});

