import { put, call, takeLatest } from "redux-saga/effects";
import { AnyAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

import errorKeys from "constants/errorKeys";
import tableData from "api/routes/tableData";
import { 
    getOrderData,
    setOrderData,
    setOrderDataError,
    setOrderDataLoading
} from "../actions";
import { IOrderDataInfo } from "../types";

function* getOrdersHandler(action: AnyAction) {
    try {
        yield put(setOrderDataLoading(true));

        const response: AxiosResponse<IOrderDataInfo> = yield call(tableData.orders, {...action.payload})

        if (response?.status < 300) {
            yield put(setOrderData({
                data: response.data.data, 
                count: response.data.count
            }));
        } else {
            throw new Error(errorKeys.requestError);
        }

    } catch (error: any) {
        yield put(setOrderDataError(error.message));
    } finally {
        yield put(setOrderDataLoading(false));
    }
}

export function* getOrdersWatcher() {
    yield takeLatest(getOrderData, getOrdersHandler);
}