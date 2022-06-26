import { createAction } from "@reduxjs/toolkit";

import type { ITokenInfo } from "./types";
import type { IUserLoginData, IUserRefreshData } from "api/routes/auth";
import {
    SET_USER_LOGIN_DATA,
    LOGIN_USER,
    SET_USER_LOGIN_LOADING,
    SET_USER_LOGIN_ERROR,
    REFRESH_USER,
    AUTHORIZATION_USER_REQUEST_LOADED,
    LOGOUT_USER,
    CLEAR_USER_AUTH_DATA
} from "./constants";

export const setUserLoginData = createAction<ITokenInfo>(SET_USER_LOGIN_DATA);
export const setUserLoginLoading = createAction<boolean>(SET_USER_LOGIN_LOADING);
export const setUserLoginError = createAction<string | null>(SET_USER_LOGIN_ERROR);
export const loginUser = createAction<IUserLoginData>(LOGIN_USER);
export const refreshUser = createAction<IUserRefreshData>(REFRESH_USER);
export const authorizationUserRequestLoaded = createAction<boolean>(AUTHORIZATION_USER_REQUEST_LOADED);
export const logoutUser = createAction<void>(LOGOUT_USER);
export const clearUserAuthData = createAction<void>(CLEAR_USER_AUTH_DATA);