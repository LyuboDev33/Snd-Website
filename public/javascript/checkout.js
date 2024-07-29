
let checked = document.querySelectorAll('input[name="delivery"]');
let radioBtns = document.querySelectorAll('.custom-radio');
let deliveryOptionDiv = document.querySelector('.option_for_delivery');
let speedyValue = document.querySelector('.speedyValue').innerHTML;
let econtValue = document.querySelector('.econtValue').innerHTML;
let personalValue = document.querySelector('.personalValue').innerHTML;
let deliverPrice = document.querySelector('.deliver_price');
let price_order = document.querySelector('.price_order');

if (sessionStorage.length === 0) {
    window.location.href = '/checkout/success';

} 


radioBtns.forEach(button => {
  button.addEventListener('click', function () {

    deliveryOptionDiv.innerHTML = '';

    switch (button.value) {
      case "Доставка до личен адрес":

      deliverPrice.innerHTML = personalValue;

        deliveryOptionDiv.insertAdjacentHTML('beforeend', `
          <p class='chosen_option'><u>Вие Избрахте Опция:</u> <br> ${button.value}</p>
          <label for="adress"><b>Моля, посочете Адреса За Доставка:</b> <span style="color: red">*</span></label><br>
          <input class="all_inputs_checkout the_delivery_addres" placeholder="Личен Адрес" id="adress" name="adress" type="text"><br><br>
        `);

        totalCalcSum.textContent = (parseFloat(sumUpElement.innerHTML) + parseFloat(deliverPrice.innerHTML)).toFixed(2) + " лв.";
        price_order.value = JSON.stringify(totalCalcSum.innerHTML);
        break;
      case "Доставка до офис на Еконт":

      deliverPrice.innerHTML = econtValue;

        deliveryOptionDiv.insertAdjacentHTML('beforeend', `
          <p class='chosen_option'><u>Вие Избрахте Опция:</u>  <br> ${button.value}</p>
          <label for="adress"><b>Моля, посочете Офис на Еконт: </b> <span style="color: red">*</span></label><br>
          <input class="all_inputs_checkout the_delivery_addres" placeholder="Адрес на Еконт" id="adress" name="adress" type="text"><br><br>
        `);
        
        totalCalcSum.textContent = (parseFloat(sumUpElement.innerHTML) + parseFloat(deliverPrice.innerHTML)).toFixed(2) + " лв.";
        price_order.value = JSON.stringify(totalCalcSum.innerHTML);
        break;
      case "Доставка до офис на Спиди":

      deliverPrice.innerHTML = speedyValue;


        deliveryOptionDiv.insertAdjacentHTML('beforeend', `
          <p class='chosen_option'><u>Вие Избрахте Опция:</u>  <br> ${button.value}</p>
          <label for="adress"><b>Моля, посочете Офис на Спиди:</b> <span style="color: red">*</span></label><br>
          <input class="all_inputs_checkout the_delivery_addres" placeholder="Адрес на Спиди" id="adress" name="adress" type="text"><br><br>
        `);

        totalCalcSum.textContent = (parseFloat(sumUpElement.innerHTML) + parseFloat(deliverPrice.innerHTML)).toFixed(2) + " лв.";
        price_order.value = JSON.stringify(totalCalcSum.innerHTML);


        break;
      default:
        break;
    }
  });
});





// --------------------------------------------------------------------------------------------
let submitBTN = document.querySelector('.submitBTN');
let totalCalcSum = document.querySelector('.totalCalc');
let product = JSON.parse(sessionStorage.getItem('data'));
let sumUpElement = document.querySelector('.sumUp');
let totalPrice = 0;
let deliver_price = document.querySelector('.deliver_price');
let uniqueID = document.querySelector('.uniqueID_product');


uniqueID.value = product[0].uniqueID;

product.forEach(element => {
    let price = parseFloat(element.price);
    totalPrice += price;
});

sumUpElement.innerHTML = totalPrice.toFixed(2) + " лв.";

