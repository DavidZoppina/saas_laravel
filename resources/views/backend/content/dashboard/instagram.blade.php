@extends('backend.layouts.contentNavbarLayout')

@section('title', 'Dashboard')

@section('vendor-style')
<link rel="stylesheet" href="{{asset('assets/vendor/libs/apex-charts/apex-charts.css')}}">
@endsection



@section('vendor-script')
<script src="{{asset('assets/vendor/libs/apex-charts/apexcharts.js')}}"></script>
@endsection

@section('content')
    <div class="row">
        <div class="col-md-6 col-xl-4">
            <div class="card bg-primary text-white mb-3">
                <div class="card-body">
                    <h5 class="card-title text-white">0</h5>
                    <p class="card-text">Succeed</p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-xl-4">
            <div class="card bg-danger text-white mb-3">
                <div class="card-body">
                    <h5 class="card-title text-white">0</h5>
                    <p class="card-text">Failed</p>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-xl-4">
            <div class="card bg-success text-white mb-3">
                <div class="card-body">
                    <h5 class="card-title text-white">0</h5>
                    <p class="card-text">Total</p>
                </div>
            </div>
        </div>
    </div>


    <div class="row">
        <!-- Expense Overview -->
        <div class="col-md-12 col-lg-12 order-1 mb-4">
            <div class="card h-100">
                <div class="card-header">
                    <ul class="nav nav-pills" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link" href="{{url('dashboard')}}"><i class='bx bx-data'></i> All</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{url('dashboard/facebook')}}"><i class='bx bxl-facebook-circle'></i> Facebook</a>
                        </li>
                        <li class="nav-item">
                            <a type="button" class="nav-link active" href="{{url('dashboard/instagram')}}"><i class='bx bxl-instagram-alt'></i> Instagram</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{url('dashboard/twitter')}}"><i class='bx bxl-twitter' ></i> Twitter</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body px-0">
                    <div class="tab-content p-0">
                        <div class="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel">
                            <div class="d-flex p-4 pt-3">
                                <div>
                                    <small class="text-muted d-block">last 30days</small>
                                </div>
                            </div>
                            <div id="incomeChart"></div>
                            <div class="d-flex justify-content-center pt-4 gap-2">
                                <div class="flex-shrink-0">
                                    <div id="expensesOfWeek"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/ Expense Overview -->
    </div>

@endsection


@section('page-script')
{{--    <script src="{{asset('assets/js/dashboards-analytics.js')}}"></script>--}}

<script>
    (function () {
        let  axisColor, shadeColor, borderColor;

        axisColor = config.colors.axisColor;
        borderColor = config.colors.borderColor;

        // Income Chart - Area chart
        // --------------------------------------------------------------------
        const incomeChartEl = document.querySelector('#incomeChart'),
            incomeChartConfig = {
                series: [
                    {
                        data: [24, 21, 30, 22, 42, 26, 35, 29]
                    }
                ],
                chart: {
                    height: 215,
                    parentHeightOffset: 0,
                    parentWidthOffset: 0,
                    toolbar: {
                        show: false
                    },
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 2,
                    curve: 'smooth'
                },
                legend: {
                    show: false
                },
                markers: {
                    size: 6,
                    colors: 'transparent',
                    strokeColors: 'transparent',
                    strokeWidth: 4,
                    discrete: [
                        {
                            fillColor: config.colors.white,
                            seriesIndex: 0,
                            dataPointIndex: 7,
                            strokeColor: config.colors.primary,
                            strokeWidth: 2,
                            size: 6,
                            radius: 8
                        }
                    ],
                    hover: {
                        size: 7
                    }
                },
                colors: [config.colors.primary],
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: shadeColor,
                        shadeIntensity: 0.6,
                        opacityFrom: 0.5,
                        opacityTo: 0.25,
                        stops: [0, 95, 100]
                    }
                },
                grid: {
                    borderColor: borderColor,
                    strokeDashArray: 3,
                    padding: {
                        top: -20,
                        bottom: -8,
                        left: -10,
                        right: 8
                    }
                },
                xaxis: {
                    categories: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: true,
                        style: {
                            fontSize: '13px',
                            colors: axisColor
                        }
                    }
                },
                yaxis: {
                    labels: {
                        show: false
                    },
                    min: 10,
                    max: 50,
                    tickAmount: 4
                }
            };
        if (typeof incomeChartEl !== undefined && incomeChartEl !== null) {
            const incomeChart = new ApexCharts(incomeChartEl, incomeChartConfig);
            incomeChart.render();
        }

    })();

</script>
@endsection
