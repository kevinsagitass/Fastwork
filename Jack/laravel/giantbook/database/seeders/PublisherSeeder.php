<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PublisherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('publishers')->insert([
            [
                'name' => 'Publisher 1',
                'address' => 'City A',
                'phone' => '0121xxxxxx',
                'email' => 'publisher1@book.com',
                'image' => '1.jpg'
            ],
            [
                'name' => 'Publisher 2',
                'address' => 'City B',
                'phone' => '0821xxxxxx',
                'email' => 'publisher2@book.com',
                'image' => '2.jpg'
            ],
            [
                'name' => 'Publisher 3',
                'address' => 'City C',
                'phone' => '0812xxxxxx',
                'email' => 'publisher3@book.com',
                'image' => '3.jpg'
            ]
        ]);
    }
}
