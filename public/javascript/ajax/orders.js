$.ajax({
  type: 'GET',
  url: '/ordersJSON',
  dataType: 'json',
  success: function (ordersResponse) {
      $.ajax({
          type: 'GET',
          url: '/deliveryPrices',
          dataType: 'json',
          success: function (pricesResponse) {

              let pricing = pricesResponse.delivery_prices;
              let containerOrders = document.querySelector('.all_orders');
              let orders = ordersResponse.orders;

              orders.forEach(order => {

                  let orderName = order.full_names;
                  let orderAddress = order.adress;
                  let orderCity = order.city;
                  let orderPhone = order.phone_number;
                  let orderCode = order.code;
                  let orderDate = order.created_at;
                  let orderPrice = order.price_order;
                  let orderDelivery = order.delivery;
                  let identifier = order.identifier;
                  let orderType = order.new_order;
                  let csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
                  let orderID = order.id;

                  let imgDelivery;
                  let deliveryPrice;

                  if (orderDelivery === 'Доставка до офис на Спиди') {
                      imgDelivery = '/img/speedy.png';
                      deliveryPrice = pricing[0].speedy_price;
                  } else if (orderDelivery === 'Доставка до офис на Еконт') {
                      imgDelivery = '/img/econt.png';
                      deliveryPrice = pricing[0].econt_price;
                  } else if (orderDelivery === 'Доставка до личен адрес') {
                      imgDelivery = '/img/main_page_img/box-location.svg';
                      deliveryPrice = '7.00 лв';
                  }

                  let parsedPrice = JSON.parse(orderPrice);
                  let priceAsNumberTotal = parseFloat(parsedPrice);
                  let products = JSON.parse(order.products_data);

                  if (products.length === 1) {
                      let product = products[0];
                      let productImg = product.image;
                      let productName = product.name;
                      let productPrice = product.price;
                      let productOriginalPrice = product.originalPrice;
                      let productSize = product.size;
                      let numberOrdered = parseFloat(productPrice) / parseFloat(productOriginalPrice);


                      let html = `
                          <div class="order">
                              <div class='background_img'>
                                  <img class='product_imgs_dashboard' src="${productImg}" alt="Снимки продукти">
                              </div>
                              <div class='delivery_details'>
                                  Имена:
                                  <p class='name_person'> <b>${orderName}</b></p>
                                  <p>Телефон: <b>${orderPhone}</b></p>
                                  <p>Град/Село:<b> ${orderCity}</b></p>
                                  <p>Пощенски код:<b> ${orderCode}</b></p>
                                  <p>Адрес за доставка :<b> ${orderAddress}</b></p>

                              </div>
                              <div>
                                  <div class='info_price_div'>
                                      <p>Поръчка цена: <b>${productPrice}</b></p>
                                      <p>Ед. цена: <b>${productOriginalPrice}</b></p>
                                      <p>Брой:<b> ${numberOrdered}</b></p>
                                      <p>Размер:<b> ${productSize}</b></p>
                                  </div>
                              </div>
                              <div>
                                  <div class='info_price_div extra'>
                                      <img src='${imgDelivery}' class='delivery_images'>
                                      <p>Доставка: <b>${deliveryPrice} лв.</b></p>
                                      <p class='all_products_price'>Стойност на поръчани продукти:<br><b>${productPrice}</b> лв.</p>
                                      <p>Клиентът ще плати: <b>${priceAsNumberTotal.toFixed(2)} лв.</b> </p>
                                      <form class='type_form' method='POST'>
                                          <input class='hidden_token' type="hidden" name="_token" value="${csrfToken}">
                                          <select name="select_option" id="select_option">
                                              <option selected disabled value="${orderType}">${orderType}</option>
                                              <option value="Изпратена поръчка">Изпратена поръчка</option>
                                              <option value="Получена поръчка">Получена поръчка</option>
                                          </select>
                                          <button class='type_submit' type='submit'>Запази</button>
                                          <input class='identifier' name='identifier' value='${orderID}' type='hidden'>
                                      </form>
                                  </div>
                              </div>
                              <input class='order_type' value='${orderType}' type='hidden'>
                          </div>`;
                      containerOrders.innerHTML += html;

                  } else if (products.length > 1) {
                    let finalPriceMultiple = 0;
                    let multipleImgsHtml = '';

                    products.forEach(product => {
                        let numberOrdered = parseFloat(product.price) / parseFloat(product.originalPrice);

                        multipleImgsHtml += `
                            <div class='background_img'>
                                <img class='product_imgs_dashboard' src="${product.image}" alt="Снимки продукти">
                                <p>Ед. цена:<b>${product.originalPrice}</b></p>
                                <p>Размер:<b> ${product.size}</b></p>
                                <p>Брой:<b> ${numberOrdered}</b></p>
                                <p>Поръчка цена: <b>${product.price}</b></p>
                                
                            </div>`;
                        finalPriceMultiple += parseFloat(product.price);
                    });

                    let finalPrice = finalPriceMultiple + parseFloat(deliveryPrice);

                    let html = `
                        <div class="order">
                            <div class='delivery_details'>
                                <div class='multipleContacts'>
                                    Имена:
                                    <p class='name_person'> <b>${orderName}</b></p>
                                    <p>Телефон: <b>${orderPhone}</b></p>
                                    <p>Град/Село:<b> ${orderCity}</b></p>
                                    <p>Пощенски код:<b> ${orderCode}</b></p>
                                     <p>Адрес за доставка:<b> ${orderAddress}</b></p>
                                </div>
                                <div class='background_imgs'>
                                    ${multipleImgsHtml}
                                </div>
                            </div>
                            <div class='info_price_div extra'>
                                <img src='${imgDelivery}' class='delivery_images'>
                                <p>Доставка: ${deliveryPrice} <b> лв.</b></p>
                                <p class='all_products_price'>Стойност на поръчани продукти:<br><b>${finalPriceMultiple.toFixed(2)}</b> лв.</p>
                                <p class='finalPriceMultiple'>Клиентът ще плати: <b>${finalPrice.toFixed(2)}</b> лв.</p>
                                <form class='type_form' method='POST'>
                                    <input class='hidden_token' type="hidden" name="_token" value="${csrfToken}">
                                    <select name="select_option" id="select_option">
                                        <option selected disabled value="${orderType}">${orderType}</option>
                                        <option value="Изпратена поръчка">Изпратена поръчка</option>
                                        <option value="Получена поръчка">Получена поръчка</option>
                                    </select>
                                    <button class='type_submit' type='submit'>Запази</button>
                                    <input class='identifier' name='identifier' value='${orderID}' type='hidden'>
                                </form>
                            </div>
                            <input class='order_type' value='${orderType}' type='hidden'>
                        </div>`;
                    containerOrders.innerHTML += html;
                }
            });

            updateOrderType();
            checkOrderType();
            searchClient();
        },
        error: function (error) {
            console.error('Error fetching deliveryPrices:', error);
        }
    });
},
error: function (error) {
    console.error('Error fetching ordersJSON:', error);
}
});
// ----------------------------------------------------------------------------------
// FUNCTIONS

