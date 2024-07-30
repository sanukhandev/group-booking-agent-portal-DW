import { lazy } from 'react';
import Home from '../pages/Home';
import FlightSearchPage from '../pages/FlightSearchPage';
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



];

export { routes };
