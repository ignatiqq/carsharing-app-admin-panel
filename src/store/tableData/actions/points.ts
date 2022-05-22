import { createAction } from "@reduxjs/toolkit";
import type { IPagination } from "types/requests";
import type { IPointDataInfo } from "../types";

import { 
    SET_TABLE_POINT_DATA,
    SET_TABLE_POINT_DATA_LOADING,
    SET_TABLE_POINT_REQUEST_ERROR,
    SET_TABLE_POINT_PAGINATION,
    GET_TABLE_POINT_DATA,
} from "../constants";


export const setTablePointsData = createAction<IPointDataInfo>(SET_TABLE_POINT_DATA);
export const setTablePointsDataLoading = createAction<boolean>(SET_TABLE_POINT_DATA_LOADING);
export const setTablePointsRequestError = createAction<string>(SET_TABLE_POINT_REQUEST_ERROR);
export const setTablePointsPagination = createAction<IPagination>(SET_TABLE_POINT_PAGINATION);
export const getTablePointsData = createAction(GET_TABLE_POINT_DATA);