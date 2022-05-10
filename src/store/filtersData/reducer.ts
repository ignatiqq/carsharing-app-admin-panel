import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import type { 
    IFiltersData,
    ICarData,
    ICurrentPoint,
    ICurrentCity
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
    setCarsRequestError
} from "./actions"

const initialState: IFiltersData = {
    city: {
        data: null,
        isLoading: false,
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
        .addCase(setCitiesRequestLoading, (state, action: PayloadAction<boolean>) => {
            state.city.isLoading = action.payload
        })
        .addCase(setCitiesRequestError, (state, action: PayloadAction<string>) => {
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

        .addCase(setCarsData, (state, action: PayloadAction<Array<ICarData>>) => {
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