import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { 
    setOrderData,
    setOrderDataLoading,
    setOrderDataError,
    setOrderPagination
} from "./actions";
import type { IOrderDataInfo, IPagination, ITableData } from "./types";

const initialState: ITableData = {
    order: {
        data: null,
        pagination: {
            page: 1,
            limit: 3
        },
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
        .addCase(setOrderPagination, (state, action: PayloadAction<IPagination>) => {
            state.order.pagination = action.payload
        })
})

export default tableData;