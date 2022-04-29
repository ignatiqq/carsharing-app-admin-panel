import { useRoutes } from "react-router-dom";

import errorPages from "constants/errorPages";
import { Login, ErrorPage } from "pages";

const AppRoutes = () => useRoutes([
    {path: "/login", element: <Login />},
    {path: "*", element: <ErrorPage 
        statusCode={errorPages.notFound.statusCode} 
        title={errorPages.notFound.title} 
        description={errorPages.notFound.description} 
    />}
])

export default AppRoutes;