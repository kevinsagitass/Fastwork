<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\BookCategory;
use App\Models\Category;

class CategoryController extends BaseController
{
    public function index($id)
    {
        return view('category', [
            'category' => Category::find($id),
            'book_categories' => BookCategory::where('category_id', $id)->get()
        ]);
    }
}
