<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Book;

class HomeController extends BaseController
{
    public function index()
    {
        return view('home', [
            'books' => Book::all()
        ]);
    }

    public function bookDetail($id) 
    {
        return view('book_detail', [
            'book' => Book::find($id)
        ]);
    }
}
