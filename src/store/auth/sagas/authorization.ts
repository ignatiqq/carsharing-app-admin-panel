import { takeLatest, put, call, takeEvery } from "redux-saga/effects";
import { AnyAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import Cookies from "js-cookie";

import base64Helper from "utils/base64";
import { authorization } from "api/routes";
import {
    loginUser,
    setUserLoginData,
    setUserLoginError,
    setUserLoginLoading,
    refreshUser,
    authorizationUserRequestLoaded,
    logoutUser,
    clearUserAuthData
} from "../actions";
import errorKeys from "constants/errorKeys";
import { AxiosResponse } from "axios";
import { ITokenInfo } from "../types";

function* loginUserHandler(action: AnyAction) {
    try {
        yield put(setUserLoginLoading(true));

        const loginData = {
            ...action.payload,
            secret: base64Helper.encode(`${uuidv4()}:${process.env.REACT_APP_CLIENT_SECRET}`)
        }

        const response: AxiosResponse<ITokenInfo> = yield call(authorization.login, loginData);

        if (response?.status < 300) {
            Cookies.set("auth_token", loginData.secret);
            yield put(setUserLoginData(response.data));
        } else {
            throw new Error(errorKeys.requestError);
        }

    } catch (error: any) {
        console.error(error.message);
        yield put(setUserLoginError(error.message));
    } finally {
        yield put(setUserLoginLoading(false));
        yield put(authorizationUserRequestLoaded(true));
    }
}

export function* loginUserWatcher() {
    yield takeLatest(loginUser, loginUserHandler);
}

function* refreshUserHandler(action: AnyAction) {
    try {
        yield put(setUserLoginLoading(true));
        
        const response: AxiosResponse<ITokenInfo> = yield call(authorization.refresh, action.payload);

        if (response?.status < 300) {
            yield put(setUserLoginData(response.data));
        } else {
            throw new Error(errorKeys.requestError);
        }

    } catch (error: any) {
        console.error(error.message);
        yield put(setUserLoginError(error.message));
    } finally {
        yield put(setUserLoginLoading(false));
        yield put(authorizationUserRequestLoaded(true));
    }
}

export function* refreshUserWatcher() {
    yield takeLatest(refreshUser, refreshUserHandler)
}

function* logoutUserHandler() {
    try {

        yield call(authorization.logout);

        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
        Cookies.remove("auth_token");

        yield put(clearUserAuthData());

    } catch (error: any) {
        console.error(error.message);
    }
}

export function* logoutUserWatcher() {
    yield takeEvery(logoutUser, logoutUserHandler);
}