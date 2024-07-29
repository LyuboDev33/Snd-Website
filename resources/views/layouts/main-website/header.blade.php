
<link rel="stylesheet" href="/css/main-website/main.css">
<link rel="stylesheet" href="/css/reset.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">


<header class="main_page_header">

  @include('cookie-consent::index')


<div class="menu_div">
  <div class="resp_menu_div">
    <img class="menu_bar" src="/img/menu.svg" alt="Меню">
    <p class="menu_text">МЕНЮ</p>
  </div>
  <ul class="sidebar_ul_responsive">
         
    <li class="menu_lists"><a  href="/category/Тениски и топове">Тениски и топове</a></li>
    <li class="menu_lists"><a  href="/category/Блузи и ризи">Блузи и ризи</a></li>
    <li class="menu_lists"><a  href="/category/Панталони">Панталони</a></li>
    <li class="menu_lists"><a  href="/category/Рокли">Рокли</a></li>
    <li class="menu_lists"><a  href="/category/Поли">Поли</a></li>
    <li class="menu_lists"><a  href="/category/Аксесоари">Аксесоари</a></li>
    <li class="menu_lists"><a  href="/category/Комплекти">Комплекти</a></li>
  </ul>
  <a href="/"><img class="headerPic" src="/img/main_page_img/pic.png" alt="Снимка табло"> </a>
</div>

<a href="/cart">
  <div title="Вашата количка" class="cart_div">
<img class="cart_sidebar_press" src="/img/cart.png" alt="Количка">
<p class="cart_products_number"></p>
</div> 
</a>

</header>

<div class="cart_sidebar_container">
  <div class="cart_sidebar_modal">


    <div class="div_sidebar_header">
      <p class="choose_category_header">Изберете категория</p>
      <a class="goHomeList" href="/">Начална Страница</a><br>
    </div>


      <div class="menu_options">

        <ul class="sidebar_ul">
         
          <li class="menu_lists"><a  href="/category/Тениски и топове">Тениски и топове</a></li>
          <li class="menu_lists"><a  href="/category/Блузи и ризи">Блузи и ризи</a></li>
          <li class="menu_lists"><a  href="/category/Панталони">Панталони</a></li>
          <li class="menu_lists"><a  href="/category/Рокли">Рокли</a></li>
          <li class="menu_lists"><a  href="/category/Поли">Поли</a></li>
          <li class="menu_lists"><a  href="/category/Аксесоари">Аксесоари</a></li>
          <li class="menu_lists"><a  href="/category/Комплекти">Комплекти</a></li>
        </ul>
        <hr class="hr_list">

      </div>


      <div class="contact_us">
        <p style="line-height: 2 !important;">Имате запитване? <br> Не се притеснявайте да се обадите:<br>
          <i class="fas fa-phone"></i>
          <a class="phoneN_sidebar" href="tel:0894938614">0894 938 614</a>
        </p>
        <p>Работно време: </p>
        <p>Вторник - Неделя: <br><b> 09:00 до 19:00</b></p>
      </div>
      
      <img class="closeSidebar" src="/img/main_page_img/x.svg" alt="Затвори проозорец">
  </div>
</div>


 <script src="/javascript/header.js"></script>
