<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Product;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);


        Product::insert([
        [
            'id' => '1',
            'name' => 'Black and Gray Athletic Cotton Socks - 6 Pairs',
            'image' => 'images/products/athletic-cotton-socks-6-pairs.jpg',
            'rating_stars' => 2.5,
            'rating_count' => 87,
            'price_cents' => 1090,
            'keywords' => json_encode(['socks','sports','apparel']),
            'user_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'id' => '2',
            'name' => 'Intermediate Size Basketball',
            'image' => 'images/products/intermediate-composite-basketball.jpg',
            'rating_stars' => 4,
            'rating_count' => 127,
            'price_cents' => 2095,
            'keywords' => json_encode(['sports','basketballs']),
            'user_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ],
        [
            'id' => '3',
            'name' => 'Adults Plain Cotton T-Shirt - 2 Pack',
            'image' => 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
            'rating_stars' => 4.5,
            'rating_count' => 56,
            'price_cents' => 799,
            'keywords' => json_encode(['tshirts','apparel','mens']),
            'user_id' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]
    ]);
    }
}
