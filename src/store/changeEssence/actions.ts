import { createAction } from "@reduxjs/toolkit";

import {
    SET_DATA_TO_CHANGE,
    SET_DATA_TO_CHANGE_LOADING,
    SET_DATA_TO_CHANGE_REQUEST_ERROR,
    GET_DATA_TO_CHANGE,
    SET_DATA_TO_CHANGE_ROUTE_NAME
} from "./constants";
import { IGetDataToChangeOptions } from "./types";

export const setDataToChange = createAction<Array<any>>(SET_DATA_TO_CHANGE);
export const setDataToChangeLoading = createAction<boolean>(SET_DATA_TO_CHANGE_LOADING);
export const setDataToChangeRequestError = createAction<string>(SET_DATA_TO_CHANGE_REQUEST_ERROR);
export const getDataToChange = createAction<IGetDataToChangeOptions>(GET_DATA_TO_CHANGE);
export const setDataToChangeRouteName = createAction<string>(SET_DATA_TO_CHANGE_ROUTE_NAME);