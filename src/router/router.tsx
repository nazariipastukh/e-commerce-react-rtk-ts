import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainPage} from "../pages/MainPage/MainPage";
import {MainLayout} from "../layouts/MainLayout";
import {ErrorPage} from "../pages/ErrorPage/ErrorPage";
import {CartPage} from "../pages/CartPage/CartPage";

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
            }
        ]
    }
])