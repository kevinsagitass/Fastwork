@extends('layouts.app', ['menus' => App\Utils\HeaderUtil::getMenu()])

@section('content')

<div class="bg-image img-fluid "
style="background-image: url('/images/digimonbg.jpg'); background-repeat: no-repeat; -webkit-background-size: cover; height: 150vh">

<div class="container">
    <div class="row">
        <div class="col-12 text-center">
            <h3 class="mt-4"></h3>
        </div>
    </div>
    <div class="row">
        @foreach($products as $product)
        <div class="col-sm-6 col-md-3 my-3">
            <div class="card">
                <img src="{{ asset('storage/products/' . $product->image) }}" alt="">
                <div class="card-body">
                    <p class="card-text font-weight-bold">{{$product->name}}</p>
                    <p class="card-text">Rp. {{number_format($product->price,2,',','.')}}</p>
                    <a class="btn btn-primary" href="{{ url('/product/' . $product->id) }}">More Detail</a>
                    <h1>Shes confident</h1>
                    <p>She said that is her first time</p>
                    <p>oyeyeye</p>
                </div>
            </div>
        </div>
        @endforeach
    </div>
    <div class="row">
        <div class="col-12 d-flex justify-content-center">
            {{ $products->links() }}
        </div>
    </div>
</div>
@endsection
