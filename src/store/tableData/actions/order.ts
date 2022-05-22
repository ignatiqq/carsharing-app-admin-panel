import { createAction } from "@reduxjs/toolkit";
import type { IOrderDataInfo } from "../types";
import type { IQueryFilter } from "../types";
import type { IPagination } from "types/requests";

import { 
    SET_ORDER_DATA,
    SET_ORDER_DATA_LOADING,
    SET_ORDER_DATA_ERROR,
    GET_ORDER_DATA,
    SET_ORDER_PAGINATION,
    SET_ORDER_CITY_FILTER,
    SET_ORDER_CAR_FILTER,
    SET_ORDER_POINT_FILTER,
} from "../constants";

export const setOrderData = createAction<IOrderDataInfo>(SET_ORDER_DATA);
export const setOrderDataLoading = createAction<boolean>(SET_ORDER_DATA_LOADING);
export const setOrderDataError = createAction<string>(SET_ORDER_DATA_ERROR);
export const getOrderData = createAction<IQueryFilter>(GET_ORDER_DATA);
export const setOrderPagination = createAction<IPagination>(SET_ORDER_PAGINATION);
export const setOrderCityFilter = createAction<string>(SET_ORDER_CITY_FILTER);
export const setOrderCarFilter = createAction<string>(SET_ORDER_CAR_FILTER);
export const setOrderPointFilter = createAction<string>(SET_ORDER_POINT_FILTER);