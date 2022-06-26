import { createAction } from "@reduxjs/toolkit";
import type { IPagination } from "types/requests";
import type { IRateTypeDataInfo } from "../types";

import { 
    SET_TABLE_RATETYPES_DATA,
    SET_TABLE_RATETYPES_DATA_LOADING,
    SET_TABLE_RATETYPES_REQUEST_ERROR,
    SET_TABLE_RATETYPES_PAGINATION,
    GET_TABLE_RATETYPES_DATA,
} from "../constants";

export const setTableRateTypesData = createAction<IRateTypeDataInfo>(SET_TABLE_RATETYPES_DATA);
export const setTableRateTypesDataLoading = createAction<boolean>(SET_TABLE_RATETYPES_DATA_LOADING);
export const setTableRateTypesRequestError = createAction<string>(SET_TABLE_RATETYPES_REQUEST_ERROR);
export const setTableRateTypesPagination = createAction<IPagination>(SET_TABLE_RATETYPES_PAGINATION);
export const getTableRateTypesData = createAction<IPagination>(GET_TABLE_RATETYPES_DATA);