<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\ProfileController;
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

// Anyone
Route::get('/', function () {
    return view('welcome');
})->name('landing');

Auth::routes();

// Member and Admin Privilege
Route::group(['middleware' => ['auth']], function () {
    Route::get('home', [HomeController::class, 'index'])->name('home');
    Route::get('product/search', [HomeController::class, 'searchProduct'])->name('product-search');
    Route::get('product/{id}', [ProductController::class, 'productDetail'])->name('product-detail');

    Route::get('profile', [ProfileController::class, 'index'])->name('profile');
    Route::get('profile/password', [ProfileController::class, 'editPassword'])->name('edit-password');
    Route::post('profile/password/save', [ProfileController::class, 'saveEditPassword'])->name('save-edit-password');
});

// Member Privilege
Route::group(['middleware' => ['member']], function () {
    Route::get('cart', [CartController::class, 'index'])->name('cart');
    Route::post('add-cart', [CartController::class, 'addCart'])->name('add-cart');
    Route::delete('cart/{productId}', [CartController::class, 'removeFromCart'])->name('remove-from-cart');
    Route::get('cart/edit/{productId}', [CartController::class, 'editCart'])->name('edit-cart');
    Route::get('check-out', [CartController::class, 'checkout'])->name('check-out');

    Route::get('history', [TransactionController::class, 'index'])->name('history');

    Route::get('profile/edit', [ProfileController::class, 'editProfile'])->name('edit-profile');
    Route::post('profile/edit/save', [ProfileController::class, 'saveEditProfile'])->name('save-edit-profile');
});

// Admin Privilege
Route::group(['middleware' => ['admin']], function () {
    Route::get('add-item', [ProductController::class, 'addItem'])->name('add-item');
    Route::post('product/add', [ProductController::class, 'addProduct'])->name('product-add');
    Route::delete('product/{id}', [ProductController::class, 'deleteProduct'])->name('product-delete');
});
