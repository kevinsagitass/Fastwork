<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\PublisherController;
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index']);

Route::get('/book/{id}', [HomeController::class, 'bookDetail']);

Route::get('/category/{id}', [CategoryController::class, 'index']);

Route::get('/publisher', [PublisherController::class, 'index']);

Route::get('/contact', [ContactController::class, 'index']);
