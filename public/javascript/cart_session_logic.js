let total_div = document.querySelector('.total_price_div');
let containerWithProducts = document.querySelector('.all_cart_products');

let gotProducts = JSON.parse(sessionStorage.getItem('data'));
let proceed_checkout = document.querySelector('.proceed_checkout');


if (gotProducts === null || JSON.stringify(gotProducts) === '[]') {

  sessionStorage.removeItem('data');


  containerWithProducts.innerHTML = `
    <div class='show_noproducts_message'>
    <p class='noAddedProds'>Нямате добавени продукти.</p><br> 
    <p>Можете да разгледате нашите продукти от бутона тук: </p><br>
    <a class='link_to_shop' href='/'>КЪМ МАГАЗИНА</a>
    </div>
    `;

  total_div.remove();
  proceed_checkout.remove();


} else {

  gotProducts.forEach(gotProd => {

    let prodImg = gotProd.image;
    let prodName = gotProd.name;
    let prodPrice = gotProd.price;
    let prodSize = gotProd.size;
    let prodUnique = gotProd.uniqueID;
    let prodOriginalPrice = gotProd.originalPrice;




    html = `
   <div class="cart_product">
        <div class="img_and_plus_minus_div">
        <img class="cart_imgs" src="${prodImg}" alt="Снимка продукт">
        <div class="plus_minus_div">
          <img class="minus" src="/img/main_page_img/minus.svg" alt="Минус">
          <p class="adjust_numb">1</p>
          <img class="plus" src="/img/main_page_img/plus.svg" alt="Плюс">
        </div>
        <p class="one_time_price">Ед. цена: ${prodOriginalPrice}</p>

      </div>
      <div class="names_sizes_div">
        <p class="product_name_cart">${prodName}</p><br>
        Размер:
        <p class="size_cart">${prodSize}</p>
        <p class="price_cart">${prodPrice} </p><br><br>
      </div>
      <img class='remove_product_image' src='/img/main_page_img/remove.svg'>
      
      <input class='hidden_price' value='${prodOriginalPrice}' type='hidden'>
      <input class='hidden_unique' value='${prodUnique}' type='hidden'>
      <hr class='hr_prods'>
      </div>
      `;

    containerWithProducts.innerHTML += html;

  });

}

let sum = 0;

// LOGIC FOR THE TOTAL IN THE CART
gotProducts.forEach(prod => {

  let totalP = document.querySelector('.total_calc');
  let numbSum = parseFloat(prod.price);

  sum += numbSum;

  totalP.innerHTML = sum.toFixed(2) + " лв.";

})
// LOGIC FOR THE TOTAL IN THE CART

// -------------------------------------------------------------------------------------------------


// LOGIC TO REMOVE THE A PRODUCT FROM CART AND SESSION
let removeBtns = document.querySelectorAll('.remove_product_image');

removeBtns.forEach(removeButton => {
  let parentElement = removeButton.parentElement;

  removeButton.addEventListener('click', function () {
    parentElement.remove();

    let uniqueID = parentElement.querySelector('.hidden_unique').value;
    let uniqueSize = parentElement.querySelector('.size_cart').innerHTML;

    let filteredArray = gotProducts.filter(function (prod) {
      return !(prod.size === uniqueSize && prod.uniqueID === uniqueID);
    });

    sessionStorage.setItem('data', JSON.stringify(filteredArray));

    location.reload();

  });

})
// LOGIC TO REMOVE THE A PRODUCT FROM CART AND SESSION

// -------------------------------------------------------------------------------------------------


// LOGIC FOR THE ADJUST BUTTON
let adjustNumb = document.querySelectorAll('.adjust_numb');

adjustNumb.forEach((numb, index) => {


  if (index < gotProducts.length) {
    let adjust = gotProducts[index];

    let totalPrice = parseFloat(adjust.price);
    let originalPrice = parseFloat(adjust.originalPrice);

    let number = totalPrice / originalPrice;

    numb.innerHTML = number;

  }
});

// LOGIC FOR THE ADJUST BUTTON

// -------------------------------------------------------------------------------------------------

// LOGIC FOR THE PLUS
let plusBTN = document.querySelectorAll('.plus');

plusBTN.forEach(button => {



  let parentDiv = button.parentElement.parentElement.parentElement;
  let price = parseFloat(parentDiv.querySelector('.price_cart').innerHTML);
  let size = parentDiv.querySelector('.size_cart').innerHTML;
  let uniqueID = parentDiv.querySelector('.hidden_unique').value;

  let hiddenPrice = parseFloat(parentDiv.querySelector('.hidden_price').value);


  button.addEventListener('click', function () {

    let filteredUpdate = gotProducts.filter(function (update) {
     ;
      return update.size === size && update.uniqueID === uniqueID;
    });


    let finNumb = (parseFloat(filteredUpdate[0].price) + hiddenPrice).toFixed(2) + " лв.";


    filteredUpdate[0].price = finNumb;

    sessionStorage.setItem('data', JSON.stringify(gotProducts));

    document.getElementById('preloader').style.display = 'flex';

    setTimeout(() => {
      location.reload();
    }, 500);

  });

});
// LOGIC FOR THE PLUS

// -------------------------------------------------------------------------------------------------

//LOGIC FOR THE MINUS
let minusBTN = document.querySelectorAll('.minus');

minusBTN.forEach(button => {

  let parentDiv = button.parentElement.parentElement.parentElement;
  let price = parseFloat(parentDiv.querySelector('.price_cart').innerHTML);
  let uniqueID = parentDiv.querySelector('.hidden_unique').value;

  let hiddenPrice = parseFloat(parentDiv.querySelector('.hidden_price').value);

  let size = parentDiv.querySelector('.size_cart').innerHTML; //This code returns the sizes with space - &nbsp;


  button.addEventListener('click', function () {

    let filteredUpdate = gotProducts.filter(function (update) {
      
      return update.size === size && update.uniqueID === uniqueID;
    });


    let finNumb = (parseFloat(filteredUpdate[0].price) - hiddenPrice).toFixed(2) + " лв.";

    if (finNumb === '0.00 лв.') {

      return;

    } else {

      filteredUpdate[0].price = finNumb;

      sessionStorage.setItem('data', JSON.stringify(gotProducts));

      document.getElementById('preloader').style.display = 'flex';

      setTimeout(() => {
        location.reload();
      }, 500);

    }

  });

});
//LOGIC FOR THE MINUS

