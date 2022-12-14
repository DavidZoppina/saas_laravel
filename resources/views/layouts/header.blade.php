<!-- Header Area-->
<header class="header_area">
    <div class="main_header_area">
        <div class="container">
            <div class="classy-nav-container breakpoint-off">
                <nav class="classy-navbar justify-content-between" id="wimaxNav">
                    <!-- Logo--><a class="nav-brand" href="{{url("/")}}"><img src="{{asset("themes/backend/default/assets/img/logo12.png")}}" alt=""></a>
                    <!-- Navbar Toggler-->
                    <div class="classy-navbar-toggler"><span class="navbarToggler"><span></span><span></span><span></span></span></div>
                    <!-- Menu-->
                    <div class="classy-menu">
                        <!-- Close Button-->
                        <div class="classycloseIcon">
                            <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                        </div>
                        <!-- Nav-->
                        <div class="classynav">
                            <ul id="corenav">
                                <li class="{{Request::is('/')? 'current_page_item':''}}">
                                    <a class="hover-underline-animation" href="{{url("/")}}#home">{{__("Home")}}</a>
                                </li>

                                <li>
                                    <a class="hover-underline-animation" href="{{url('/')}}#features">{{__("Features")}}</a>
                                </li>

                                <li>
                                    <a class="hover-underline-animation" href="{{url("/")}}#pricing">{{__("Pricing")}}</a>
                                </li>

                                <li class="{{Request::is("blog*")?"current_page_item":""}}">
                                    <a class="hover-underline-animation" href="{{url("blog")}}">Blog</a>
                                </li>

                                <li>
                                    <a class="hover-underline-animation" href="{{url('/')}}#faq">FAQs</a>
                                </li>
{{--                                <li class="language-box cn-dropdown-item"><a class="hover-underline-animation" href="#"><i class=""></i></a>--}}
{{--                                    <ul class="dropdown">--}}
{{--                                        <li>--}}
{{--                                            <a class="dropdown-item actionItem" href="#" data-redirect=""><i class=""></i> English</a>--}}
{{--                                        </li>--}}
{{--                                    </ul>--}}
{{--                                    <span class="dd-trigger"></span>--}}
{{--                                </li>--}}

                                @guest
                                    @if (Route::has('login'))
                                        <li>
                                            <a class="hover-underline-animation" href="{{url("login")}}">{{__("Login")}}</a>
                                        </li>
                                    @endif
                                @endguest

                            </ul>
                            <!-- Login Button-->

                            @guest
                                @if (Route::has('login'))
                                    <div class="login-btn-area ml-5 mt-5 mt-lg-0">
                                        <a class="btn wimax-btn" href="{{ route('register') }}">
                                            {{__("Get Started")}}
                                        </a>
                                    </div>
                                @endif

                            @else

                                <div class="login-btn-area ml-5 mt-5 mt-lg-0">
                                    <a class="btn wimax-btn" href="{{url('home')}}">
                                        {{__( sprintf( __("Hi, %s"), Auth::user()->fullname ) )}}
                                    </a>
                                </div>
                            @endguest
{{--                            <?php if(!_s("uid")){?>--}}
{{--                            <?php if( get_option("signup_status", 1) ){?>--}}
{{--                            <div class="login-btn-area ml-5 mt-5 mt-lg-0"><a class="btn wimax-btn" href="<?php __( url("signup") )?>"><?php __("Get Started")?></a></div>--}}
{{--                            <?php }?>--}}
{{--                            <?php }else{?>--}}
{{--                            <div class="login-btn-area ml-5 mt-5 mt-lg-0"><a class="btn wimax-btn" href="<?php __( url("dashboard") )?>"><?php __( sprintf( __("Hi, %s"), __("fullname") ) )?></a></div>--}}
{{--                            <?php }?>--}}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header>
