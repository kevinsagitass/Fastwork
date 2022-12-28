<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function productDetail($id)
    {
        $product = Product::find($id);

        if (!$product) {
            abort(404);
        }

        return view('product_detail', [
            'product' => $product
        ]);
    }

    public function deleteProduct($id)
    {
        Product::destroy($id);

        return redirect()->route('home');
    }
}
