<?php

namespace App\Utils;

use Illuminate\Support\Facades\Auth;

class HeaderUtil
{
    public static function getMenu()
    {
        $user = Auth::user();

        if (!$user) {
            return [];
        }

        if ($user['role'] == "member") {
            return [
                [
                    "name" => "Home",
                    "route" => "home"
                ],
                [
                    "name" => "Search",
                    "route" => "product/search"
                ],
                [
                    "name" => "Cart",
                    "route" => "cart"
                ],
                [
                    "name" => "History",
                    "route" => "history"
                ],
                [
                    "name" => "Profile",
                    "route" => "profile"
                ],
            ];
        } else {
            return [
                [
                    "name" => "Home",
                    "route" => "home"
                ],
                [
                    "name" => "Search",
                    "route" => "product/search"
                ],
                [
                    "name" => "Profile",
                    "route" => "profile"
                ],
                [
                    "name" => "Add Item",
                    "route" => "add-item"
                ]
            ];
        }
    }
}
