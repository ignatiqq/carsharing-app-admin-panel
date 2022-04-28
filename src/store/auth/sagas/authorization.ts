import { takeLatest, put, call } from "redux-saga/effects";
import { AnyAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

import base64Helper from "utils/base64";
import { authorization } from "api/routes";
import { 
    loginUser,
    setUserLoginData,
    setUserLoginError,
    setUserLoginLoading
} from "../actions";
import { AxiosResponse } from "axios";
import { ITokenInfo } from "../types";

function *loginUserHandler(action: AnyAction) {
    try {
        
        yield put(setUserLoginLoading(true));

        const loginData = {
            ...action.payload,
            secret: base64Helper.encode(`${uuidv4()}:${process.env.REACT_APP_CLIENT_SECRET}`)
        }

        const response: AxiosResponse<ITokenInfo> = yield call(authorization.login, loginData);

        console.log(response);

    } catch (error: any) {
        console.error(error.message);
    }
}

export function *loginUserWatcher() {
    yield takeLatest(loginUser, loginUserHandler);
}