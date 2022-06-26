import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import {  
    setDataToChange,
    setDataToChangeLoading,
    setDataToChangeRequestError,
    setDataToChangeRouteName,
    setDataToChangeEssenseId,
    actionEssenseDataLoading,
    actionEssenseDataRequestError,
    setDataToChangeAction,
    clearChangeEssenseData
} from "./actions"; 
import type { EssenseActions, IEssenseData, IEssenseOptions } from "./types";

const initialState: IEssenseOptions = {
    change: {
        data: null,
        route: null,
        id: null,
        action: null,
        actionLoading: false,
        actionRequestError: null,
        isLoading: false,
        error: null
    },
}

const essenceOptions = createReducer(initialState, (builder) => {
    builder
        .addCase(setDataToChange, (state, action: PayloadAction<IEssenseData>) => {
            state.change.data = action.payload
        })
        .addCase(setDataToChangeLoading, (state, action: PayloadAction<boolean>) => {
            state.change.isLoading = action.payload
        })
        .addCase(setDataToChangeRequestError, (state, action: PayloadAction<string | null>) => {
            state.change.error = action.payload
        })
        .addCase(setDataToChangeRouteName, (state, action: PayloadAction<string>) => {
            state.change.route = action.payload
        })
        .addCase(setDataToChangeAction, (state, action: PayloadAction<EssenseActions>) => {
            state.change.action = action.payload
        })

        .addCase(setDataToChangeEssenseId, (state, action: PayloadAction<string>) => {
            state.change.id = action.payload
        })
        .addCase(actionEssenseDataLoading, (state, action: PayloadAction<boolean>) => {
            state.change.actionLoading = action.payload
        })
        .addCase(actionEssenseDataRequestError, (state, action: PayloadAction<string>) => {
            state.change.actionRequestError = action.payload
        })
        .addCase(clearChangeEssenseData, (state, action) => {
            state.change.data = null
        })
})

export default essenceOptions;