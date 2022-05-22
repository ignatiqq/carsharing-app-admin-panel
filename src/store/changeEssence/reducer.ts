import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import {  
    setDataToChange,
    setDataToChangeLoading,
    setDataToChangeRequestError,
    setDataToChangeRouteName
} from "./actions"; 
import type { IEssenseOptions } from "./types";

const initialState: IEssenseOptions = {
    change: {
        data: null,
        route: null,
        isLoading: false,
        error: null
    }
}

const essenceOptions = createReducer(initialState, (builder) => {
    builder
        .addCase(setDataToChange, (state, action: PayloadAction<Array<any>>) => {
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
})

export default essenceOptions;