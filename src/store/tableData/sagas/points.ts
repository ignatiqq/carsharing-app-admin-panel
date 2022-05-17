import { put, call, takeLatest } from "redux-saga/effects";
import { AnyAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

import errorKeys from "constants/errorKeys";
import tableData from "api/routes/tableData";
import { 
    setTablePointsData,
    setTablePointsRequestError,
    setTablePointsDataLoading,
    getTablePointsData
} from "../actions";
import { IPointDataInfo } from "../types";


function* getTablePointsDataHandler(action: AnyAction) {
    try {
        yield put(setTablePointsDataLoading(true));
        
        const response: AxiosResponse<IPointDataInfo> = yield call(tableData.points, action.payload)

        if (response?.status < 300) {
            yield put(setTablePointsData({
                data: response.data.data, 
                count: response.data.count
            }));
        } else {
            throw new Error(errorKeys.requestError);
        }

    } catch (error: any) {
        yield put(setTablePointsRequestError(`Произошла ошибка про получении данных о точках ${error.message}`));
    } finally {
        yield put(setTablePointsDataLoading(false));
    }
}

export function* getTablePointsDataWatcher() {
    yield takeLatest(getTablePointsData, getTablePointsDataHandler);
}