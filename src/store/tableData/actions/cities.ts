import { createAction } from "@reduxjs/toolkit";
import type { IPagination } from "types/requests";
import type { ICityDataInfo } from "../types";

import { 
    SET_TABLE_CITIES_DATA,
    SET_TABLE_CITIES_DATA_LOADING,
    SET_TABLE_CITIES_REQUEST_ERROR,
    GET_TABLE_CITIES_DATA,
    SET_TABLE_CITIES_PAGINATION
} from "../constants";

export const setTableCitiesData = createAction<ICityDataInfo>(SET_TABLE_CITIES_DATA);
export const setTableCitiesDataLoading = createAction<boolean>(SET_TABLE_CITIES_DATA_LOADING);
export const setTableCitiesRequestError = createAction<string>(SET_TABLE_CITIES_REQUEST_ERROR);
export const getTableCitiesData = createAction<IPagination>(GET_TABLE_CITIES_DATA);
export const setTableCitiesPagination = createAction<IPagination>(SET_TABLE_CITIES_PAGINATION);