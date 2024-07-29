<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<link rel="stylesheet" href="/css/dashboard.css">

<meta name="csrf-token" content="{{ csrf_token() }}">

@extends ('dashboard')

@section('orders')

<div id="scrollDiv" style="margin-top: 30px" class="bg-white overflow-hidden shadow-sm sm:rounded-lg dashboard-div">

  <div class="search_dashboard">
    <p>Потърси по име: </p>
    <input class="search_order" type="text">
  </div>

  <div class="all_orders">


  </div>  


  
 
</div>

@endsection

<script type="text/javascript" src="/javascript/ajax/orders.js"></script>