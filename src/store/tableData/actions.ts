import { createAction } from "@reduxjs/toolkit";

import { 
    SET_ORDER_DATA,
    GET_ORDER_DATA,
    SET_ORDER_DATA_LOADING,
    SET_ORDER_DATA_ERROR
} from "./constants";
import type { IOrderData, IQueryFilter } from "./types";


export const setOrderData = createAction<Array<IOrderData>>(SET_ORDER_DATA);
export const setOrderDataLoading = createAction<boolean>(SET_ORDER_DATA_LOADING);
export const setOrderDataError = createAction<string>(SET_ORDER_DATA_ERROR);
export const getOrderData = createAction<IQueryFilter>(GET_ORDER_DATA);