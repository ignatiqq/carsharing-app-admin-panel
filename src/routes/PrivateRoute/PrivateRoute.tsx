import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Loader } from 'components';
import CookiesKey from "constants/storageKeys/cookies";
import { useAppSelector } from 'store';
import styles from "./PrivateRoute.module.scss";

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
        return (
            <div className={styles.loaderWrapper}>
                <Loader className={styles.loader} />
            </div>
        )
    }

    return children
}

export default PrivateRoute;