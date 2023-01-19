<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('profile', [
            'user' => Auth::user()
        ]);
    }

    public function editProfile() {
        return view('edit_profile', [
            'user' => Auth::user()
        ]);
    }

    public function editPassword() {
        return view('edit_password', [
            'user' => Auth::user()
        ]);
    }

    public function saveEditProfile(Request $request) {
        $validated = $request->validate([
            'username' => ['required', 'string', 'min:5', 'max:20', $request['username'] == Auth::user()->username ? '' : 'unique:users'],
            'email' => ['required', 'string', 'email', 'max:255', $request['email'] == Auth::user()->email ? '' : 'unique:users'],
            'phone' => ['required', 'digits_between:10,13'],
            'address' => ['required', 'min:5']
        ]);

        $user = User::find(Auth::user()->id);

        if (!$user) {
            abort(404);
        }

        $user->username = $validated['username'];
        $user->email = $validated['email'];
        $user->phone = $validated['phone'];
        $user->address = $validated['address'];

        $user->save();

        return redirect()->route('profile');
    }

    public function saveEditPassword(Request $request) {
        $validated = $request->validate([
            'password' => ['required', 'string', 'min:5', 'max:20'],
            'newPassword' => ['required', 'string', 'min:5', 'max:20'],
        ]);

        $user = User::find(Auth::user()->id);

        if (!$user) {
            abort(404);
        }

        if (!Auth::attempt([
            'email' => $user->email,
            'password' => $validated['password']
        ])) {
            return redirect()->back()->withErrors(['password' => 'Wrong Password']);
        }

        $user->password = Hash::make($validated['newPassword']);

        $user->save();

        return redirect()->route('profile');
    }
}
