<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    public function definition()
    {
        $images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

        return [
            'image' => $images[array_rand($images)],
            'name' => fake()->name(),
            'description' => Str::random(20),
            'price' => rand(1000,100000),
            'stock' => rand(1,50),
        ];
    }
}
