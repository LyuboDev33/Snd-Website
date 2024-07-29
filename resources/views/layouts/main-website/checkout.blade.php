<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="/css/main-website/main.css">
  <link rel="stylesheet" href="/css/reset.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
  <link rel="icon" type="image/x-icon" href="/img/favicon.svg">

  <title>Checkout</title>
</head>
<body>

  <div>
    
    <div class="top_img">
      <img src="/img/main_page_img/pic.png" alt="Главна снимка">
    </div>

    <div class="fast_order">
      <p>Бърза поръчка</p>
      <p><a class="phone_checkout" href="tel:0894938614">0894 938 614</a></p>

    </div>

    <h2 class="data_h2">Данни За Доставка</h2>

    <hr>

@foreach ($prices as $price)

{{-- action="{{ route('checkout.addProduct') }}" --}}
  
<form class="checkout_form">
  @csrf

<div class="first_half shadow">
  <div class="information">
 
    <div class="info_divs">
      <label class="labels_checkout" for="full_names">Име: <span style="color: red" >*</span></label>
      <input class="all_inputs_checkout" placeholder="Въведете Двете Си Имена" name="full_names" id="full_names" type="text">
    </div>

  <br>

    <div class="info_divs">
      <label class="labels_checkout" for="phone_number">Телефонен номер: <span style="color: red" >*</span></label>
      <input class="all_inputs_checkout" placeholder="Въведетe Телефонен Номер" name="phone_number" id="phone_number" type="text">
    </div>

  </div>

  <br>

  <h3 class="data_h3"> Изберете Метод За Доставка: </h3>

  <div class="methods">

  <br>
  
    <div class="payment_method_div">
    <input class="custom-radio" type="radio" id="speedy" name="delivery" value="Доставка до офис на Спиди">
    <label class="delivery_lable" for="econt">Доставка до офис <br> на Speedy</label><br>
    <img class="checkout_images" src="/img/speedy.png" alt="Доставка Speedy">
    <span class="span_price_checkout speedyValue">{{ $price->speedy_price }} лв.</span>
    </div>

    <div class="payment_method_div">

    <input class="custom-radio" type="radio" id="econt" name="delivery" value="Доставка до офис на Еконт">
    <label class="delivery_lable" for="css">Доставка до офис <br> на Еконт</label><br>
    <img class="checkout_images" src="/img/econt.png" alt="Доставка Еконт">
    <span  class="span_price_checkout econtValue"> {{ $price->econt_price }} лв.</span>

    </div>

    <div class="payment_method_div_personal">
    <input class="custom-radio" type="radio" id="personal_address" name="delivery" value="Доставка до личен адрес">
    <label class="delivery_lable_personalAddress" for="personal_address">Доставка до  личен адрес</label>
    <span  class="span_price_checkout personalValue"> 7.00 лв.</span>
    <img class="checkout_images" src="/img/main_page_img/box-location.svg" alt="Доставка личен адрес">
    </div>

  </div>

  
  <div class="option_for_delivery">
     
  </div>



    <div class="city_and_comment_div">
    
    <div class="inside_divs">
      
    <div>
      <label  class="labels_checkout" for="city">Град/Село: <span style="color: red" >*</span></label><br>
      <input class="all_inputs_checkout" placeholder="Напишете Град/Село За Доставка" name="city" id="city" type="text">
    </div>

    <br>

    <div>
      
    <label class="labels_checkout" for="code">Пощенски код: <span style="color: red" >*</span></label><br>
    <input class="all_inputs_checkout" placeholder="Напишете Пощенския Код" type="text" name="code" id="code">
    </div>

    <br>
    </div>

    <label class="labels_checkout" for="comments">Коментар: </label>
    <textarea placeholder="Това поле не е задължително! Споделете повече при нужда" name="comments" id="comments"></textarea>
  </div>

  <br>

</div>

<div class="second_half">
 
  <p class="payment_msg">Плащането става единствено чрез НАЛОЖЕН ПЛАТЕЖ! <br> (При получаване на пратката)</p>

    <div class="checkout_divs">
      <div class="image_header">
        <img class="checkout_imgs" src="/img/main_page_img/dollar.svg" alt="Снимка долар">
          <p class="sum_text">Дължима Сума</p>
      </div>
      <hr>
      <div class="delivery_plus_totalSum">
          <p>Междинна сума: </p>
        <b><p class="sumUp"></p></b>
      </div>
      <div class="delivery_plus_totalSum">
        <p>Доставка:  </p>
        <b><p class="deliver_price" name='deliver_price'></p></b>
    </div>
    <br>
    <hr>
      <div class="delivery_plus_totalSum">
        <p><b>ОБЩО: </b></p>
        <b><p class="totalCalc"></p></b>
      </div>
    </div>
    
    <p class="finError"></p>

    <br><br>

    <div class="button_div">
      <button class="submitBTN">ЗАВЪРШИ ПОРЪЧКАТА</button>
    </div>


    

    <div class="container_wDivs">
      <div class="first_div">
        <img class="img_illustrate" src="/img/check-mark.svg" alt="Доставка">
        <p>Преглед и Тест при получаване на вашата поръчка.</p>
    </div>
    
  
      <div class="second_div">
        <img class="img_illustrate" src="/img/main_page_img/delivery-time.svg" alt="Доставка">
        <p>Всички поръчки се изпълняват за срок от 1 до 3 работни дни.</p>
    </div>
  
    
    <div class="third_div">
        <img class="img_illustrate medal" src="/img/main_page_img/warranty.svg" alt="Доставка">
        <p>100% Гаранция за връщане или заменяне на продукт в рамките на 14 дни.</p>
    </div>

    </div>

  </div>

    <input name="identifier" class="uniqueID_product" type="hidden">
    <input class="price_order" name="price_order" type="hidden">
    <input name="products_data" class="products_data" type="hidden">
</form>

@endforeach

</div>

<script type="text/javascript" src="/javascript/checkout.js"></script>
  
</body>
</html>