import { createAction } from "@reduxjs/toolkit";

import { 
    SET_ORDER_DATA,
    GET_ORDER_DATA
} from "./constants";
import type { IOrderData, IQueryFilter } from "./types";


export const setOrderData = createAction<Array<IOrderData>>(SET_ORDER_DATA);
export const getOrderData = createAction<IQueryFilter>(GET_ORDER_DATA);