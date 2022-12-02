<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookCategory extends Model
{
    use HasFactory;

    protected $table = 'book_category';

    public function book()
    {
        return $this->hasOne('App\Models\Book', 'id', 'book_id');
    }

    public function category()
    {
        return $this->hasOne('App\Models\Category', 'id', 'category_id');
    }
}
