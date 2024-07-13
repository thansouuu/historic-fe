/* eslint-disable no-unused-vars */
import RootLayout from '@/layouts/root-layout';
import Home from '@/pages/home';
import NotFound from '@/pages/not-found';
import Account from '@/pages/tiengviet/account';
import Hdsd from '@/pages/tiengviet/hdsd';
import ForgotPassword from '@/pages/tiengviet/ForgotPassword';
import Download from '@/pages/tiengviet/download';
import Categories from '@/pages/tiengviet/categories';
import Product from '@/pages/tiengviet/product';
import Tag from '@/pages/tiengviet/tag';
import Figure from '@/pages/tiengviet/figure';
import Map from '@/pages/tiengviet/map';
import LikedPosts from '@/pages/tiengviet/like';
import Main from '@/pages/tiengviet/main';
export const routes = [
    {
        path: '/download',
        element: <Download />,
    },
    {
        path: '/tieng-viet',
        element: <RootLayout />,
        children: [
            {
                path: 'account',
                element: <Account />,
            },
            { 
                index: true, 
                element: <Home /> ,
            },
            { 
                path: 'figure', 
                element: <Figure />, 
            },
            { 
                path: 'figure/:id', 
                element: <Categories /> ,
            },
            { 
                path: 'figure/:figureId/product/:id', 
                element: <Product /> ,
            },
            { 
                path: 'tag/:id', 
                element: <Tag /> ,
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword />,
            },
            {
                path: 'map',
                element: <Map />,
            },
            {
                path: 'like',
                element: <LikedPosts />,
            },
            {
                path: 'main',
                element: <Main />,
            },
            {
                path: 'hdsd',
                element: <Hdsd />,
            },
            { 
                path: '*', 
                element: <NotFound /> ,
            },
        ],
    },
];
