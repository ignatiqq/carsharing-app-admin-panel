import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CookiesKey from "constants/storageKeys/cookies";
import { useAppSelector } from 'store';

interface IPrivateRoute {
    children: React.ReactNode | any
}

const PrivateRoute: React.FC<IPrivateRoute> = ({ children })=> {

    const navigate = useNavigate();

    const { accessToken, requestLoaded, isLoading } = useAppSelector(({auth}) => ({
        accessToken: auth.data?.access_token,
        requestLoaded: auth.requestLoaded,
        isLoading: auth.isLoading
    }))

    useEffect(() => {
        if((!accessToken && requestLoaded) || !Cookies.get(CookiesKey.access_token)) {
            return navigate("/login");
        }
    }, [accessToken, requestLoaded, navigate])

    if(isLoading) {
        return "Loading..."
    }

    return children
}

export default PrivateRoute;