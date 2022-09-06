@extends('backend.layouts.contentNavbarLayout')

@section('title', 'Home')

@section('vendor-style')

@endsection


@section('page-style')
<style>
    .navbar-detached-1 {
        width: 100%!important;
        margin: 0.75rem auto 0;
        border-radius: 0.375rem;
        padding: 0 1.5rem;
    }
</style>
@endsection

@section('vendor-script')

@endsection

@section('page-script')

@endsection

@section('content')
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div class="container-fluid">
            <a class="navbar-brand" href="javascript:void(0)">All Posts</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link"  href="javascript:void(0)"> Published Posts</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link"  href="javascript:void(0)"> Scheduled Posts</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link"  href="javascript:void(0)"> Recurring Posts</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link"  href="javascript:void(0)"> Your Draft</a>
                    </li>
                </ul>
                <form class="d-flex" onsubmit="return false">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-primary" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <div class="row">
        <div class="col-md-8 col-lg-8 col-12 col-sm-12">
            <div class="card mb-4">
                <div class="card-body">
                    <div>
                        <div class="demo-inline-spacing mt-3">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="list-group list-group-horizontal-md text-md-center">
                                        <a
                                            class="list-group-item list-group-item-action active"
                                            id="home-list-item"
                                            data-bs-toggle="list"
                                            href="#horizontal-home"
                                        >Write</a>

                                        <a
                                            class="list-group-item list-group-item-action"
                                            id="settings-list-item"
                                            data-bs-toggle="list"
                                            href="#horizontal-settings"
                                        >Preview</a>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-content px-0 mt-0">
                                <div class="tab-pane fade show active" id="horizontal-home">
                                    Donut sugar plum sweet roll biscuit. Cake oat cake gummi bears. Tart wafer wafer halvah
                                    gummi bears cheesecake. Topping croissant cake sweet roll. Dessert fruitcake gingerbread
                                    halvah marshmallow pudding bear claw cheesecake. Bonbon dragée cookie gummies. Pudding
                                    marzipan liquorice. Sugar plum dragée cupcake cupcake cake dessert chocolate bar. Pastry
                                    lollipop lemon drops lollipop halvah croissant. Pastry sweet gingerbread lemon drops topping
                                    ice cream.
                                </div>

                                <div class="tab-pane fade" id="horizontal-settings">
                                    Marzipan cake oat cake. Marshmallow pie chocolate. Liquorice oat cake donut halvah jelly-o.
                                    Jelly-o muffin macaroon cake gingerbread candy cupcake. Cake lollipop lollipop jelly brownie
                                    cake topping chocolate. Pie oat cake jelly. Lemon drops halvah jelly cookie bonbon cake
                                    cupcake ice cream. Donut tart bonbon sweet roll soufflé gummies biscuit. Wafer toffee
                                    topping jelly beans icing pie apple pie toffee pudding. Tiramisu powder macaroon tiramisu
                                    cake halvah.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="list-group list-group-horizontal-md text-md-center lni-line-spacing">
                                <a
                                    class="list-group-item list-group-item-action active"
                                    id="home-list-item"
                                    data-bs-toggle="list"
                                    href="#media"
                                >Media</a>

                                <a
                                    class="list-group-item list-group-item-action"
                                    id="settings-list-item"
                                    data-bs-toggle="list"
                                    href="#link"
                                >Link</a>

                                <button type="button" class="list-group-item list-group-item-action" data-bs-toggle="modal"
                                        data-bs-target="#modalScrollable">Target au</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="tab-content px-0 mt-0">
                        <div class="tab-content px-0 mt-0">
                            <div class="tab-pane fade show active" id="media">
                                Donut sugar plum sweet roll biscuit. Cake oat cake gummi bears. Tart wafer wafer halvah
                                gummi bears cheesecake. Topping croissant cake sweet roll. Dessert fruitcake gingerbread
                                halvah marshmallow pudding bear claw cheesecake. Bonbon dragée cookie gummies. Pudding
                                marzipan liquorice. Sugar plum dragée cupcake cupcake cake dessert chocolate bar. Pastry
                                lollipop lemon drops lollipop halvah croissant. Pastry sweet gingerbread lemon drops topping
                                ice cream.
                            </div>

                            <div class="tab-pane fade" id="link">
                                Marzipan cake oat cake. Marshmallow pie chocolate. Liquorice oat cake donut halvah jelly-o.
                                Jelly-o muffin macaroon cake gingerbread candy cupcake. Cake lollipop lollipop jelly brownie
                                cake topping chocolate. Pie oat cake jelly. Lemon drops halvah jelly cookie bonbon cake
                                cupcake ice cream. Donut tart bonbon sweet roll soufflé gummies biscuit. Wafer toffee
                                topping jelly beans icing pie apple pie toffee pudding. Tiramisu powder macaroon tiramisu
                                cake halvah.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="col-md-4 col-lg-4 col-12 col-sm-12">
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">ANNONCUMENTS</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>

            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">Latest blog</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>

        </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="modalScrollable" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalScrollableTitle">Facebook</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <a href="javascript:void(0)">Preferred Audience <i class='bx bxs-alarm-exclamation'></i></a>
                        </div>
                        <div class="col-md-12">
                            <a href="javascript:void(0)" class="mt-5">Restricted Audience <i class='bx bxs-alarm-exclamation'></i></a>
                        </div>
                    </div>

                    <p style="margin-top: 20%">
                        targeting will only be successful for pages if audicence optimaztion is turned on in general settings
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

@endsection
