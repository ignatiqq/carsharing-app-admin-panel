import { createAction } from "@reduxjs/toolkit";

import type { IUserInfo } from "./types";
import type { IUserLoginData } from "api/routes/auth";
import {
    SET_USER_LOGIN_DATA,
    LOGIN_USER,
    SET_USER_LOGIN_LOADING,
    SET_USER_LOGIN_ERROR
} from "./constants";

export const setUserLoginData = createAction<IUserInfo>(SET_USER_LOGIN_DATA);
export const setUserLoginLoading = createAction<boolean>(SET_USER_LOGIN_LOADING);
export const setUserLoginError = createAction<string | null>(SET_USER_LOGIN_ERROR);
export const loginUser = createAction<IUserLoginData>(LOGIN_USER);