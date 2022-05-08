import { createAction } from "@reduxjs/toolkit";

import type { 
    ICurrentCity,
    ICurrentPoint,
    IAllCarsData
} from "./types";

import {
    SET_CITIES_DATA,
    SET_CITIES_REQUEST_LOADING,
    SET_CITIES_REQUEST_ERROR,
    SET_POINTS_DATA,
    SET_POINTS_REQUEST_LOADING,
    SET_POINTS_REQUEST_ERROR,
    SET_CARS_DATA,
    SET_CARS_REQUEST_LOADING,
    SET_CARS_REQUEST_ERROR,
    GET_CITIES_DATA,
    GET_POINTS_DATA,
    GET_CARS_DATA,
    GET_FILTERS_DATA
} from "./constants";
import { IQueryFilter } from "store/tableData/types";

export const getFiltersData = createAction<IQueryFilter>(GET_FILTERS_DATA);

export const getCitiesData = createAction<IQueryFilter>(GET_CITIES_DATA);
export const setCitiesData = createAction<Array<ICurrentCity>>(SET_CITIES_DATA);
export const setCititesRequestLoading = createAction<boolean>(SET_CITIES_REQUEST_LOADING);
export const setCititesRequestError = createAction<string>(SET_CITIES_REQUEST_ERROR);

export const getPointsData = createAction<IQueryFilter>(GET_POINTS_DATA);
export const setPointsData = createAction<Array<ICurrentPoint>>(SET_POINTS_DATA);
export const setPointsRequestLoading = createAction<boolean>(SET_POINTS_REQUEST_LOADING);
export const setPointsRequestError = createAction<string>(SET_POINTS_REQUEST_ERROR);

export const getCarsData = createAction<IQueryFilter>(GET_CARS_DATA);
export const setCarsData = createAction<IAllCarsData>(SET_CARS_DATA);
export const setCarsRequestLoading = createAction<boolean>(SET_CARS_REQUEST_LOADING);
export const setCarsRequestError = createAction<string>(SET_CARS_REQUEST_ERROR);