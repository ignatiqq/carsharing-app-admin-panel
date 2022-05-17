import { createAction } from "@reduxjs/toolkit";

import type { 
    ICarCategoriesData,
    ICarData,
    ICurrentCity,
    ICurrentPoint,
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
    GET_FILTERS_DATA,
    SET_CAR_CATEGORIES_DATA,
    SET_CAR_CATEGORIES_REQUEST_LOADING,
    SET_CAR_CATEGORIES_REQUEST_ERROR
} from "./constants";
import { IQueryFilter } from "store/tableData/types";

export const getFiltersData = createAction<void>(GET_FILTERS_DATA);

export const getCitiesData = createAction<IQueryFilter>(GET_CITIES_DATA);
export const setCitiesData = createAction<Array<ICurrentCity>>(SET_CITIES_DATA);
export const setCitiesRequestLoading = createAction<boolean>(SET_CITIES_REQUEST_LOADING);
export const setCitiesRequestError = createAction<string>(SET_CITIES_REQUEST_ERROR);

export const getPointsData = createAction<IQueryFilter>(GET_POINTS_DATA);
export const setPointsData = createAction<Array<ICurrentPoint>>(SET_POINTS_DATA);
export const setPointsRequestLoading = createAction<boolean>(SET_POINTS_REQUEST_LOADING);
export const setPointsRequestError = createAction<string>(SET_POINTS_REQUEST_ERROR);

export const getCarsData = createAction<IQueryFilter>(GET_CARS_DATA);
export const setCarsData = createAction<Array<ICarData>>(SET_CARS_DATA);
export const setCarsRequestLoading = createAction<boolean>(SET_CARS_REQUEST_LOADING);
export const setCarsRequestError = createAction<string>(SET_CARS_REQUEST_ERROR);

export const setCarCategoriesData = createAction<Array<ICarCategoriesData>>(SET_CAR_CATEGORIES_DATA);
export const setCarCategoriesRequestLoading = createAction<boolean>(SET_CAR_CATEGORIES_REQUEST_LOADING);
export const setCarCategoriesRequestError = createAction<string>(SET_CAR_CATEGORIES_REQUEST_ERROR);