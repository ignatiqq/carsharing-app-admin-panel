import { createAction } from "@reduxjs/toolkit";

import {
    SET_DATA_TO_CHANGE,
    SET_DATA_TO_CHANGE_LOADING,
    SET_DATA_TO_CHANGE_REQUEST_ERROR,
    GET_DATA_TO_CHANGE,
    SET_DATA_TO_CHANGE_ROUTE_NAME,
    SET_DATA_TO_CHANGE_ESSENSE_ID,
    SEND_DATA_TO_CHAGE
} from "./constants";
import { IEssenseData, IGetDataToChangeOptions } from "./types";

export const setDataToChange = createAction<IEssenseData>(SET_DATA_TO_CHANGE);
export const setDataToChangeLoading = createAction<boolean>(SET_DATA_TO_CHANGE_LOADING);
export const setDataToChangeRequestError = createAction<string>(SET_DATA_TO_CHANGE_REQUEST_ERROR);
export const getDataToChange = createAction<IGetDataToChangeOptions>(GET_DATA_TO_CHANGE);
export const setDataToChangeRouteName = createAction<string>(SET_DATA_TO_CHANGE_ROUTE_NAME);
export const setDataToChangeEssenseId = createAction<string>(SET_DATA_TO_CHANGE_ESSENSE_ID);
export const sendDataToChange = createAction<IEssenseData>(SEND_DATA_TO_CHAGE);