<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class ProductUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $user = $this->user();
        $product = $this->route('product'); //this will give product model

        return $user && $product && $user->id === $product->user_id;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'image' => 'nullable|string',
            'rating.stars' => 'nullable|numeric|min:0|max:5',
            'rating.count' => 'nullable|integer|min:0',
            'price_cents' => 'required|integer|min:0',
            'keywords' => 'nullable|array',
            'keywords.*' => 'string',
        ];
    }
}
