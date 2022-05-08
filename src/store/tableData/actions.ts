import { createAction } from "@reduxjs/toolkit";

import { 
    SET_ORDER_DATA,
    GET_ORDER_DATA,
    SET_ORDER_DATA_LOADING,
    SET_ORDER_DATA_ERROR,
    SET_ORDER_PAGINATION
} from "./constants";
import type { IPagination } from "types/requests";
import type { IOrderDataInfo, IQueryFilter } from "./types";


export const setOrderData = createAction<IOrderDataInfo>(SET_ORDER_DATA);
export const setOrderDataLoading = createAction<boolean>(SET_ORDER_DATA_LOADING);
export const setOrderDataError = createAction<string>(SET_ORDER_DATA_ERROR);
export const getOrderData = createAction<IQueryFilter>(GET_ORDER_DATA);
export const setOrderPagination = createAction<IPagination>(SET_ORDER_PAGINATION);