import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import {  
    setDataToChange,
    setDataToChangeLoading,
    setDataToChangeRequestError,
    setDataToChangeRouteName,
    setDataToChangeEssenseId,
    sendChangedEssenseDataLoading,
    sendChangedEssenseDataRequestError,
    setDataToChangeAction
} from "./actions"; 
import type { EssenseActions, IEssenseData, IEssenseOptions } from "./types";

const initialState: IEssenseOptions = {
    change: {
        data: null,
        route: null,
        id: null,
        action: null,
        changeRequestLoading: false,
        changeRequestError: null,
        isLoading: false,
        error: null
    }
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
        .addCase(sendChangedEssenseDataLoading, (state, action: PayloadAction<boolean>) => {
            state.change.changeRequestLoading = action.payload
        })
        .addCase(sendChangedEssenseDataRequestError, (state, action: PayloadAction<string>) => {
            state.change.changeRequestError = action.payload
        })
})

export default essenceOptions;