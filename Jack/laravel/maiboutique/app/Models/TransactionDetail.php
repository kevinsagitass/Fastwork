<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransactionDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'transaction_id',
        'product_id',
        'quantity',
        'price'
    ];

    public $timestamps = false;

    public function transactionHeader()
    {
        return $this->belongsTo(Transaction::class);
    }
}
