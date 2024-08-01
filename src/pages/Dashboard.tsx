import React from 'react';
import ReactApexChart from 'react-apexcharts';
import Sidebar from '../components/Layouts/Sidebar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../store';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useEffect } from 'react';
import { setPageTitle } from '../store/themeConfigSlice';
import IconHorizontalDots from '../components/Icon/IconHorizontalDots';
import IconTrendingUp from '../components/Icon/IconTrendingUp';
import IconPlus from '../components/Icon/IconPlus';
import IconCreditCard from '../components/Icon/IconCreditCard';
import IconMail from '../components/Icon/IconMail';
import IconChecks from '../components/Icon/IconChecks';
import IconFile from '../components/Icon/IconFile';
import IconServer from '../components/Icon/IconServer';
import IconChrome from '../components/Icon/IconChrome';
import IconSafari from '../components/Icon/IconSafari';
import IconGlobe from '../components/Icon/IconGlobe';
import IconUsersGroup from '../components/Icon/IconUsersGroup';
import IconLink from '../components/Icon/IconLink';
import IconChatDots from '../components/Icon/IconChatDots';
import IconThumbUp from '../components/Icon/IconThumbUp';
import IconCaretsDown from '../components/Icon/IconCaretsDown';
import IconSquareCheck from '../components/Icon/IconSquareCheck';
import IconClock from '../components/Icon/IconClock';
import Dropdown from '../components/Dropdown';

