<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class HomeController extends Controller
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
    public function index()
    {
        $products = Product::paginate(8);

        return view('home', [
            'products' => $products
        ]);
    }

    public function searchProduct(Request $request)
    {
        $query = $request->search;

        $products = Product::where('name', 'like', "%" . $query . "%")->paginate(8);

        return view('search', [
            'products' => $products
        ]);
    }
}
