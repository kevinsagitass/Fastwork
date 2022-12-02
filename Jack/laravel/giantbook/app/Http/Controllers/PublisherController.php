<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\Publisher;

class PublisherController extends BaseController
{
    public function index()
    {
        return view('publisher', [
            'publishers' => Publisher::all()
        ]);
    }
}
