import { Navigate, useRoutes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute/PrivateRoute";
import errorPages from "constants/errorPages";
import { Login, ErrorPage, Dashboard, Orders } from "pages";

const AppRoutes = () => useRoutes([
    {path: "/", element: <Navigate to="/login" />},
    {   
        path: "/dashboard", 
        element: 
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>,
        children: [
            {
                path: "/dashboard/orders", 
                element: <Orders />
            },
            {
                path: "*",
                element: <ErrorPage 
                    statusCode={errorPages.notFound.statusCode} 
                    title={errorPages.notFound.title} 
                    description={errorPages.notFound.description} 
                />
            }
        ]
    },
    {path: "/login", element: <Login />},
    {path: "*", element: <ErrorPage 
        statusCode={errorPages.notFound.statusCode} 
        title={errorPages.notFound.title} 
        description={errorPages.notFound.description} 
    />}
])

export default AppRoutes;