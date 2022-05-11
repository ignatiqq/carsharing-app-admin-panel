import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { 
    setOrderData,
    setOrderDataLoading,
    setOrderDataError,
    setOrderPagination,
    setOrderCityFilter,
    setOrderCarFilter,
    setOrderPointFilter
} from "./actions";
import type { IPagination } from "types/requests";
import type { IOrderDataInfo, ITableData } from "./types";

const initialState: ITableData = {
    order: {
        data: null,
        pagination: {
            page: 1,
            limit: 3
        },
        filters: {
            cityId: "",
            pointId: "",
            carId: ""
        },
        isLoading: false,
        error: null
    },
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
        .addCase(setOrderCityFilter, (state, action: PayloadAction<string>) => {
            state.order.filters.cityId = action.payload
        })
        .addCase(setOrderPointFilter, (state, action: PayloadAction<string>) => {
            state.order.filters.pointId = action.payload
        })
        .addCase(setOrderCarFilter, (state, action: PayloadAction<string>) => {
            state.order.filters.carId = action.payload
        })
})

export default tableData;