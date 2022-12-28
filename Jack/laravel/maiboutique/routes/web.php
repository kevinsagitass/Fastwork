<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\TransactionController;
use Illuminate\Support\Facades\Auth;

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

// Product
Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/product/{id}', [ProductController::class, 'productDetail'])->name('product-detail');
Route::delete('/product/{id}', [ProductController::class, 'deleteProduct'])->name('product-delete');

// Cart
Route::get('cart', [CartController::class, 'index'])->name('cart');
Route::post('/add-cart', [CartController::class, 'addCart'])->name('add-cart');
Route::delete('/cart/{productId}', [CartController::class, 'removeFromCart'])->name('remove-from-cart');
Route::get('cart/edit/{productId}', [CartController::class, 'editCart'])->name('edit-cart');
Route::get('check-out', [CartController::class, 'checkout'])->name('check-out');

// Transaction
Route::get('history', [TransactionController::class, 'index'])->name('history');
