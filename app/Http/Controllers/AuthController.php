<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;



class AuthController extends Controller
{
    // this function is the responsible for validating users credentials, authenticating users, and generation token
    public function login(LoginRequest $request) 
    {
        $data = $reqeust->validated();

        if(!Auth::attempt($data)){
            return response([
                'message' => 'email or password are wrong'
            ]);
        }

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function register(RegisterRequest $request) 
    {
        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout(Request $request) 
    {
        $user = $request->user();

        $user->currentAccessToken()->delete();

        return response('',204);
    }

    
}
