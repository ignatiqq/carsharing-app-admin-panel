import { Navigate, useRoutes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute/PrivateRoute";
import errorPages from "constants/errorPages";
import { ErrorComponent } from "components";
import { 
    Login, 
    ErrorPage, 
    Dashboard, 
    Orders,
    CarModels,
    Cities
} from "pages";

const AppRoutes = () => useRoutes([
    {path: "/", element: <Navigate to="/login" />},
    {   
        path: "/dashboard", 
        element: 
            <PrivateRoute Component={Dashboard} />,
        children: [
            {
                path: "/dashboard/orders", 
                element: <Orders />
            },
            {
                path: "/dashboard/cars",
                element: <CarModels />  
            },
            {
                path: "/dashboard/cities",
                element: <Cities />
            },
            {
                path: "*",
                element: <ErrorComponent
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