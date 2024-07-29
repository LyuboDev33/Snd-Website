<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->longText('full_names');
            $table->longText('phone_number');
            $table->longText('delivery');
            $table->longText('adress');
            $table->longText('city');
            $table->longText('code');
            $table->longText('comments');
            $table->longText('price_order');
            $table->longText('products_data');
            $table->longText('identifier');
            $table->longText('new_order');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
