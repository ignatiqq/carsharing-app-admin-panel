import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import type { IAuth, ITokenInfo } from "./types";
import { 
    setUserLoginData, 
    setUserLoginLoading, 
    setUserLoginError,
    authorizationUserRequestLoaded
} from "./actions";

const initialState: IAuth = {
    data: null,
    isLoading: false,
    requestLoaded: false,
    error: null
}

const auth = createReducer(initialState, (builder) => {
    builder
        .addCase(setUserLoginData, (state, action: PayloadAction<ITokenInfo>) => {
            state.data = action.payload
        })
        .addCase(setUserLoginLoading, (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        })
        .addCase(setUserLoginError, (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
        })
        .addCase(authorizationUserRequestLoaded, (state, action: PayloadAction<boolean>) => {
            state.requestLoaded = action.payload
        })
})

export default auth;