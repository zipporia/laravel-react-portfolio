<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);

        return [
            'id' => $this->id,
            'image' => $this->image,
            'name' => $this->name,
            'rating' => [
                'stars' => (float) $this->rating_stars,
                'count' => (int) $this->rating_count,
            ],
            'priceCents' => (int) $this->price_cents,
            'keywords' => $this->keywords ? json_decode($this->keywords) : [],
        ];

        
    }
}
