@extends('layouts.app', ['menus' => App\Utils\HeaderUtil::getMenu()])

@section('content')
<div class="container">
    <div class="card w-50 m-auto">
        <div class="card-body">
            <div class="row mb-3">
                <div class="col-12 text-center">
                    <h2 class="font-weight-bold">Update Password</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <form action="{{ url('/profile/password/save') }}" method="post">
                        @csrf
                        <div class="form-group">
                            <label class="font-weight-bold" for="password">Old Password</label>
                            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autofocus>

                            @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label class="font-weight-bold" for="newPassword">New Password</label>
                            <input id="newPassword" type="password" class="form-control @error('newPassword') is-invalid @enderror" name="newPassword" required autofocus>

                            @error('newPassword')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                        <input class="btn btn-success w-100" type="submit" href=""></input>
                        <a class="btn btn-danger mt-3 w-100" href="{{url()->previous()}}">Back</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
