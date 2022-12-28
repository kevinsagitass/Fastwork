@extends('layouts.app', ['menus' => App\Utils\HeaderUtil::getMenu()])

@section('content')
<div class="container">
    <div class="row">
        <div class="col-12 text-center">
            <h2>Check What You've Bought!</h2>
        </div>
    </div>
    @foreach($transactions as $transaction)
        <div class="row">
            <h3 class="font-weight-bold">{{$transaction->created_at}}</h3>
            <ul>
                @foreach($transaction->transaction_details as $detail)
                    <li>{{$detail->quantity}} Pc(s) {{$detail->product_name}} - Rp. {{number_format($detail->price,2,',','.')}}</li>
                @endforeach
            </ul>
            <h3 class="font-weight-bold">{{$transaction->total_price}}</h3>
        </div>
    @endforeach
    <div class="row">
        <div class="col-12 d-flex justify-content-center">
            {{ $products->links() }}
        </div>
    </div>
</div>
@endsection
