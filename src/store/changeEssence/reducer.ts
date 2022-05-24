import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import {  
    setDataToChange,
    setDataToChangeLoading,
    setDataToChangeRequestError,
    setDataToChangeRouteName,
    setDataToChangeEssenseId
} from "./actions"; 
import type { IEssenseData, IEssenseOptions } from "./types";

const initialState: IEssenseOptions = {
    change: {
        data: null,
        route: null,
        id: null,
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
        .addCase(setDataToChangeRequestError, (state, action: PayloadAction<string>) => {
            state.change.error = action.payload
        })
        .addCase(setDataToChangeRouteName, (state, action: PayloadAction<string>) => {
            state.change.route = action.payload
        })
        .addCase(setDataToChangeEssenseId, (state, action: PayloadAction<string>) => {
            state.change.id = action.payload
        })
})

export default essenceOptions;