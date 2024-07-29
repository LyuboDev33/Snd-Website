<?php

use App\Http\Controllers\DeliveryController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;



Route::get('/register-and-login', function () {
    return view('welcome');
});

Route::get('/', function () {
    return view('nachalna-stranica');
})->name('home');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/products/{id}', [ProductController::class, 'display_products']);
Route::get('/mai_page_json_products', [ProductController::class, 'getJSON']);
Route::get('/category/{id}', [ProductController::class, 'get_Category'])->name('cat');

Route::post('/checkout', [OrdersController::class, 'add_Order'])->name('checkout.addProduct');
Route::get('/checkout/success', [OrdersController::class, 'showSuccess']);



Route::get('/products', function () { return redirect('/'); });
Route::get('/cart', function () { return view('layouts.main-website.cart'); });
Route::get('/checkout', function () { return view('layouts.main-website.checkout');});
Route::get('/checkout', [DeliveryController::class, 'checkoutPrice']);

Route::get('/contacts', function (){ return view('layouts.main-website.contacts'); });
Route::get('/conditions', function (){ return view('layouts.terms_conditions.conditions'); });
Route::get('/privacy', function (){ return view('layouts.terms_conditions.privacy'); });



Route::middleware('auth')->group(function () {
    
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/dashboard/dashboard-pages/products', [ProductController::class, 'productPage']);
    Route::post('/dashboard/dashboard-pages/products', [ProductController::class, 'addProduct']);
    Route::get('/products-json', [ProductController::class, 'getProductsWithJson']);

    Route::any('dashboard/dashboard-pages/delivery', [DeliveryController::class, 'update']);


    Route::get('/dashboard/dashboard-pages/orders', [OrdersController::class, 'getPage']);
    Route::get('/ordersJSON', [OrdersController::class, 'getOrders']);
    Route::get('/deliveryPrices', [DeliveryController::class, 'jsonDeliveries']);

    Route::post('/dashboard/dashboard-pages/orders', [OrdersController::class, 'update_order_type']);

});



require __DIR__.'/auth.php';
