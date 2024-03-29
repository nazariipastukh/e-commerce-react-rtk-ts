import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts";
import {ByCategoryPage, CartPage, ErrorPage, MainPage} from "../pages";
import {ProductPage} from "../pages/ProductPage/ProductPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Navigate to={'/main'}/>
            },
            {
                path: '/main',
                element: <MainPage/>
            },
            {
                path: '/cart',
                element: <CartPage/>
            },
            {
                path: '/category/:name',
                element: <ByCategoryPage/>
            },
            {
                path: '/:category/:id',
                element: <ProductPage/>
            }
        ]
    }
])