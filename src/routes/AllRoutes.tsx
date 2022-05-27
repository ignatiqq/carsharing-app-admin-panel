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
    Cities,
    PointsTable,
    RateTypesTable,
    ChangeEssence
} from "pages";

const AppRoutes = () => useRoutes([
    {path: "/", element: <Navigate to="/login" />},
    {   
        path: "/dashboard", 
        element: 
            <PrivateRoute Component={Dashboard} />,
        children: [
            {
                path: "/dashboard/order", 
                element: <Orders />
            },
            {
                path: "/dashboard/car",
                element: <CarModels />  
            },
            {
                path: "/dashboard/city",
                element: <Cities />
            },
            {
                path: "/dashboard/point",
                element: <PointsTable />
            },
            {
                path: "/dashboard/rateType",
                element: <RateTypesTable />
            },
            {
                path: "/dashboard/:route/change/:id",
                element: <ChangeEssence />
            },
            {
                path: "/dashboard/:route/create/:id",
                element: <ChangeEssence />
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