import { lazy } from 'react';
import Home from '../pages/Home';
const Index = lazy(() => import('../pages/Index'));

const routes = [
    // dashboard
    {
        path: '/',
        element: <Home />,
        layout: 'default',
    },
    {
        path: '/home',
        element: <Home />,
        layout: 'default',
    }

];

export { routes };
