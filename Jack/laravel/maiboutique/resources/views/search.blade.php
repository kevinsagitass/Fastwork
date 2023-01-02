@extends('layouts.app', ['menus' => App\Utils\HeaderUtil::getMenu()])

@section('content')
<div class="container">
    <div class="row">
        <div class="col-12 text-center">
            <h3>Search Your Favorite Clothes!</h3>
        </div>
    </div>
    <form action="{{ url('product/search') }}" method="get">
        <div class="row">
            <div class="col-sm-8 col-md-11">
                <div class="input-group">
                    <input class="form-control py-2 border-right-0 border" type="search" placeholder="Search Product" name="search" id="search" autofocus>
                    <span class="input-group-append">
                        <button class="btn btn-outline-secondary border-left-0 border" type="button" onclick="document.getElementById('search').value = ''">
                            &#x2715
                        </button>
                    </span>
                </div>
            </div>
            <div class="col-sm-4 col-md-1">
                <input class="btn btn-primary w-100" type="submit" value="Search">
            </div>
        </div>
    </form>
    <div class="row">
        @foreach($products as $product)
        <div class="col-sm-6 col-md-3 my-3">
            <div class="card">
                <img src="{{ asset('storage/products/' . $product->image) }}" alt="">
                <div class="card-body">
                    <p class="card-text font-weight-bold">{{$product->name}}</p>
                    <p class="card-text">Rp. {{number_format($product->price,2,',','.')}}</p>
                    <a class="btn btn-primary" href="{{ url('/product/' . $product->id) }}">More Detail</a>
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
