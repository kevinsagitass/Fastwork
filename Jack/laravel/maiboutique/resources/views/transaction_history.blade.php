@extends('layouts.app', ['menus' => App\Utils\HeaderUtil::getMenu()])

@section('content')
<div class="container">
    <div class="row">
        <div class="col-12 text-center">
            <h2>Check What You've Bought!</h2>
        </div>
    </div>
    @foreach($transactions as $transaction)
        <div class="row mb-1">
            <div class="col-12 p-3" style="background-color: #e4e4e4; border-radius: 10px; border: 1px solid black">
                <h3 class="font-weight-bold">{{$transaction->created_at}}</h3>
                <table class="my-3">
                    @foreach($transaction->transactionDetails as $detail)
                        <tr>
                            <td>&#x2022</td>
                            <td class="pr-3">{{$detail->quantity}} Pc(s)</td>
                            <td class="pr-3">{{$detail->product_name}}</td>
                            <td class="pr-3">Rp. {{number_format($detail->price,2,',','.')}}</td>
                        </tr>
                    @endforeach
                </table>
                <h3 class="font-weight-bold">Total Price {{number_format($transaction->total_price,2,',','.')}}</h3>
            </div>
        </div>
    @endforeach
</div>
@endsection