function zoomImg() {
  let imgClick = document.querySelectorAll('.product_imgs_dashboard');
  imgClick.forEach(img => {
      img.addEventListener('click', function () {
          let parentDiv = this.parentElement;
          if (this.style.height === '650px') {
              parentDiv.style.display = 'contents';
              this.style.height = '150px';
          } else {
              parentDiv.style.display = 'flex';
              this.style.height = '650px';
          }
      });
  });
}

function checkOrderType() {
  let order_type = document.querySelectorAll('.order_type');
  order_type.forEach(order => {
      if (order.value === 'Изпратена поръчка') {
          order.parentElement.style.background = 'yellow';
      } else if (order.value === 'Получена поръчка') {
          order.parentElement.style.background = '#6aff6a';
      }
  });
}

function updateOrderType() {
  let changeBTN = document.querySelectorAll('.type_submit');
  changeBTN.forEach(change => {
    change.addEventListener('click', function (e) {

      let parentElement = this.parentElement;
      let orderDiv = parentElement.parentElement.parentElement.parentElement;
      let identifier = parentElement.querySelector('.identifier');
      let optionValue = parentElement.querySelector('#select_option');
      let token = parentElement.querySelector('.hidden_token').value;

      $.ajax({
        type: 'POST',
        url: '/dashboard/dashboard-pages/orders',
        contentType: 'application/json',
        processData: false,
        headers: {
          'X-CSRF-TOKEN': token
        },
        success: function () {
          location.reload();
        },
      });
    });
  });
}
function searchClient() {
  let search_order = document.querySelector('.search_order');
  let all_orders = Array.from(document.querySelectorAll('.order'));
  let container_orders = document.querySelector('.all_orders');

  search_order.addEventListener('input', function (e) {
      let searchValue = e.target.value.toLowerCase();
      container_orders.innerHTML = '';

      if (searchValue === '') {
          all_orders.forEach(order => {
              container_orders.appendChild(order);
          });
      } else {
          all_orders.forEach(order => {
              let name = order.querySelector('.name_person').innerHTML.toLowerCase();
              if (name.includes(searchValue)) {
                  container_orders.appendChild(order);
              }
          });
      }
  });
}

searchClient();
