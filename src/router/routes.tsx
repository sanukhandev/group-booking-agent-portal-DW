import { lazy } from 'react';
import Home from '../pages/Home';
import FlightSearchPage from '../pages/FlightSearchPage';
import Calculator from '../pages/Calculator';
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
    }



];

export { routes };
