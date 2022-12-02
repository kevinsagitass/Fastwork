<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $table = 'books';

    public function publisher()
    {
        return $this->hasOne('App\Models\Publisher', 'id', 'publisher_id');
    }
}
