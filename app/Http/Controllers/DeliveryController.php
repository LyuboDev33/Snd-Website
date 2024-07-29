<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DeliveryController extends Controller {
    
    public function update(Request $request) { 
       
        if ($request->input('update_type') === 'econt') {
            DB::table('deliveries')
                ->where('id', 1)
                ->update(['econt_price' => $request->econt_price]);
        } elseif ($request->input('update_type') === 'speedy') {
            DB::table('deliveries')
                ->where('id', 1)
                ->update(['speedy_price' => $request->speedy_price]);
        } 

        $prices = DB::table('deliveries')->get();
    
        return view('dashboard-pages.delivery', ['prices' => $prices]);
    }

    public function checkoutPrice () { 

       $prices = DB::table('deliveries')->get();

        return view('layouts.main-website.checkout', ['prices'=>$prices]);

    }

    public function jsonDeliveries () {  

        $delivery_prices = DB::table('deliveries')
        ->orderBy('id', 'desc')
        ->get();

        return response()->json(['delivery_prices' => $delivery_prices]);

    }



}


