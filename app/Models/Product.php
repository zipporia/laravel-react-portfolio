<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //

    protected $fillable = ['user_id', 'name', 'image', 'rating_stars', 'rating_count', 'price_cents', 'keywords', 'created_at', 'updated_at'];
}
