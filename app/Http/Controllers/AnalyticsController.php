<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnalyticsController extends Controller
{
    public function __construct()
    {
        $this->page_name = "Analytics";
    }

    public function index(){
        return view('backend.content.analytics.index', ['page_name' => $this->page_name]);
    }
}
