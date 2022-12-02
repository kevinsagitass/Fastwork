@extends('layout.mainlayout')
@section('content')
    <div>
        <div class="row">
            <div class="col-12" style="background-color: grey">
                <h3 class="text-white">{{ $category->name }}</h3>
            </div>
        </div>
        <div class="row">
            @foreach ($book_categories as $bc)
                <div class="col-sm-4 col-md-3">
                    <div class="card w-100 m-3">
                        <img class="card-img-top" src="{{ asset('storage/books/' . $bc->book->image) }}"
                            style="height: 100%; max-height: 300px" />
                        <div class="card-body">
                            <h3 class="card-title">{{ $bc->book->title }}</h3>
                            <h4>By</h4>
                            <h4 class="card-text">{{ $bc->book->author }}</h4>
                        </div>
                        <div class="card-footer">
                            <a href="{{ '/book/' . $bc->book->id }}" class="btn btn-primary">Book Detail</a>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
@endsection
