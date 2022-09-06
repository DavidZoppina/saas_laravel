<?php

namespace App\Http\Controllers;

use App\AccountManager;
use App\Helper\Helper;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->page_name = "Dashboard";
    }

    public function index($ids = ""){

        return view('backend.content.dashboard.dashboard', ['page_name' => $this->page_name]);
    }

    public function facebook($ids = ""){

        return view('backend.content.dashboard.facebook', ['page_name' => $this->page_name]);
    }

    public function instagram($ids = ""){

        return view('backend.content.dashboard.instagram', ['page_name' => $this->page_name]);
    }

    public function twitter($ids = ""){

        return view('backend.content.dashboard.twitter', ['page_name' => $this->page_name]);
    }
}
