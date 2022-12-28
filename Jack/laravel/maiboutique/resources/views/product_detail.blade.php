@extends('layouts.app', ['menus' => App\Utils\HeaderUtil::getMenu()])

@section('content')
<div class="container">
    <div class="row p-3" style="height: fit-content; border: 1px solid black;">
        <div class="col-sm-12 col-md-6 text-center" style="height: fit-content; border-right: 1px solid black;">
            <img src="{{ asset('storage/products/' . $product->image) }}" alt="" style="max-width: 100%; max-height: 75%;" />
        </div>
        <div class="col-sm-12 col-md-6" style="height: fit-content;">
            <h2 class="font-weight-bold">{{ $product->name }}</h2>
            <h3 class="font-weight-bold">Rp. {{number_format($product->price,2,',','.')}}</h3>
            <hr />
            <p class="font-weight-bold">Product Detail</p>
            <p class="text-sm">{{ $product->description }}</p>
            <hr style="height: 10px; background-color: black; border: none;" />
            <p class="font-weight-bold">Stock : {{$product->stock}}</p>
            <p class="font-weight-bold">Quantity : </p>
            @if(Auth::user()->role == "member")
                <form method="post" action="{{ url('/add-cart') }}">
                    @csrf
                    <div class="row">
                        <div class="col-12 pr-0">
                            <input id="quantity" class="form-control text-center @error('quantity') is-invalid @enderror" type="number" name="quantity" value="{{ old('quantity') }}" required autocomplete="quantity" autofocus style="border-radius: 10px; min-height: 30px;">

                            @error('quantity')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-6">
                            <a class="btn btn-danger h-100 w-100" href="{{ url()->previous() }}" style="border-radius: 10px;">Back</a>
                        </div>
                        <div class="col-6">
                            <input class="btn btn-success w-100" type="submit" value="Add To Cart" style="border-radius: 10px;">
                        </div>
                    </div>
                    <input type="hidden" name="productId" value="{{ $product->id }}">
                </form>
            @else
                <form method="post" action="{{ url('/product/' . $product->id) }}">
                    @csrf
                    {{ method_field('DELETE') }}
                    <div class="row">
                        <div class="col-6">
                            <a class="btn btn-danger h-100 w-100" href="{{ url()->previous() }}" style="border-radius: 10px;">Back</a>
                        </div>
                        <div class="col-6">
                            <input class="btn btn-danger w-100" type="submit" value="Delete Item" style="border-radius: 10px;"></input>
                        </div>
                    </div>
                </form>
            @endif
        </div>
    </div>
</div>
@endsection
