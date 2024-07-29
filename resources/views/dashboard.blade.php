<x-app-layout>

    <link rel="stylesheet" href="/css/dashboard.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    {{-- <script src="https://cdn.tiny.cloud/1/qswlp4bn8j5u5ab8di0hfciu0oa0u3np9qq76utrli46e9xl/tinymce/7/tinymce.min.js" referrerpolicy="origin"></script> --}}

    

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg dashboard-div">
                <h1>Добре дошли в таблото за управление</h1>
                
                <div class="container-dash py-5">

                    <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
                        <div class="card-body">
                          <h5 class="card-title">Качване на продукти</h5>
                          <img class="card-img-top" src="/img/uploadIMG.png"alt="Card image cap">
                          <p class="card-text">Тази секция отговаря за качване и обновяване на продуктите.</p>
                          <a href="{{ route('dashboard') }}/dashboard-pages/products" class="btn btn-primary">Зареди секция</a>
                        </div>
                      </div>

                    <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">Преглед на поръчките</h5>
                        <img class="card-img-top" src="/img/orders.png" alt="Card image cap">
                        <p class="card-text">В тази секция има информация за всяка поръчка</p>
                        <a href="{{ route('dashboard') }}/dashboard-pages/orders" class="btn btn-primary">Зареди секция</a>
                        </div>
                    </div>

                    <div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">Цени за доставка (Speedy и Еконт)</h5>
                        <img class="card-img-top" src="/img/speedy.png" alt="Card image cap">
                        <p class="card-text">Тук могат да се променят цените за доставка.</p>
                        <a href="{{ route('dashboard') }}/dashboard-pages/delivery" class="btn btn-primary">Зареди секция</a>
                    </div>
                    
                    </div>
                </div>
            </div>

            

            @if(Request::is('dashboard/dashboard-pages/delivery'))

             @yield('delivery_content')

             @elseif(Request::is('dashboard/dashboard-pages/products'))

             @yield('products_content')

             @elseif(Request::is('dashboard/dashboard-pages/orders'))

             @yield('orders')

            @endif
            
           

        </div>
    </div>
</x-app-layout>
