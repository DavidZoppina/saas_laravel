<?php

namespace App\Http\Controllers;

use App\AccountManager;
use App\Helper\Helper;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index($ids = ""){

        return view('backend.content.dashboard.dashboard');
    }
}
