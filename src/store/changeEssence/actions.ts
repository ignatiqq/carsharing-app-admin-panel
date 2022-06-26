import { createAction } from "@reduxjs/toolkit";

import {
    SET_DATA_TO_CHANGE,
    SET_DATA_TO_CHANGE_LOADING,
    SET_DATA_TO_CHANGE_REQUEST_ERROR,
    GET_DATA_TO_CHANGE,
    SET_DATA_TO_CHANGE_ROUTE_NAME,
    SET_DATA_TO_CHANGE_ESSENSE_ID,
    SEND_DATA_TO_CHAGE,
    SEND_CHANGE_ESSENSE_DATA_LOADING,
    SEND_CHANGED_ESSENSE_DATA_REQUEST_ERROR,
    DELETE_DATA_TO_CHANGE,
    SET_DATA_TO_CHANGE_ACTION,
    CREATE_ESSENCE_DATA,
    CLEAR_CHANGE_ESSENSE_DATA
} from "./constants";
import { EssenseActions, IEssenseData, IGetDataToChangeOptions } from "./types";

export const setDataToChange = createAction<IEssenseData>(SET_DATA_TO_CHANGE);
export const setDataToChangeLoading = createAction<boolean>(SET_DATA_TO_CHANGE_LOADING);
export const setDataToChangeRequestError = createAction<string | null>(SET_DATA_TO_CHANGE_REQUEST_ERROR);
export const getDataToChange = createAction<IGetDataToChangeOptions>(GET_DATA_TO_CHANGE);
export const setDataToChangeRouteName = createAction<string>(SET_DATA_TO_CHANGE_ROUTE_NAME);
export const setDataToChangeEssenseId = createAction<string>(SET_DATA_TO_CHANGE_ESSENSE_ID);
export const sendDataToChange = createAction<IEssenseData>(SEND_DATA_TO_CHAGE);
export const deleteDataToChange = createAction<{id: string, route: string}>(DELETE_DATA_TO_CHANGE);
export const actionEssenseDataLoading = createAction<boolean>(SEND_CHANGE_ESSENSE_DATA_LOADING);
export const actionEssenseDataRequestError = createAction<string>(SEND_CHANGED_ESSENSE_DATA_REQUEST_ERROR);
export const setDataToChangeAction = createAction<EssenseActions>(SET_DATA_TO_CHANGE_ACTION);
export const createEssenceData = createAction<IEssenseData>(CREATE_ESSENCE_DATA);
export const clearChangeEssenseData = createAction(CLEAR_CHANGE_ESSENSE_DATA);