

<script src="https://cdn.jsdelivr.net/gh/cant89/gianni-accordion-js/dist/gianniAccordion.min.js"></script>

<p class="ourOffer">Нашите предложения за Вас</p>

<div class="main_container_block">

  <div class="container_offers">

      <div class="offer_div shadow">
        <h3>Готови модни облекла</h3>
        <img class="img_box" src="/img/first_girl.png" alt="Снимка момиче модел">
        <p>
          {{-- Открийте нашите стилни и уникални готови модни облекла, включително тениски, блузи, топове, чанти и други. --}}
          Нашите продукти са изработени с внимание към детайла и качество.</p>
          <a href="/category/Тениски и топове"><button class="btn_goProducts">КЪМ ПРОДУКТИТЕ</button></a>
      </div>

      <div class="offer_div shadow">
        <h3>Облекла по поръчка</h3>
        <img class="img_box" src="/img/astonished_girl.png" alt="Снимка момиче модел">
        <p>
          Споделете вашите идеи с нас и ние ще създадем облекло, което отговаря на вашите изисквания и стил.</p>
          <a href="/contacts"><button class="btn_goProducts">КОНТАКТИ</button></a>
      </div>

      <div class="offer_div shadow">
        <h3>Текстил за хотели и ресторанти</h3>
        <img class="img_box" src="/img/work_girl.png" alt="Снимка момиче модел">
        <p>Изработваме качествени покривки за маса, пердета и други текстилни изделия, подходящи за хотели, ресторанти и други заведения. 
        </p>
          <a href="#faq"><button class="btn_goProducts">ИНФО</button></a>

      </div>
  </div>


{{-- <hr class="hr_sold"> --}}

<p class="most_soldP"><u>НАЙ-ПРОДАВАНИ</u></p>

<div id="products_container_main">


  {{-- HTML code and Logic for the products is rendered inside main-page-products.js --}}



</div>

<p style="text-align: center; margin-bottom: 30px;"><a class="btn_goProducts" href="/category/Тениски и топове">РАЗГЛЕДАЙ ОЩЕ</a></p>

<hr>

<p class="whyUs"><b>Кое ни отличава? </b></p>


<div class="forSNDdiv">
  <div class="advantage shadow">
    <b><span class="title_font">Уникални и ръчно <br> изработени продукти</span></b><br><br> <span class="text_font">
       Всеки артикул в нашия бутик е създаден с любов и внимание към 
       детайла, гарантирайки високо качество и изключителност.
      </span>
  </div>
  <div class="advantage shadow">
    <b><span class="title_font">Персонализирано обслужване</span></b><br><br>
    <span class="text_font"> Като малък екип, ние можем да предложим лично
      отношение и индивидуален подход към всеки
       клиент, което ни позволява да удовлетворим всички ваши нужди и желания.
  </span>
  </div>

  <div class="advantage shadow">
    <b><span class="title_font">Ексклузивни колекции </span></b><br><br> 
    <span class="text_font">Нашите колекции са лимитирани и не се срещат
       масово на пазара. Количествата са ограничени, направете своя избор сега.
       </span>
  </div>

</div>

<div class="delivery_mainpage_div">

  <div class="delivery_icons shadow-sm">
    <img src="/img/fast-delivery-truck.svg" alt="Бърза доставка">
    <div>
      <span>БЪРЗА ДОСТАВКА</span>
      <span>с Еконт или Speedy</span>
    </div>
  </div>

  <div class="delivery_icons shadow-sm">
    <img src="/img/box-check.svg" alt="Преглед и тест">
    <div>
      <span>ПРЕГЛЕД</span>
      <span>и тест при получаване</span>
    </div>
  </div>

  <div class="delivery_icons shadow-sm">
    <img src="/img/box-return.svg" alt="Връщане или замяна">
    <div>
      <span>ВРЪЩАНЕ</span>
      <span>или замяна до 14 дни</span>
    </div>
  </div>

</div>

<section id="faq" class="card cards">

  <h3 class="faq_h3">Често Задавани Въпроси</h3>

  <article>
    <h1 class="h1_faq" data-accordion-element-trigger>Това е тестов въпрос ?</h1>
    <div data-accordion-element-content class="content">
      <p class="p_faq">Нашите дрехи са направени от...</p>
    </div>
  </article>

  <article>
    <h1 class="h1_faq" data-accordion-element-trigger>Каква материя използваме за направата на дрехите?</h1>
    <div data-accordion-element-content class="content">
      <p class="p_faq">Нашите дрехи са направени от...</p>
    </div>
  </article>

  <article>
    <h1 class="h1_faq" data-accordion-element-trigger>Как работят индивидуалните поръчки?</h1>
    <div data-accordion-element-content class="content">
      <p class="p_faq">
        За да създадем дреха по поръчка е необходимо да знаете какви са нашите изискванията: <br><br>
        1. Измерване и изпращане на вашите размери - талия, ханш. 
        (Вашата дреха ще бъде направена на базата на размерите, които ни изпратите) <br><br>
        2. Индивидуалните поръчки се капарират - След като ни изпратите вашите размери и капаро,
        ние ще започнем работа по вашата дреха. 
        <br><br>
        3. Срокът за изработване е между 5 и 10 работни дни, като ние винаги се стараем да изпълним поръчката в най-кратък срок. <br><br>
        Ако имате нужда от индивидуална консултация, свържете се с нас на посочените телефони в секция
        <a href="/contacts">КОНТАКТИ</a> <br><br>
        <span style="color: red">ВАЖНО: </span> В случай, че искате промяна на размера, можете да върнете дрехата за преработка.
      </p>
    </div>
  </article>




  
</section>



<script defer src="/javascript/scroll_animations.js"></script>

<script>
  var myAccordion = new gianniAccordion({
  elements: ".card article",
          trigger: "[data-accordion-element-trigger]",
        content: "[data-accordion-element-content]",
});

</script>

</div>
