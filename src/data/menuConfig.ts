import IconMenuApps from '../components/Icon/Menu/IconMenuApps';
import React from 'react';

export interface MenuItem {
    label: string;
    icon?: React.ComponentType<any>;
    path?: string;
    subMenu?: MenuItem[];
}

export const menuConfig: MenuItem[] = [
    {
        label: 'Home',
        icon: IconMenuApps,
        path: '/',

    },
    {
        label: 'One Way Groups',
        icon: IconMenuApps, // Replace with appropriate icon if needed
        path: '/search',

    },
    {
        label: 'Umrah Groups',
        icon: IconMenuApps, // Replace with appropriate icon if needed
        path: '/search',

    },
    {
        label: 'Umrah Calculator',
        icon: IconMenuApps, // Replace with appropriate icon if needed
        path: '/calculator',

    },
    {
        label: 'Makkah Hotel Rates',
        icon: IconMenuApps, // Replace with appropriate icon if needed
        path: '/makkah-hotel-rates',

    },
    {
        label: 'Madina Hotel Rates',
        icon: IconMenuApps, // Replace with appropriate icon if needed
        path: '/madina-hotel-rates',

    },
]