// -----------------------------------------------------------------------------------------------------------------------

const emptyRegex = /^\s*$/; //regex for EMPTY input field
const numbersAndSpaces = /^[\d\s]+$/; //regex to check if Only numbers and Spaces are allowed

const lettersAndSpaces = /^[A-Za-zА-Яа-яЁё\s]+$/; // regex to check if only letters with spaces are allowed
const onlyNumbersAndSpaces = /^[\d\s]+$/;



let checkout_form = document.querySelector('.checkout_form');
let finError = document.querySelector('.finError');
let radioButtons = document.querySelectorAll('input[name="delivery"]');
let full_names = document.getElementById('full_names');
let telePhone = document.getElementById('phone_number');
let city = document.getElementById('city');
let postalCode = document.getElementById('code');

checkout_form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Initialize error messages
  let errorMessage = '';

  // Validate full names
  if (emptyRegex.test(full_names.value)) {
      errorMessage = 'Полето "Име" е задължително. <br> Моля попълнете имената си :)';
  } else if (!lettersAndSpaces.test(full_names.value)) {
      errorMessage = 'В полето "Име" не са разрешени цифри. <br> Моля попълнете имената си без цифри :)';
  }

  // Validate telephone
  if (errorMessage === '' && emptyRegex.test(telePhone.value)) {
      errorMessage = 'Полето "Телефон" е задължително. <br> Моля въведете телефона си :)';
  } else if (errorMessage === '' && !onlyNumbersAndSpaces.test(telePhone.value)) {
      errorMessage = 'Моля въведете валиден формат на телефона <br> Пример: 0894 938 614';
  }

  // Validate city
  if (errorMessage === '' && emptyRegex.test(city.value)) {
      errorMessage = 'Полето "Град/Село" е задължително. <br> Моля попълнете града/селото си :)';
  } else if (errorMessage === '' && !lettersAndSpaces.test(city.value)) {
      errorMessage = 'В полето "Град" не са разрешени цифри. <br> Моля попълнете само името на вашия град :)';
  }

  // Validate postal code
  if (errorMessage === '' && emptyRegex.test(postalCode.value)) {
      errorMessage = 'Полето "Пощенски код" е задължително. <br> Моля попълнете пощенския код на вашето населено място :)';
  } else if (errorMessage === '' && !onlyNumbersAndSpaces.test(postalCode.value)) {
      errorMessage = 'Моля въведете валиден формат на пощенския код. <br> Пример: 2650';
  }

  // Validate radio buttons
  if (errorMessage === '' && ![...radioButtons].some(radio => radio.checked)) {
      errorMessage = 'Моля изберете начин за доставка (Speedy, Еконт или Личен Адрес';
  }

  // Validate delivery address
  if (errorMessage === '') {
      let adresses = document.querySelectorAll('.the_delivery_addres');
      adresses.forEach(adres => {
          if (emptyRegex.test(adres.value)) {
              errorMessage = 'Моля въведете адреса за доставка (Speedy, Еконт или Личен адрес)';
          }
      });
  }

  if (errorMessage !== '') {
      finError.innerHTML = errorMessage;
      return;
  }

  $.ajaxSetup({
      headers: {
          'X-CSRF-TOKEN': $("meta[name='_token']").attr('content')
      }
  });

  let formData = new FormData(checkout_form);

  $.ajax({
      type: "POST",
      url: "/checkout",
      data: formData,
      dataType: 'json',
      contentType: false,
      processData: false,
      success: function (response) {
          checkout_form.reset();
          sessionStorage.removeItem('data');
            window.location.reload();
        },
      error: function (response) {
          // Handle error if necessary
          finError.innerHTML = 'Възникна грешка при изпращане на формуляра. Моля, опитайте отново.';
      }
  });
});




// these 2 lines of code hold the logic to send the products to the server
let data = document.querySelector('.products_data');
data.value = JSON.stringify(product);
// these 2 lines of code hold the logic to send the session data to the server
