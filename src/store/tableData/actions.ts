import { createAction } from "@reduxjs/toolkit";

import { 
    SET_ORDER_DATA,
    GET_ORDER_DATA,
    SET_ORDER_DATA_LOADING,
    SET_ORDER_DATA_ERROR,
    SET_ORDER_PAGINATION,
    SET_ORDER_CITY_FILTER,
    SET_ORDER_CAR_FILTER,
    SET_ORDER_POINT_FILTER,
    SET_TABLE_CARS_DATA,
    SET_TABLE_CARS_PAGINATION,
    SET_TABLE_CITIES_DATA,
    SET_TABLE_CITIES_DATA_LOADING,
    SET_TABLE_CITIES_REQUEST_ERROR,
    GET_TABLE_CITIES_DATA,
    SET_TABLE_CITIES_PAGINATION,
    SET_TABLE_POINT_DATA,
    SET_TABLE_POINT_DATA_LOADING,
    SET_TABLE_POINT_REQUEST_ERROR,
    SET_TABLE_POINT_PAGINATION,
    GET_TABLE_POINT_DATA,
    SET_TABLE_RATETYPES_DATA,
    SET_TABLE_RATETYPES_DATA_LOADING,
    SET_TABLE_RATETYPES_REQUEST_ERROR,
    SET_TABLE_RATETYPES_PAGINATION,
    GET_TABLE_RATETYPES_DATA,
    SET_TABLE_CARS_DATA_LOADING,
    SET_TABLE_CARS_REQUEST_ERROR,
    SET_TABLE_CARS_FILTER,
    GET_TABLE_CARS_DATA
} from "./constants";
import type { IPagination } from "types/requests";
import type { 
    ICityDataInfo, 
    IOrderDataInfo, 
    IPointDataInfo, 
    IQueryFilter, 
    IRateTypeDataInfo,
    ICarsDataInfo
} from "./types";


export const setOrderData = createAction<IOrderDataInfo>(SET_ORDER_DATA);
export const setOrderDataLoading = createAction<boolean>(SET_ORDER_DATA_LOADING);
export const setOrderDataError = createAction<string>(SET_ORDER_DATA_ERROR);
export const getOrderData = createAction<IQueryFilter>(GET_ORDER_DATA);
export const setOrderPagination = createAction<IPagination>(SET_ORDER_PAGINATION);

export const setOrderCityFilter = createAction<string>(SET_ORDER_CITY_FILTER);
export const setOrderCarFilter = createAction<string>(SET_ORDER_CAR_FILTER);
export const setOrderPointFilter = createAction<string>(SET_ORDER_POINT_FILTER);

export const setTableCitiesData = createAction<ICityDataInfo>(SET_TABLE_CITIES_DATA);
export const setTableCitiesDataLoading = createAction<boolean>(SET_TABLE_CITIES_DATA_LOADING);
export const setTableCitiesRequestError = createAction<string>(SET_TABLE_CITIES_REQUEST_ERROR);
export const getTableCitiesData = createAction<IPagination>(GET_TABLE_CITIES_DATA);
export const setTableCitiesPagination = createAction<IPagination>(SET_TABLE_CITIES_PAGINATION);

export const setTablePointsData = createAction<IPointDataInfo>(SET_TABLE_POINT_DATA);
export const setTablePointsDataLoading = createAction<boolean>(SET_TABLE_POINT_DATA_LOADING);
export const setTablePointsRequestError = createAction<string>(SET_TABLE_POINT_REQUEST_ERROR);
export const setTablePointsPagination = createAction<IPagination>(SET_TABLE_POINT_PAGINATION);
export const getTablePointsData = createAction(GET_TABLE_POINT_DATA);

export const setTableRateTypesData = createAction<IRateTypeDataInfo>(SET_TABLE_RATETYPES_DATA);
export const setTableRateTypesDataLoading = createAction<boolean>(SET_TABLE_RATETYPES_DATA_LOADING);
export const setTableRateTypesRequestError = createAction<string>(SET_TABLE_RATETYPES_REQUEST_ERROR);
export const setTableRateTypesPagination = createAction<IPagination>(SET_TABLE_RATETYPES_PAGINATION);
export const getTableRateTypesData = createAction<IPagination>(GET_TABLE_RATETYPES_DATA);

export const setTableCarsData = createAction<ICarsDataInfo>(SET_TABLE_CARS_DATA);
export const setTableCarsPagination = createAction<IPagination>(SET_TABLE_CARS_PAGINATION);
export const setTableCarsDataLoading = createAction<boolean>(SET_TABLE_CARS_DATA_LOADING);
export const setTableCarsRequestError = createAction<string>(SET_TABLE_CARS_REQUEST_ERROR);
export const setTableCarsFilter = createAction<string>(SET_TABLE_CARS_FILTER);
export const getTableCarsData = createAction<IQueryFilter>(GET_TABLE_CARS_DATA);