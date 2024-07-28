import React from "react"
import { UserSignup } from "./user/UserSignup"
import AdminPage from "./user/AdminPage"
import { CartForm } from "./user/CartForm"
import { UserAddress } from "./user/UserAddress"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
const MainRouter = ({ children }) => {
    const routesData = createBrowserRouter([
        {
            path: '/',
            element: <h1>Welcome to our website</h1>,
            errorElement: <div>404</div>
        },
        {
            path: '/signup',
            element: <UserSignup/>,
            errorElement: <div>404 not found</div>
        },
        {
            path: '/admin',
            element: <AdminPage/>,
            errorElement: <div>404 not found</div>
        },
        {
            path: '/cart',
            element: <CartForm/>,
            errorElement: <div>404 not found</div>
        },
        {
            path: '/userAddress',
            element: <UserAddress/>,
            errorElement: <div>404 not found</div>
        },

    ])
    return (
        <React.Fragment>
            <RouterProvider router={routesData}>
                {children}
            </RouterProvider>
        </React.Fragment>)
}

export default MainRouter