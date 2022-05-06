import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Loader } from 'components';
import CookiesKey from "constants/storageKeys/cookies";
import { RootState, useAppSelector } from 'store';
import styles from "./PrivateRoute.module.scss";
import { createSelector } from 'reselect';

interface IPrivateRoute {
    Component: React.FC
}

const memoizedSelector = createSelector(
    (state: RootState) => state.auth.data,
    (state: RootState) => state.auth.requestLoaded,
    (state: RootState) => state.auth.isLoading,
    (authData, requestLoaded, isLoading) => ({authData, requestLoaded, isLoading})
)

const PrivateRoute: React.FC<IPrivateRoute> = ({ Component })=> {

    const navigate = useNavigate();
    const { authData, requestLoaded, isLoading } = useAppSelector(memoizedSelector);

    useEffect(() => {
        if((!authData?.access_token && requestLoaded) || !Cookies.get(CookiesKey.access_token)) {
            return navigate("/login");
        }
    }, [authData, requestLoaded, navigate])

    if(!requestLoaded || isLoading) {
        return (
            <div className={styles.loaderWrapper}>
                <Loader className={styles.loader} />
            </div>
        )
    }
        
    return <Component />
}

export default PrivateRoute;