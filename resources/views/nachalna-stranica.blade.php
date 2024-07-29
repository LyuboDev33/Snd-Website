<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  {{-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css"> --}}
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <link rel="icon" type="image/x-icon" href="/img/favicon.svg">

  <link rel="stylesheet" href="/css/reset.css">
  <title>Начална страница</title>
</head>
<body class="body_main">


@include('layouts.main-website.header')


<div class="divIMG">
  
   <img class="main-img smallscreen" src="/img/main-pic-text.jpg" alt="Начална страница снимка">
   <img class="main-img bigscreen" src="/img/5489711-Recovered-Recovered.png" alt="Снимка голям екран">
  <!--<h2>Добре Дошли в SND Бутик. <br></h2> -->
</div>


<main>
  @include('layouts.main-website.main')  
  {{-- The products are picked up with AJAX from 
    <script src="/javascript/ajax/main_page_products.js"></script>
    HTML Code for the products can be found there 
 --}}
</main>

@include('layouts.main-website.footer')

<script src="/javascript/ajax/main_page_products.js"></script>
</body>
</html>