function Dashboard() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Analytics Admin'));
    });

    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    // totalVisitOptions
    const totalVisit: any = {
        series: [{ data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25] }],
        options: {
            chart: {
                height: 58,
                type: 'line',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
                dropShadow: {
                    enabled: true,
                    blur: 3,
                    color: '#009688',
                    opacity: 0.4,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#009688'],
            grid: {
                padding: {
                    top: 5,
                    bottom: 5,
                    left: 5,
                    right: 5,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // paidVisitOptions
    const paidVisit: any = {
        series: [{ data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69] }],
        options: {
            chart: {
                height: 58,
                type: 'line',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
                dropShadow: {
                    enabled: true,
                    blur: 3,
                    color: '#e2a03f',
                    opacity: 0.4,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#e2a03f'],
            grid: {
                padding: {
                    top: 5,
                    bottom: 5,
                    left: 5,
                    right: 5,
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // uniqueVisitorSeriesOptions
    const uniqueVisitorSeries: any = {
        series: [
            {
                name: 'Direct',
                data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63],
            },
            {
                name: 'Organic',
                data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70],
            },
        ],
        options: {
            chart: {
                height: 360,
                type: 'bar',
                fontFamily: 'Nunito, sans-serif',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: 2,
                colors: ['transparent'],
            },
            colors: ['#5c1ac3', '#ffbb44'],
            dropShadow: {
                enabled: true,
                blur: 3,
                color: '#515365',
                opacity: 0.4,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    borderRadius: 8,
                    borderRadiusApplication: 'end',
                },
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '14px',
                itemMargin: {
                    horizontal: 8,
                    vertical: 8,
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
                padding: {
                    left: 20,
                    right: 20,
                },
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisBorder: {
                    show: true,
                    color: isDark ? '#3b3f5c' : '#e0e6ed',
                },
            },
            yaxis: {
                tickAmount: 6,
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -10 : 0,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: isDark ? 'dark' : 'light',
                    type: 'vertical',
                    shadeIntensity: 0.3,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0.8,
                    stops: [0, 100],
                },
            },
            tooltip: {
                marker: {
                    show: true,
                },
            },
        },
    };
    // followersOptions
    const followers: any = {
        series: [
            {
                data: [38, 60, 38, 52, 36, 40, 28],
            },
        ],
        options: {
            chart: {
                height: 160,
                type: 'area',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#4361ee'],
            grid: {
                padding: {
                    top: 5,
                },
            },
            yaxis: {
                show: false,
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // referralOptions
    const referral: any = {
        series: [
            {
                data: [60, 28, 52, 38, 40, 36, 38],
            },
        ],
        options: {
            chart: {
                height: 160,
                type: 'area',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#e7515a'],
            grid: {
                padding: {
                    top: 5,
                },
            },
            yaxis: {
                show: false,
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    // engagementOptions
    const engagement: any = {
        series: [
            {
                name: 'Sales',
                data: [28, 50, 36, 60, 38, 52, 38],
            },
        ],
        options: {
            chart: {
                height: 160,
                type: 'area',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#1abc9c'],
            grid: {
                padding: {
                    top: 5,
                },
            },
            yaxis: {
                show: false,
            },
            tooltip: {
                x: {
                    show: false,
                },
                y: {
                    title: {
                        formatter: () => {
                            return '';
                        },
                    },
                },
            },
        },
    };
    return (
        <div className="pt-5">
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
                <div
                    className="panel h-full overflow-hidden before:bg-[#1937cc] before:absolute before:-right-44 before:top-0 before:bottom-0 before:m-auto before:rounded-full before:w-96 before:h-96 grid grid-cols-1 content-between"
                    style={{ background: 'linear-gradient(0deg,#00c6fb -227%,#005bea)' }}
                >
                    <div className="flex items-start justify-between text-white-light mb-16 z-[7]">
                        <h5 className="font-semibold text-lg">Total Balance</h5>

                        <div className="relative text-xl whitespace-nowrap">
                            $ 41,741.42
                            <span className="table text-[#d3d3d3] bg-[#4361ee] rounded p-1 text-xs mt-1 ltr:ml-auto rtl:mr-auto">+ 2453</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between z-10">
                        <div className="flex items-center justify-between">
                            <button type="button" className="shadow-[0_0_2px_0_#bfc9d4] rounded p-1 text-white-light hover:bg-[#1937cc] place-content-center ltr:mr-2 rtl:ml-2">
                                <IconPlus />
                            </button>
                            <button type="button" className="shadow-[0_0_2px_0_#bfc9d4] rounded p-1 text-white-light hover:bg-[#1937cc] grid place-content-center">
                                <IconCreditCard />
                            </button>
                        </div>
                        <button type="button" className="shadow-[0_0_2px_0_#bfc9d4] rounded p-1 text-white-light hover:bg-[#4361ee] z-10">
                            Upgrade
                        </button>
                    </div>
                </div>
                <div className="panel h-full sm:col-span-2 lg:col-span-1">
                    {/* statistics */}
                    <div className="flex justify-between dark:text-white-light mb-5">
                        <h5 className="font-semibold text-lg ">Statistics</h5>
                        <div className="dropdown">
                            <Dropdown
                                offset={[0, 5]}
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="hover:text-primary"
                                button={<IconHorizontalDots className="text-black/70 dark:text-white/70 hover:!text-primary" />}
                            >
                                <ul>
                                    <li>
                                        <button type="button">This Week</button>
                                    </li>
                                    <li>
                                        <button type="button">Last Week</button>
                                    </li>
                                    <li>
                                        <button type="button">This Month</button>
                                    </li>
                                    <li>
                                        <button type="button">Last Month</button>
                                    </li>
                                </ul>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8 text-sm text-[#515365] font-bold">
                        <div>
                            <div>
                                <div>Total Visits</div>
                                <div className="text-[#f8538d] text-lg">423,964</div>
                            </div>

                            <ReactApexChart series={totalVisit.series} options={totalVisit.options} type="line" height={58} className="overflow-hidden" />
                        </div>

                        <div>
                            <div>
                                <div>Paid Visits</div>
                                <div className="text-[#f8538d] text-lg">7,929</div>
                            </div>

                            <ReactApexChart series={paidVisit.series} options={paidVisit.options} type="line" height={58} className="overflow-hidden" />
                        </div>
                    </div>
                </div>
                <div className="panel h-full">
                    <div className="flex justify-between dark:text-white-light mb-5">
                        <h5 className="font-semibold text-lg ">Expenses</h5>

                        <div className="dropdown">
                            <Dropdown
                                offset={[0, 5]}
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="hover:text-primary"
                                button={<IconHorizontalDots className="text-black/70 dark:text-white/70 hover:!text-primary" />}
                            >
                                <ul>
                                    <li>
                                        <button type="button">This Week</button>
                                    </li>
                                    <li>
                                        <button type="button">Last Week</button>
                                    </li>
                                    <li>
                                        <button type="button">This Month</button>
                                    </li>
                                    <li>
                                        <button type="button">Last Month</button>
                                    </li>
                                </ul>
                            </Dropdown>
                        </div>
                    </div>
                    <div className=" text-[#e95f2b] text-3xl font-bold my-10">
                        <span>$ 45,141 </span>
                        <span className="text-black text-sm dark:text-white-light ltr:mr-2 rtl:ml-2">this week</span>
                        <IconTrendingUp className="text-success inline" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="w-full rounded-full h-5 p-1 bg-dark-light overflow-hidden shadow-3xl dark:shadow-none dark:bg-dark-light/10">
                            <div
                                className="bg-gradient-to-r from-[#4361ee] to-[#805dca] w-full h-full rounded-full relative before:absolute before:inset-y-0 ltr:before:right-0.5 rtl:before:left-0.5 before:bg-white before:w-2 before:h-2 before:rounded-full before:m-auto"
                                style={{ width: '65%' }}
                            ></div>
                        </div>
                        <span className="ltr:ml-5 rtl:mr-5 dark:text-white-light">57%</span>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
                <div className="panel h-full p-0 lg:col-span-2">
                    <div className="flex items-start justify-between dark:text-white-light mb-5 p-5 border-b  border-white-light dark:border-[#1b2e4b]">
                        <h5 className="font-semibold text-lg ">Unique Visitors</h5>
                        <div className="dropdown">
                            <Dropdown
                                offset={[0, 5]}
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="hover:text-primary"
                                button={<IconHorizontalDots className="text-black/70 dark:text-white/70 hover:!text-primary" />}
                            >
                                <ul>
                                    <li>
                                        <button type="button">View</button>
                                    </li>
                                    <li>
                                        <button type="button">Update</button>
                                    </li>
                                    <li>
                                        <button type="button">Delete</button>
                                    </li>
                                </ul>
                            </Dropdown>
                        </div>
                    </div>

                    <ReactApexChart options={uniqueVisitorSeries.options} series={uniqueVisitorSeries.series} type="bar" height={360} className="overflow-hidden" />
                </div>

                <div className="panel h-full">
                    <div className="flex items-start justify-between dark:text-white-light mb-5 -mx-5 p-5 pt-0 border-b  border-white-light dark:border-[#1b2e4b]">
                        <h5 className="font-semibold text-lg ">Activity Log</h5>
                        <div className="dropdown">
                            <Dropdown
                                offset={[0, 5]}
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="hover:text-primary"
                                button={<IconHorizontalDots className="text-black/70 dark:text-white/70 hover:!text-primary" />}
                            >
                                <ul>
                                    <li>
                                        <button type="button">View All</button>
                                    </li>
                                    <li>
                                        <button type="button">Mark as Read</button>
                                    </li>
                                </ul>
                            </Dropdown>
                        </div>
                    </div>
                    <PerfectScrollbar className="perfect-scrollbar relative h-[360px] ltr:pr-3 rtl:pl-3 ltr:-mr-3 rtl:-ml-3">
                        <div className="space-y-7">
                            <div className="flex">
                                <div className="shrink-0 ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                                    <div className="bg-secondary shadow shadow-secondary w-8 h-8 rounded-full flex items-center justify-center text-white">
                                        <IconPlus className="w-4 h-4" />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-semibold dark:text-white-light">
                                        New project created :{' '}
                                        <button type="button" className="text-success">
                                            [VRISTO Admin Template]
                                        </button>
                                    </h5>
                                    <p className="text-white-dark text-xs">27 Feb, 2020</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="shrink-0 ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                                    <div className="bg-success shadow-success w-8 h-8 rounded-full flex items-center justify-center text-white">
                                        <IconMail className="w-4 h-4" />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-semibold dark:text-white-light">
                                        Mail sent to{' '}
                                        <button type="button" className="text-white-dark">
                                            HR
                                        </button>{' '}
                                        and{' '}
                                        <button type="button" className="text-white-dark">
                                            Admin
                                        </button>
                                    </h5>
                                    <p className="text-white-dark text-xs">28 Feb, 2020</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="shrink-0 ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                                    <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white">
                                        <IconChecks className="w-4 h-4" />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-semibold dark:text-white-light">Server Logs Updated</h5>
                                    <p className="text-white-dark text-xs">27 Feb, 2020</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="shrink-0 ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                                    <div className="bg-danger w-8 h-8 rounded-full flex items-center justify-center text-white">
                                        <IconChecks className="w-4 h-4" />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-semibold dark:text-white-light">
                                        Task Completed :
                                        <button type="button" className="text-success ml-1">
                                            [Backup Files EOD]
                                        </button>
                                    </h5>
                                    <p className="text-white-dark text-xs">01 Mar, 2020</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="shrink-0 ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                                    <div className="bg-warning w-8 h-8 rounded-full flex items-center justify-center text-white">
                                        <IconFile className="w-4 h-4" />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-semibold dark:text-white-light">
                                        Documents Submitted from <button type="button">Sara</button>
                                    </h5>
                                    <p className="text-white-dark text-xs">10 Mar, 2020</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="ltr:mr-2 rtl:ml-2">
                                    <div className="bg-dark w-8 h-8 rounded-full flex items-center justify-center text-white">
                                        <IconServer className="w-4 h-4" />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-semibold dark:text-white-light">Server rebooted successfully</h5>
                                    <p className="text-white-dark text-xs">06 Apr, 2020</p>
                                </div>
                            </div>
                        </div>
                    </PerfectScrollbar>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
