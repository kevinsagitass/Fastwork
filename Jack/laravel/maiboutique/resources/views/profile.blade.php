@extends('layouts.app', ['menus' => App\Utils\HeaderUtil::getMenu()])

@section('content')
<div class="container">
    <div class="card w-50 m-auto">
        <div class="card-body">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="font-weight-bold">My Profile</h2>
                    <button class="btn btn-secondary mb-1">{{ $user->role }}</button>
                    <p class="font-weight-bold mb-0">Username : {{ $user->username }}</p>
                    <p class="mb-0">{{ $user->email }}</p>
                    <p class="mb-0">Address : {{ $user->address }}</p>
                    <p class="mb-0">Phone : {{ $user->phone }}</p>
                </div>
            </div>
            <div class="row mt-3">
                @if($user->role == 'member')
                    <div class="col-sm-12 col-md-6 text-center">
                        <a class="btn btn-primary w-75" href="{{ url('profile/edit') }}">Edit Profile</a>
                    </div>
                @endif
                <div class="col-sm-12 col-md-{{ $user->role == 'admin' ? 12 : 6 }} text-center">
                    <a class="btn btn-primary w-{{ $user->role == 'admin' ? 25 : 75 }}" href="{{ url('profile/password') }}" style="background-color: white; color: blue;">Edit Password</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
