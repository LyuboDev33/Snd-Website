<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{

    public function getProductsWithJson(Request $request)
    {
        $products = DB::table('products')
        ->orderBy('id', 'desc')
        ->get();
                
        return response()->json(['products' => $products]);
    }

    public function getJSON(Request $request)
    {
        $products = DB::table('products')
        ->orderBy('id', 'desc')
        ->get();
        
                
        return response()->json(['all_products' => $products]);
    }

    public function productPage() {
        return view('dashboard-pages.products');
    }


    public function display_products ($data) { 

            $pass_products =  DB::table('products')
            ->where('unique', $data)
            ->get();

            return view('layouts.main-website.products', ['products' => $pass_products]);
    }

    public function get_Category ($data) { 

        $pass_products = DB::table('products')
        ->where('category', $data)
        ->orderBy('id', 'desc')
        ->get();

        return view('layouts.main-website.category', ['products' => $pass_products]);

    }
 


    public function addProduct(Request $req) {

   
        if ($req->hidden_input === 'add_product') {

            $req->validate([
                'product_image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            $image = $req->file('product_image');

            $imageName = time() . '-' . $image->getClientOriginalName();

            $image->move(public_path('img/main_page_img'), $imageName);

            $sizes = array();

            $sizes[] = $req->size_S . ', ';
            $sizes[] = $req->size_M . ', ';
            $sizes[] = $req->size_L . ', ';
            $sizes[] = $req->size_XL . ', ';
            $sizes[] = $req->size_XXL . ', ';

            $sizesContain = implode(' ', $sizes);

            function generateShortCode($length = 5) {
                $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                $charactersLength = strlen($characters);
                $randomString = '';
                for ($i = 0; $i < $length; $i++) {
                    $randomString .= $characters[rand(0, $charactersLength - 1)];
                }
                return $randomString;
            }

            $shortCode = generateShortCode();

            

            $products = new Product();

            $products->product_name = $req->product_name;
            $products->price_tag = $req->price_tag;
            $products->selling_price = $req->selling_price;
            $products->discount = $req->price_discount;
            $products->description = $req->product_desc;
            $products->unique = $shortCode;
            $products->available_sizes = $sizesContain;
            $products->category = $req->category_product;
            $products->product_image = $imageName;

            $products->save();

            return view('dashboard-pages.products')->with(['success' => 'Продуктът беше добавен.']);

        } else if ($req->hidden_input === 'update_product_hidden') {


            if ($req->update_and_delete === 'update') {
                $sizes = [];
            
                if (!empty($req->size_S_modify)) $sizes[] = $req->size_S_modify;
                if (!empty($req->size_M_modify)) $sizes[] = $req->size_M_modify;
                if (!empty($req->size_L_modify)) $sizes[] = $req->size_L_modify;
                if (!empty($req->size_XL_modify)) $sizes[] = $req->size_XL_modify;
                if (!empty($req->size_XXL_modify)) $sizes[] = $req->size_XXL_modify;
            
                if (!empty($sizes)) {
                    $sizesContain = implode(', ', $sizes);
                } else {

                    $existingProduct = DB::table('products')->where('unique', $req->unique_id)->first();
                    $sizesContain = $existingProduct->available_sizes;
                }
            
                if ($req->hasFile('modify_img')) {
                    $image = $req->file('modify_img');
                    $imageName = time() . '-' . $image->getClientOriginalName();
                    $image->move(public_path('img/main_page_img'), $imageName);
                } else {

                    $existingProduct = DB::table('products')->where('unique', $req->unique_id)->first();
                    $imageName = $existingProduct->product_image;
                }
            
                DB::table('products')
                    ->where('unique', $req->unique_id)
                    ->update([
                        'product_name' => $req->modify_name,
                        'description' => $req->modify_desc,
                        'selling_price' => $req->modify_selling_price,
                        'price_tag' => $req->modify_price,
                        'product_image' => $imageName, 
                        'available_sizes' => $sizesContain, 
                        'discount' => $req->modify_discount,
                        'category' => $req->category_Update
                    ]);
                    
            } else if ($req->update_and_delete === 'delete') {

                DB::table('products')->where('unique', $req->unique_id)->delete();
            }

            return view('dashboard-pages.products');
        }
    }
}
