<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('books')->insert([
            [
                'publisher_id' => 1,
                'title' => 'Love in The Air',
                'author' => 'Publisher 1',
                'year' => 2018,
                'synopsis' => 'Love is In The Air Tonight Can you Feel the Love ?',
                'image' => 'love.jpg'
            ],
            [
                'publisher_id' => 2,
                'title' => 'Be a Clown',
                'author' => 'Publisher 2',
                'year' => 2019,
                'synopsis' => 'When Life Gives you Joke, Be a Clown',
                'image' => 'clown.jpg'
            ],
            [
                'publisher_id' => 3,
                'title' => 'The Impossible',
                'author' => 'Publisher 3',
                'year' => 2020,
                'synopsis' => 'Can he do the Impossible ?',
                'image' => 'impossible.jpg'
            ],
            [
                'publisher_id' => 1,
                'title' => 'Your Address',
                'author' => 'Publisher 1',
                'year' => 2015,
                'synopsis' => '2 People Different Era, Switched Bodies. all they Know is Each Other Address',
                'image' => 'address.jpg'
            ],
            [
                'publisher_id' => 2,
                'title' => 'Agent on Vacation',
                'author' => 'Publisher 2',
                'year' => 2017,
                'synopsis' => 'Agent ? or an Entertainer i Guess both',
                'image' => 'agent.jpg'
            ]
        ]);
    }
}
