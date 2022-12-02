@extends('layout.mainlayout')
@section('content')
    <div>
        <div class="row">
            <div class="col-12" style="background-color: grey">
                <h3 class="text-white">Book Detail</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
                <img class="card-img-top w-50 mt-3" src="{{ asset('storage/books/' . $book->image) }}" />
                <div class="mt-3">
                    <h1>Title : {{ $book->title }}</h1>
                    <h1>Author : {{ $book->author }}</h1>
                    <h1>Publisher : {{ $book->publisher->name }}</h1>
                    <h1>Year : {{ $book->year }}</h1>
                    <h2>Synopsis : </h2>
                    <div>
                        <p>{{ $book->synopsis }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
