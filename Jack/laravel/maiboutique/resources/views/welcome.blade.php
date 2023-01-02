<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Maiboutique</title>

    <!-- Fonts -->
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" crossorigin="anonymous">
    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
</head>

<body>
    <div class="row">
        <div class="col-8">
            <h2 class="font-weight-bold">Maiboutique</h2>
        </div>
        <div class="col-4 text-right">
            @if (Route::has('login'))
            <div class="px-3 py-1">
                @auth
                @include('layouts.partials.nav')
                @else
                <a href="{{ route('login') }}" class="text-gray-700 dark:text-gray-500 underline">Log in</a>
                @endauth
            </div>
            @endif
        </div>
    </div>
    <div class="card bg-dark text-white">
        <img class="card-img" src="{{ asset('images/Arriety.jpg') }}" alt="Card image" style="height: 70%; width: 100%;">
        <div class="card-img-overlay text-center py-auto" style="padding-top: 25%;">
            <div class="font-weight-bold">
                <p class="card-text">Welcome to Maiboutique</p>
                <p>Online Boutique that Provides You With Various Clothes to Suit Your Various Activities</p>
                @auth
                <button class="btn btn-primary"><a class="text-white font-weight-bold" href="{{ route('home') }}">Register</a></button>
                @else
                <button class="btn btn-primary"><a class="text-white font-weight-bold" href="{{ route('register') }}">Register</a></button>
                @endauth
            </div>
        </div>
    </div>
</body>

</html>
