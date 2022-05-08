import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import type { 
    IFiltersData,
    IAllCarsData,
    ICurrentPoint,
    ICurrentCity
} from "./types";
import {
    setCitiesData,
    setCititesRequestLoading,
    setCititesRequestError,
    setPointsData,
    setPointsRequestLoading,
    setPointsRequestError,
    setCarsData,
    setCarsRequestLoading,
    setCarsRequestError
} from "./actions"

const initialState: IFiltersData = {
    city: {
        data: null,
        isLoading: false,
        pagination: {
            page: 1,
            limit: 20
        },
        error: null
    },
    point: {
        data: null,
        isLoading: false,
        error: null
    },
    car: {
        data: null,
        isLoading: false,
        error: null
    }
}

const filtersData = createReducer(initialState, (builder) => {
    builder
        .addCase(setCitiesData, (state, action: PayloadAction<Array<ICurrentCity>>) => {
            state.city.data = action.payload
        })
        .addCase(setCititesRequestLoading, (state, action: PayloadAction<boolean>) => {
            state.city.isLoading = action.payload
        })
        .addCase(setCititesRequestError, (state, action: PayloadAction<string>) => {
            state.city.error = action.payload
        })

        .addCase(setPointsData, (state, action: PayloadAction<Array<ICurrentPoint>>) => {
            state.point.data = action.payload
        })
        .addCase(setPointsRequestLoading, (state, action: PayloadAction<boolean>) => {
            state.point.isLoading = action.payload
        })
        .addCase(setPointsRequestError, (state, action: PayloadAction<string>) => {
            state.point.error = action.payload
        })

        .addCase(setCarsData, (state, action: PayloadAction<IAllCarsData>) => {
            state.car.data = action.payload
        })
        .addCase(setCarsRequestLoading, (state, action: PayloadAction<boolean>) => {
            state.car.isLoading = action.payload
        })
        .addCase(setCarsRequestError, (state, action: PayloadAction<string>) => {
            state.car.error = action.payload
        })
})

export default filtersData;