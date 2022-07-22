import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import type { 
    IFiltersData,
    ICarData,
    ICurrentPoint,
    ICurrentCity,
    ICarCategoriesData,
    IOrderStatusData
} from "./types";
import {
    setCitiesData,
    setCitiesRequestLoading,
    setCitiesRequestError,
    setPointsData,
    setPointsRequestLoading,
    setPointsRequestError,
    setCarsData,
    setCarsRequestLoading,
    setCarsRequestError,
    setCarCategoriesData,
    setCarCategoriesRequestLoading,
    setCarCategoriesRequestError,
    setOrderStatusData,
    setOrderStatusRequestLoading,
    setOrderStatusRequestError
} from "./actions"

const initialState: IFiltersData = {
    city: {
        data: null,
        count: null,
        isLoading: false,
        error: null
    },
    point: {
        data: null,
        count: null,
        isLoading: false,
        error: null
    },
    car: {
        data: null,
        count: null,
        isLoading: false,
        error: null
    },
    carCategories: {
        data: null,
        count: null,
        isLoading: false,
        error: null
    },
    orderStatus: {
        data: null,
        isLoading: false,
        error: null
    }
}

const filtersData = createReducer(initialState, (builder) => {
    builder
        .addCase(setCitiesData, (state, action: PayloadAction<Array<ICurrentCity>>) => {
            state.city.data = action.payload;
            state.city.count = action.payload?.length
        })
        .addCase(setCitiesRequestLoading, (state, action: PayloadAction<boolean>) => {
            state.city.isLoading = action.payload
        })
        .addCase(setCitiesRequestError, (state, action: PayloadAction<string>) => {
            state.city.error = action.payload
        })

        .addCase(setPointsData, (state, action: PayloadAction<Array<ICurrentPoint>>) => {
            state.point.data = action.payload
            state.point.count = action.payload?.length
        })
        .addCase(setPointsRequestLoading, (state, action: PayloadAction<boolean>) => {
            state.point.isLoading = action.payload
        })
        .addCase(setPointsRequestError, (state, action: PayloadAction<string>) => {
            state.point.error = action.payload
        })

        .addCase(setCarsData, (state, action: PayloadAction<Array<ICarData>>) => {
            state.car.data = action.payload
            state.car.count = action.payload?.length
        })
        .addCase(setCarsRequestLoading, (state, action: PayloadAction<boolean>) => {
            state.car.isLoading = action.payload
        })
        .addCase(setCarsRequestError, (state, action: PayloadAction<string>) => {
            state.car.error = action.payload
        })

        .addCase(setCarCategoriesData, (state, action: PayloadAction<Array<ICarCategoriesData>>) => {
            state.carCategories.data = action.payload
            state.carCategories.count = action.payload?.length
        })
        .addCase(setCarCategoriesRequestLoading, (state, action: PayloadAction<boolean>) => {
            state.carCategories.isLoading = action.payload
        })
        .addCase(setCarCategoriesRequestError, (state, action: PayloadAction<string>) => {
            state.carCategories.error = action.payload
        })

        .addCase(setOrderStatusData, (state, action: PayloadAction<IOrderStatusData>) => {
            state.orderStatus.data = action.payload
        })
        .addCase(setOrderStatusRequestLoading, (state, action: PayloadAction<boolean>) => {
            state.orderStatus.isLoading = action.payload
        })
        .addCase(setOrderStatusRequestError, (state, action: PayloadAction<string>) => {
            state.orderStatus.error = action.payload
        })
})

export default filtersData;