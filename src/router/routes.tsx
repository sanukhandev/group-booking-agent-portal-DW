import { lazy } from 'react';
import Dashboard from '../pages/Dashboard';

const Home = lazy(() => import('../pages/Home'));
const FlightSearchPage = lazy(() => import('../pages/FlightSearchPage'));
const Calculator = lazy(() => import('../pages/Calculator'));
const Confirmation = lazy(() => import('../pages/Confirmation'));
const HotelRates = lazy(() => import('../pages/HotelRates'));
const Index = lazy(() => import('../pages/Index'));

const routes = [
    {
        path: '/',
        element: <Home />,
        layout: 'default',
    },
    {
        path: '/home',
        element: <Home />,
        layout: 'default',
    },
    {
        path: '/search',
        element: <FlightSearchPage />,
        layout: 'default',
    },
    {
        path: '/calculator',
        element: <Calculator />,
        layout: 'default',
    },
    {
        path: '/confirmation',
        element: <Confirmation />,
        layout: 'default',
    },
    {
        path: '/hotel-rates',
        element: <HotelRates />,
        layout: 'default',
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        layout: 'default',
    },
];

export { routes };
