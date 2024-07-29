$.ajax({
    type: 'GET',
    url: '/products-json',
    dataType: 'json',
    success: function (response) {


        let prods = response.products;
        let container_with_products = document.getElementById('container_with_products');

        prods.forEach(product => {

            let img = product.product_image;
            let category = product.category;
            let name = product.product_name;
            let uniqueId = product.unique;
            let price_tag = product.price_tag;
            let desc = product.description;
            let selling_price = product.selling_price;
            let discount = product.discount;
            let csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
            // let sizes = product.available_sizes.split(', ');


            let sizes = product.available_sizes.split(', ').map(size => `<span class='span_sizes'>${size}</span>`).join(' ');

            // Create HTML for each product
            let html = `
     
              <form method="post" enctype="multipart/form-data" class="form_show_products">
    
                <div class='input_div'>
                <b>Име:</b> <br><input type='text' value='${name}' name='modify_name' class="name_value"><br><br>
                <b> Продажбена цена:</b> <br><input  value="${selling_price}" name='modify_selling_price' type='text'><br><br>
                <b>Цена:</b>  <br><input name='modify_price' value="${price_tag }" type='text'><br><br>
                <b>Отстъпка:</b>  <br><input name='modify_discount' value="${discount}" type='text'><br><br>
                <b>Код:</b>  <br><input class='code' disabled value="${uniqueId}" type='text'><br><br>
                <label for="category_Update"><b>Категория:</b> </label>
                <select required name="category_Update" id="category_Update">
                <option class='selected_category' selected>${category} </option>
                <option value="Тениски и топове">Тениски и топове</option>
                <option value="Блузи и ризи">Блузи и ризи</option>
                <option value="Панталони">Панталони</option>
                <option value="Рокли">Рокли</option>
                <option value="Поли">Поли</option>
                <option value="Аксесоари">Аксесоари</option>
                <option value="Комплекти">Комплекти</option>
                </select>
                <br>
               </div>

               
               <div>
               <b>Описание на продукта: </b><br>  <textarea name='modify_desc' class='prods_textarea'> ${desc}</textarea><br>
               </div>

               <div class='image_product'>
               <b>Снимка на продукта: </b> <br> <img class='allProductImages' src="/img/main_page_img/${img}" alt="product images"><br>
               <b>Смени снимка: </b><br>
               <input class='modify_img' name='modify_img' type='file'>
               </div>

               

                  <div class='div_span'>
                  <label ><b>Налични размери</b></label><br>
                  ${sizes}

                  <div> 

                  <hr>


                  <input type="checkbox" class="size_S_modify" name="size_S_modify" value="S">
                    <label >S</label><br>

                    <input type="checkbox" class="size_M_modify" name="size_M_modify" value="M">
                    <label> M</label><br>

                    <input type="checkbox" class="size_L_modify" name="size_L_modify" value="L">
                    <label > L</label><br>

                    <input type="checkbox" class="size_XL_modify" name="size_XL_modify" value="XL">
                    <label >XL</label><br>

                    <input type="checkbox" class="size_XXL_modify" name="size_XXL_modify" value="XXL">
                    <label >XXL</label><br>

                    </div>

                  <div class='div_buttons'>

                  <button id="save_changes" value="update" name="update_and_delete" type="submit">Обнови <br> продука</button>

                  <p class='trigger_delete_modal'>Изтрии <br>продукта</p>
                  <div class='contain_buttons'> 

                <p class='p_message'><b>Сигурни ли сте че искате да изтриете продукта?</b></p>

                <div class='delete_and_no'>
                <button id="delete_btn" class='del_btn' value="delete" name="update_and_delete" type="submit">Изтрий</button>
                <p class ='no_modal'>НЕ </p>
                  </div>

                  </div>

                  </div>

                  <hr>
                
        
    
                <input class='hidden_unique' name="unique_id" value="${uniqueId}" type="hidden">
                <input value="update_product_hidden" name="hidden_input" type="hidden">
                <input name="_token" value="${csrfToken}" type="hidden">
                
                </div>
          
              </form>`;

            container_with_products.innerHTML += html;

        });

        tinymce.init({
          selector: ' .prods_textarea',
          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Author name',
          content_css : '/css/dashboard.css'
        });

        let searchBar = document.getElementById('search_product_dashboard');

        let title = document.querySelectorAll('.name_value');
        let allCodes = document.querySelectorAll('.code');


        searchBar.addEventListener('input', (e) => {  
          container_with_products.innerHTML = '';
      
          let value = e.target.value.toLowerCase();

          allCodes.forEach(code => {  
            let codeInput = code.value.toLowerCase();
            if (codeInput.includes(value)) {  
              container_with_products.insertAdjacentHTML('beforeend', code.closest('.form_show_products').outerHTML);
          }
          })
    
          title.forEach(titleName => {  
              let valInput = titleName.value.toLowerCase();
              if (valInput.includes(value)) {  
                  container_with_products.insertAdjacentHTML('beforeend', titleName.closest('.form_show_products').outerHTML);
              }
          }); 
      });
        

        let trigger_delete_modal = document.querySelectorAll('.trigger_delete_modal');
        let closeModal = document.querySelectorAll('.no_modal');

        trigger_delete_modal.forEach(trigger => {

            trigger.addEventListener('click', function () {

                let form = this.closest('form');

                let parentDiv = form.querySelector('.contain_buttons');
                let delBTN = form.querySelector('.del_btn');
                let pMessage = form.querySelector('.p_message');
                let no_modal = form.querySelector('.no_modal');

                parentDiv.style.display = 'flex';
                delBTN.style.display = 'inline-block';
                pMessage.style.display = 'flex';
                no_modal.style.display = 'flex';

            });

            closeModal.forEach(close => {

                close.addEventListener('click', function () {

                    let divParent = close.parentElement.parentElement;

                    divParent.style.display = "none";

                });

            });

        });


    // dynamic search bar

    
// SEARCH BAR 


    },



});



