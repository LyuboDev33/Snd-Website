<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;

class OrdersController extends Controller
{
    public function add_Order (Request $request) {


        $order = new Order();

        $order->full_names = $request->full_names;
        $order->phone_number = $request->phone_number;
        $order->delivery = $request->delivery;
        $order->adress = $request->adress;
        $order->city = $request->city;
        $order->code = $request->code;
        $order->comments = $request->comments ?? 'Няма коментари';
        $order->price_order = $request->price_order;
        $order->products_data = $request->products_data;
        $order->identifier = $request->identifier;
        $order->new_order = "Нова поръчка";

        $order->save();

        if($order->save()) { 
            return response()->json(['success' => 'Order created']);

        } else { 
            return response()->json(['fail' => 'Order failed']);

        }

    }

    public function showSuccess () { 

        return view('layouts.success');

    }

    public function getPage () { 

        return view('dashboard-pages.orders');

    }

    public function getOrders () { 

        $orders = DB::table('orders')
        ->orderBy('id', 'desc')
        ->get();

        return response()->json(['orders' => $orders]);

    }

    public function update_order_type (Request $request) { 

        $selected_option = $request->select_option;
        $identifier = $request->identifier;

        // dd($request);

        DB::table('orders')
                    ->where('id', $identifier)
                    ->update([
                        'new_order' => $selected_option,
                     
                    ]);

        return view('dashboard-pages.orders');
    }

}
