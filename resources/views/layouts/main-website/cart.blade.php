<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="icon" type="image/x-icon" href="/img/favicon.svg">
  <title>Количка</title>
</head>
<body class="body_cart">

  @include('layouts.main-website.header')

  <div class="container_checkout">
    <h1 class="yourCart">Вашата количка</h1>

  
    <hr>
  </div>

  <div class="responsive_cart_div">
   
    <div>
      <a class="proceed_checkout" href="/checkout">
        <p class="goToPay">ПРЕМИНЕТЕ КЪМ ПЛАЩАНЕ</p>
      </a>
        </div>

    <div class="all_cart_products">
      <p class="label_products">Вашите Продукти</p>

      {{-- all the products here are inside 
      <script type="text/javascript" src="/javascript/cart_session_logic.js"></script>
      --}}
     </div>

     <div class="total_price_div">

      <p>Общо: </p>
      <p class="total_calc"></p>
  
    </div>

  </div>




  <div style="height: 30px" class="noContent">

  </div>

  <div class="preloader" id="preloader">Зареждане...</div>


<script type="text/javascript" src="/javascript/cart_session_logic.js"></script>

</body>
</html>