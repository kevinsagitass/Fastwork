<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Auth as FacadesAuth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {

        $request->validate([
            'email' => 'required',
            'password' => 'required|min:5|max:20',
        ]);

        $credentials = $request->only('email', 'password');
        $remember = $request->only('remember');
        if (FacadesAuth::attempt($credentials)) {
            if ($remember && $remember['remember'] == "on") {
                return redirect()->route('home')->withCookie(cookie('email', $request['email'], 180))->withCookie(cookie('password', $request['password'], 180));
            } else {
                return redirect()->route('home');
            }
        }
        
        return redirect("login")->withErrors(['login' => 'Invalid Credentials!']);
    }
}
