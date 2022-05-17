import { put, call, takeLatest } from "redux-saga/effects";
import { AnyAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

import errorKeys from "constants/errorKeys";
import tableData from "api/routes/tableData";
import { 
    setTableRateTypesData,
    setTableRateTypesDataLoading,
    setTableRateTypesRequestError,
    getTableRateTypesData
} from "../actions";
import { IRateTypeDataInfo } from "../types";


function* getTableRateTypesDataHandler(action: AnyAction) {
    try {
        yield put(setTableRateTypesDataLoading(true));
        
        const response: AxiosResponse<IRateTypeDataInfo> = yield call(tableData.rateTypes, action.payload)

        console.log(response)

        if (response?.status < 300) {
            yield put(setTableRateTypesData({
                data: response.data.data, 
                count: response.data.count
            }));
        } else {
            throw new Error(errorKeys.requestError);
        }

    } catch (error: any) {
        yield put(setTableRateTypesRequestError(`Произошла ошибка про получении данных о тарифах ${error.message}`));
    } finally {
        yield put(setTableRateTypesDataLoading(false));
    }
}

export function* getTableRateTypesDataWatcher() {
    yield takeLatest(getTableRateTypesData, getTableRateTypesDataHandler);
}