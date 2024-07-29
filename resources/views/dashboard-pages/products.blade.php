
@extends('dashboard')

@section('products_content')

<script src="https://cdn.tiny.cloud/1/qswlp4bn8j5u5ab8di0hfciu0oa0u3np9qq76utrli46e9xl/tinymce/7/tinymce.min.js" referrerpolicy="origin"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
<script src="https://pingendo.com/assets/bootstrap/bootstrap-4.0.0-alpha.6.min.js"></script>
<link rel="stylesheet" href="/css/dashboard.css">


<div id="scrollDiv" style="margin-top: 30px" class="bg-white overflow-hidden shadow-sm sm:rounded-lg dashboard-div">

<h3>Качване на продукт</h3>

<form class="formAddProduct" method="POST" enctype="multipart/form-data">

  @csrf

<div class="form_inputs">
  <label for="product_name"><b>Име на продукт:</b></label><br>
<input required name="product_name" placeholder="Напишете име" id="product_name" type="text">
<p style="color: red" id="nameError"></p>

<br>

<label for="selling_price"><b>Продажна цена:</b> </label> <br>
<input required name="selling_price" id="selling_price" placeholder="Колко струва нашия продукт?" type="text">
<p style="color: red" id="sellingError"></p>

<br>

<label for="price_tag"><b>Цена на продукта: </b></label><br>
<input required name="price_tag" id="price_tag" placeholder="Цена на продукт" type="text">
<p style="color: red" id="numbError"></p>

<br>

<label for="category_product"><b>Категория:</b> </label>
<select required name="category_product" id="category_product">
  <option value="Тениски и топове">Тениски и топове</option>
  <option value="Блузи и ризи">Блузи и ризи</option>
  <option value="Панталони">Панталони</option>
  <option value="Рокли">Рокли</option>
  <option value="Поли">Поли</option>
  <option value="Аксесоари">Аксесоари</option>
  <option value="Комплекти">Комплекти</option>
</select>

<br><br>


<b>Изберете налични размери</b> 
<br>

<input type="checkbox" id="size_S" name="size_S" value="S">
<label for="size_S">S</label><br>

<input type="checkbox" id="size_M" name="size_M" value="M">
<label for="size_M"> M</label><br>

<input type="checkbox" id="size_L" name="size_L" value="L">
<label for="size_L"> L</label><br>

<input type="checkbox" id="size_XL" name="size_XL" value="XL">
<label for="size_XL">XL</label><br>

<input type="checkbox" id="size_XXL" name="size_XXL" value="XXL">
<label for="size_XXL">XXL</label><br>

<label ><b>Снимка на продукта</b></label>
<input required name="product_image"  type="file">

</div>

<div class="form_inputs second">
<label for="price_discount"><b>Отстъпка: </b></label>
<input required name="price_discount" id="price_discount" type="text">
<p style="color: red" id="discountError"></p>

<label for="product_desc"><b>Описание на продукта</b></label>
<textarea  name="product_desc" id="product_desc" cols="5" rows="5"></textarea>
<p id="textError" style="color: red"></p>
</div>

<br>


<button type="submit" id="addProd">Добави продукт</button>
<input name="hidden_input" value="add_product" type="hidden">



</form>


@if (isset($success))
    <span id="successMessage" class="alert alert-success">
        {{ $success }}
    </span>
@endif

<script>

let showMessage = document.getElementById('successMessage');

if (showMessage) {
    if (showMessage.style.display = 'flex') { 
        setTimeout(function() {
            showMessage.style.display = 'none';
        }, 2000);
    }
}
 
</script>

<hr>

<h4>Налични продукти</h4>
<br>

<div>

<label class="label_search_product" for="search_product_dashboard"><b>Потърси продукт</b></label><br>
<input name="search_product_dashboard" id="search_product_dashboard" placeholder="Потърси по име или код на продукта" type="text">

<div class="py-5">
  <div class="container">
    <div id='container_with_products' class="row hidden-md-up container_prods">

      {{-- here is inserted the code from  <script src="/javascript/ajax/dashboard_products.js"> </script>--}}

    </div>
  </div>
</div>

</div>

<script>
         
  tinymce.init({
    selector: '.prods_textarea, #product_desc',
   toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
   tinycomments_mode: 'embedded',
   tinycomments_author: 'Author name',
   content_css : '/css/dashboard.css'
 });

</script>

<script src="/javascript/ajax/dashboard_products.js"> </script>
<script src="/javascript/product_inputs_check.js"></script>

@endsection()