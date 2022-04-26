import { useRoutes } from "react-router-dom";

import { Login } from "pages";

const AppRoutes = () => useRoutes([
    {path: "/login", element: <Login />}
])

export default AppRoutes;