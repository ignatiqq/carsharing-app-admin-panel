import React from 'react';
import Cookies from "js-cookie";

import timesHelper from 'utils/times';
import cookieKeys from 'constants/storageKeys/cookies';
import { useAppSelector, useAppDispatch } from 'store';
import type { IUserLoginData } from 'api/routes/auth';
import { loginUser, logoutUser, refreshUser } from 'store/auth/actions';

const useAuthorization = () => {
    const dispatch = useAppDispatch();

    const { accessToken, refreshToken, expiresIn } = useAppSelector(({auth}) => ({
        accessToken: auth.data?.access_token,
        refreshToken: auth.data?.refresh_token,
        expiresIn: auth.data?.expires_in
    }))

    React.useEffect(() => {
        if(accessToken && refreshToken && expiresIn) {

            const refreshTokenFromCookies = Cookies.get(cookieKeys.refresh_token);
            const accessTokenFromCookies = Cookies.get(cookieKeys.access_token);

            if(accessTokenFromCookies !== accessToken || refreshTokenFromCookies !== refreshToken) {
                const cookieConfig = {expires: timesHelper.secondsToDays(parseInt(expiresIn))}

                Cookies.set(cookieKeys.access_token, accessToken, cookieConfig);
                Cookies.set(cookieKeys.refresh_token, refreshToken, cookieConfig);
            }
            
        }
    }, [accessToken, refreshToken, expiresIn])

    const loginHandler = (data: IUserLoginData) => {
        dispatch(loginUser({...data}));
    }

    const refreshHandler = () => {
        const secret = Cookies.get("auth_token");
        const refreshToken = Cookies.get("refresh_token");
        if(secret && refreshToken)
        dispatch(refreshUser({
            refreshToken: refreshToken,
            secret: secret
        }));
    }

    const logoutHandler = () => {
        dispatch(logoutUser());
    }

    return {
        loginHandler,
        refreshHandler,
        logoutHandler
    }
}

export default useAuthorization;