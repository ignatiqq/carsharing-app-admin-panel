import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import type { IUserLogin } from 'components/Forms/LoginForm/LoginForm';
import { useAuthorization } from 'hooks';
import type { ILogin } from './Login';
import { useAppSelector } from 'store';

const withLoginLogic = (Component: React.FC<ILogin>) => () => {
    const {loginHandler} = useAuthorization();
    const navigate = useNavigate();

    const { isUserLoginLoading, access_token, userLoginError } = useAppSelector(({auth}) => ({
        isUserLoginLoading: auth.isLoading,
        access_token: auth.data?.access_token,
        userLoginError: auth.error
    }))

    useEffect(() => {
        if(access_token) {
            navigate("/dashboard");
        }
    }, [access_token, navigate])

    const authorizationHandler = useCallback((data: IUserLogin) => {
        loginHandler(data);
    }, [loginHandler])

    return (
        <Component
            authorizationHandler={authorizationHandler}
            isUserLoginLoading={isUserLoginLoading}
            userLoginError={userLoginError}
        />
    )
}

export default withLoginLogic;