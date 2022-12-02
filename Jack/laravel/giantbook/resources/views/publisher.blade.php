@extends('layout.mainlayout')
@section('content')
    <div>
        @foreach ($publishers as $publisher)
            <div class="row" style="background-color: grey">
                <div class="col-6">
                    <h4 class="text-white">Name : {{ $publisher->name }}</h4>
                    <h4 class="text-white">Address : {{ $publisher->address }}</h4>
                    <h4 class="text-white">Phone : {{ $publisher->phone }}</h4>
                    <h4 class="text-white">Email : {{ $publisher->email }}</h4>
                </div>
                <div class="col-6">
                    <img class="w-50 float-right" style="max-height: 300px" src="{{ asset('/storage/profiles/'.$publisher->image) }}">
                </div>
            </div>
            <div class="row">
                @foreach ($publisher->books as $book)
                    <div class="col-sm-4 col-md-3">
                        <div class="card w-100 m-3">
                            <img class="card-img-top" src="{{ asset('storage/books/' . $book->image) }}"
                                style="height: 100%; max-height: 300px" />
                            <div class="card-body">
                                <h3 class="card-title">{{ $book->title }}</h3>
                                <h4>By</h4>
                                <h4 class="card-text">{{ $book->author }}</h4>
                            </div>
                            <div class="card-footer">
                                <a href="{{ '/book/' . $book->id }}" class="btn btn-primary">Book Detail</a>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        @endforeach
    </div>
@endsection
