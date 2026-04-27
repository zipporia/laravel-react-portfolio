<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(\App\Models\User::class, 'user_id')
                ->constrained()
                ->cascadeOnDelete();
            $table->string('image')->nullable();
            $table->string('name');

            $table->decimal('rating_stars', 2, 1);
            $table->integer('rating_count');

            $table->integer('price_cents');
            $table->json('keywords');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
