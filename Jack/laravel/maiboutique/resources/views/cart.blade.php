@extends('layouts.app', ['menus' => App\Utils\HeaderUtil::getMenu()])

@section('content')
<div class="container">
    <div class="row">
        <div class="col-12 text-center">
            <h2>My Cart</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-12 text-right">
            <h3 class="font-weight-bold">Total Price : {{ number_format($totalPrice,2,',','.') }}</h3>
            <a class="btn btn-primary" href="{{ url('check-out') }}">Check Out ({{ count($carts) }})</a>
        </div>
    </div>
    <div class="row">
        @foreach($carts as $cart)
        <div class="col-sm-6 col-md-3 my-3">
            <div class="card">
                <img src="{{ asset('storage/products/' . $cart->product->image) }}" alt="">
                <div class="card-body">
                    <p class="card-text font-weight-bold">{{$cart->product->name}}</p>
                    <p class="card-text">Rp. {{number_format($cart->product->price,2,',','.')}}</p>
                    <p class="card-text">Qty: {{$cart->quantity}}</p>
                    <form method="post" action="{{ url('/cart/' . $cart->product->id) }}">
                        @csrf
                        {{ method_field('DELETE') }}
                        <div class="row">
                            <div class="col-sm-12 col-md-4">
                                <a class="btn btn-primary" href="{{ url('/cart/edit/' . $cart->product->id) }}">Edit Cart</a>
                            </div>
                            <div class="col-sm-12 col-md-8">
                                <input class="btn btn-danger w-100" type="submit" value="Remove from Cart" style="border-radius: 10px;"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        @endforeach
    </div>
</div>
@endsection
