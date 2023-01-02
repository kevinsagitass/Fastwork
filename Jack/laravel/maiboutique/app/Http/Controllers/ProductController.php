<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

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

    public function addItem()
    {
        return view('add_item');
    }

    public function addProduct(Request $request)
    {
        $validated = $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg',
            'name' => 'required|min:5|max:20|unique:products',
            'description' => 'required|min:5',
            'price' => 'required|numeric|min:1000',
            'stock' => 'required|numeric|min:1',
        ]);

        $imageName = time() . '.' . $request->image->extension();
        $request->image->storeAs('public/products', $imageName);

        Product::create([
            'image' => $imageName,
            'name' => $validated['name'],
            'description' => $validated['description'],
            'price' => $validated['price'],
            'stock' => $validated['stock'],
        ]);

        return redirect()->route('home');
    }
}
