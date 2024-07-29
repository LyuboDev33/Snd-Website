
let product_container = document.getElementById('products_container_main');

$.ajax({
  type: 'GET',
  url: '/mai_page_json_products',
  dataType: 'json',
  success: function (response) {

    let productObject = response.all_products.slice(0, 10);

    productObject.forEach(element => {

      let unique = element.unique;

      let real_price = element.price_tag;
      let discount = element.discount;
      let image = element.product_image;
      let product_name = element.product_name;

      let sizes = element.available_sizes;
      let spanSizes = sizes.split(', ').map(size => `<span class='span_sizes'>${size}</span>`).join(' ');


      let discount_price = real_price - (real_price * discount / 100);



      html = `
    
      <a href="/products/${unique}" class="products">
      <div class='image_discount_div'>
    
          <span class='discount_info'>-${discount}% </span>
 
        <img class="product_img_styles" src="/img/main_page_img/${image}" alt="Снимка продукт">
        <p class='product_name'>${product_name}</p>
      </div>

      <div class='inside_second_div'>
     
        <div clas='div_span_sizes'>${spanSizes}</div>
   
        <s><p class='price_tag'>${real_price} лв.</p></s>
    
        <p class='fin_price'>${discount_price.toFixed(2)} лв.</p>
      
        <div><button class='order_btn'>ПОРЪЧАЙ</button></div>
      </div>
      
      <input class='hidden_discount' type='hidden' value='${discount}'>
    </a>
   `;

      product_container.innerHTML += html;

    });

    scrollEffectProducts();



    // logic for the discount removal
    let hidden_discount = document.querySelectorAll('.hidden_discount');
    hidden_discount.forEach(el => {
      let prodDiv = el.closest('.products');
      if (el.value == 0) {
        prodDiv.querySelector('.price_tag').remove();
        prodDiv.querySelector('.discount_info').remove();
      }
    });
    // logic for the discount removal

    let frontSizes = document.querySelectorAll('.span_sizes');
    frontSizes.forEach(frontSize => {

      if (frontSize.innerHTML.trim() === '') {
        frontSize.remove();
      }

    });

  }


});



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

