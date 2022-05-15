import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { 
    setOrderData,
    setOrderDataLoading,
    setOrderDataError,
    setOrderPagination,
    setOrderCityFilter,
    setOrderCarFilter,
    setOrderPointFilter,
    setTableCarsData,
    setTableCarsPagination,
    setTableCitiesData,
    setTableCitiesDataLoading,
    setTableCitiesRequestError,
    setTableCitiesPagination
} from "./actions";
import type { IPagination } from "types/requests";
import type { ICityDataInfo, IOrderDataInfo, ITableData } from "./types";
import { ICarData } from "store/filtersData/types";

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
    cars: {
        data: null,
        pagination: {
            page: 1,
            limit: 3
        }
    },
    cities: {
        data: null,
        pagination: {
            page: 1,
            limit: 10
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

        // Filter

        .addCase(setOrderCityFilter, (state, action: PayloadAction<string>) => {
            state.order.filters.cityId = action.payload
        })
        .addCase(setOrderPointFilter, (state, action: PayloadAction<string>) => {
            state.order.filters.pointId = action.payload
        })
        .addCase(setOrderCarFilter, (state, action: PayloadAction<string>) => {
            state.order.filters.carId = action.payload
        })

        // Cars

        .addCase(setTableCarsData, (state, action: PayloadAction<Array<ICarData>>) => {
            state.cars.data = action.payload;
        })
        .addCase(setTableCarsPagination, (state, action: PayloadAction<IPagination>) => {
            state.cars.pagination = action.payload
        })

        // Cities

        .addCase(setTableCitiesData, (state, action: PayloadAction<ICityDataInfo>) => {
            state.cities.data = action.payload
        })
        .addCase(setTableCitiesDataLoading, (state, action: PayloadAction<boolean>) => {
            state.cities.isLoading = action.payload
        })
        .addCase(setTableCitiesRequestError, (state, action: PayloadAction<string>) => {
            state.cities.error = action.payload
        })
        .addCase(setTableCitiesPagination, (state, action: PayloadAction<IPagination>) => {
            state.cities.pagination = action.payload
        })
})

export default tableData;