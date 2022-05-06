import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { 
    setOrderData,
    setOrderDataLoading,
    setOrderDataError
} from "./actions";
import type { IOrderDataInfo, ITableData } from "./types";

const initialState: ITableData = {
    order: {
        data: null,
        isLoading: false,
        error: null
    }
}

const tableData = createReducer(initialState, (builder) => {
    builder
        .addCase(setOrderData, (state, action: PayloadAction<IOrderDataInfo>) => {
            state.order.data = action.payload
        })
        .addCase(setOrderDataLoading, (state, action: PayloadAction<boolean>) => {
            state.order.isLoading = action.payload
        })
        .addCase(setOrderDataError, (state, action: PayloadAction<string>) => {
            state.order.error = action.payload
        })
})

export default tableData;