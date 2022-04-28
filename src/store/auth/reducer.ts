import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import type { IAuth, IUserInfo } from "./types";
import { 
    setUserLoginData, 
    setUserLoginLoading, 
    setUserLoginError 
} from "./actions";

const initialState: IAuth = {
    userInfo: null,
    isLoading: false,
    error: null
}

const auth = createReducer(initialState, (builder) => {
    builder
        .addCase(setUserLoginData, (state, action: PayloadAction<IUserInfo>) => {
            state.userInfo = action.payload
        })
        .addCase(setUserLoginLoading, (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        })
        .addCase(setUserLoginError, (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
        })
})

export default auth;