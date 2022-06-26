import { createAction } from "@reduxjs/toolkit";
import type { IPagination } from "types/requests";
import type { IQueryFilter } from "../types";
import { ICarsDataInfo } from "../types";

import { 
    SET_TABLE_CARS_DATA,
    SET_TABLE_CARS_PAGINATION,
    SET_TABLE_CARS_DATA_LOADING,
    SET_TABLE_CARS_REQUEST_ERROR,
    SET_TABLE_CARS_FILTER,
    GET_TABLE_CARS_DATA,
} from "../constants";

export const setTableCarsData = createAction<ICarsDataInfo>(SET_TABLE_CARS_DATA);
export const setTableCarsPagination = createAction<IPagination>(SET_TABLE_CARS_PAGINATION);
export const setTableCarsDataLoading = createAction<boolean>(SET_TABLE_CARS_DATA_LOADING);
export const setTableCarsRequestError = createAction<string>(SET_TABLE_CARS_REQUEST_ERROR);
export const setTableCarsFilter = createAction<string>(SET_TABLE_CARS_FILTER);
export const getTableCarsData = createAction<IQueryFilter>(GET_TABLE_CARS_DATA);