<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TwitterPostController extends Controller
{
    public function index(){
        return view('backend.twitter_post.twitterpost');
    }
}
