<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use App\Models\Transaction;
use App\Models\TransactionDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
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

    public function index()
    {

        $carts = Cart::where('user_id', '=', Auth::user()->id)->get();
        $totalPrice = 0;

        foreach ($carts as $cart) {
            $totalPrice += $cart->product->price * $cart->quantity;
        }

        return view('cart', [
            'carts' => $carts,
            'totalPrice' => $totalPrice
        ]);
    }

    public function addCart(Request $request)
    {
        $maxQty = 1;
        if ($request['productId']) {
            $maxQty = Product::findOrFail($request['productId'])?->stock;
        }

        $validated = $request->validate([
            'quantity' => 'required|numeric|min:1|max:' . $maxQty,
            'productId' => 'required'
        ]);

        $current = Cart::where('user_id', '=', Auth::user()->id)->where('product_id', '=', $validated['productId'])->first();

        if ($current) {

            $current->product->stock += ($current->quantity - $validated['quantity']);
            $current->quantity = $validated['quantity'];

            $current->product->save();
            $current->save();
        } else {
            Cart::create([
                'user_id' => Auth::user()->id,
                'product_id' => $validated['productId'],
                'quantity' => $validated['quantity']
            ]);

            $product = Product::find($validated['productId']);

            if ($product) {
                $product->stock -= $validated['quantity'];

                $product->save();
            }
        }

        return redirect()->route('cart');
    }

    public function removeFromCart($productId)
    {
        $item = Cart::where('user_id', '=', Auth::user()->id)->where('product_id', '=', $productId)->first();

        if ($item) {
            $product = Product::find($productId);

            if ($product) {
                $product->stock += $item->quantity;

                $product->save();
            }

            $item->delete();
        }

        return redirect()->route('cart');
    }

    public function editCart($productId)
    {
        $item = Cart::where('user_id', '=', Auth::user()->id)->where('product_id', '=', $productId)->first();

        if (!$item) {
            abort(404);
        }

        return view('edit_cart', [
            'cart' => $item
        ]);
    }

    public function checkout()
    {
        $carts = Cart::where('user_id', '=', Auth::user()->id)->get();

        $transactionHeader = new Transaction;

        $transactionDetails = [];

        $totalPrice = 0;
        foreach ($carts as $cart) {
            $totalPrice += $cart->product->price * $cart->quantity;
        }

        $transactionHeader->user_id = Auth::user()->id;
        $transactionHeader->total_price = $totalPrice;

        $transactionHeader->save();

        foreach ($carts as $cart) {
            array_push($transactionDetails, [
                'transaction_id' => $transactionHeader->id,
                'product_name' => $cart->product->name,
                'quantity' => $cart->quantity,
                'price' => $cart->product->price
            ]);
        }

        TransactionDetail::insert($transactionDetails);

        Cart::where('user_id', '=', Auth::user()->id)->delete();

        return redirect()->route('history');
    }
}
