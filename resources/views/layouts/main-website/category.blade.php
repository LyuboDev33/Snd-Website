<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <link rel="icon" type="image/x-icon" href="/img/favicon.svg">
  <link rel="stylesheet" href="/css/main-website/main.css">
  <title></title>
</head>
<body>

  @include('layouts.main-website.header')

  @php
  $category = null;
  foreach ($products as $header) {
    if (!empty($header->category)) {
      $category = $header->category;
      break;
    }
  }
@endphp

<p class="sectionP">Секция {{ $category ?? '' }}</p>



  <div id="products_container_main">

  @foreach ($products as $product)



<a href="/products/{{ $product->unique }}" class="products">
    <div class='image_discount_div'>
  
        <span class='discount_info'> -{{ $product->discount }}%</span>

      <img class="product_img_styles" src="/img/main_page_img/{{ $product->product_image }}" alt="Снимка продукт">
      <p class='product_name'>{{ $product->product_name }}</p>
    </div>

    <div class='inside_second_div'>
   
      <div class='all_span_sizes'></div>
 
      <s><p class='price_tag'>{{ $product->price_tag }} лв.</p></s>
  
      <p class='fin_price'></p>
    
      <div><button class='order_btn'>ПОРЪЧАЙ</button></div>
    </div>

   
    <input class="spanSizes" type="hidden">
    <input class="div_span_sizes" value="{{$product->available_sizes}}" type="hidden">
    <input class='hidden_discount' type='hidden' value='{{ $product->discount }}'>
  </a>
  
@endforeach

</div>

@include('layouts.main-website.footer')


  <script src="/javascript/category_logic.js"></script>
</body>
</html>

