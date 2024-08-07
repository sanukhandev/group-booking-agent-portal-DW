import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import BlankLayout from '../components/Layouts/BlankLayout';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import { routes } from './routes';
import Preloader from '../components/PreLoader';

const finalRoutes = routes.map((route) => {
    return {
        ...route,
        element: (
            <Suspense fallback={<Preloader/>}>
                {route.layout === 'blank' ? (
                    <BlankLayout>{route.element}</BlankLayout>
                ) : (
                    <DefaultLayout>{route.element}</DefaultLayout>
                )}
            </Suspense>
        ),
    };
});

const router = createBrowserRouter(finalRoutes);

export default router;
