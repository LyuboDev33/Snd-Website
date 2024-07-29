
@extends ('dashboard')


@section('delivery_content')

<div id="#scrollDiv" style="margin-top: 30px" class="bg-white overflow-hidden shadow-sm sm:rounded-lg dashboard-div">


  <div class="divForms">
    
    @if(!$prices->isEmpty() || isset($prices))

    @foreach ($prices as $price)
    
      <form method="POST" class="speedyForm">
  
        <img src="/img/speedy.png" alt="speedy-img">
        
        @csrf
        <label for="speedy_price"><b>Цена за доставка на Speedy:</b></label><br>
        <input placeholder="Променете цената при нужда" id="speedy_price" name="speedy_price" type="text"><br>
        <p style="color: red" id="speedyError"></p>
  
        <button class="btn btn-primary" id="updateSpeedy" type="submit">Обнови</button>
        <input type="hidden" name="update_type" value="speedy"><br>
  
        <br>
  
        <label for="current_speedy_price">Актуална цена към момента:</label><br>
        <input disabled name="current_speedy_price" value="{{ $price->speedy_price }} лв." type="text">
  
      </form>
  
      <form class="econtForm" method="POST">
  
        <img src="/img/econt.png" alt="econt-image">
      
        @csrf
        <label for="econt_price"><b>Цена за доставка на Еконт:</b></label><br>
        <input placeholder="Променете цената при нужда" id="econt_price" name="econt_price" type="text"><br>
        <p style="color: red" id="econtError"></p>
  
        <button class="btn btn-primary" id="updateEcont" type="submit">Обнови</button>
        <input type="hidden" name="update_type" value="econt"><br>
  
        <br>
  
        <label for="current_econt_price">Актуална цена към момента:</label><br>
        <input disabled name="current_econt_price" value="{{ $price->econt_price }} лв." type="text">
  
      </form>
  
    @endforeach
  
  @endif
     
  
  </div>
  
 
</div>


@endsection()


<script src="/javascript/deliver_inputs_check.js"></script>

