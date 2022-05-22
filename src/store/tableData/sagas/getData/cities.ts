import { put, call, takeLatest } from "redux-saga/effects";
import { AnyAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

import errorKeys from "constants/errorKeys";
import tableData from "api/routes/tableData";
import { 
    setTableCitiesData,
    setTableCitiesRequestError,
    setTableCitiesDataLoading,
    getTableCitiesData
} from "../../actions";
import { ICityDataInfo } from "../../types";


function* getTableCitiesDataHandler(action: AnyAction) {
    try {
        yield put(setTableCitiesDataLoading(true));

        const response: AxiosResponse<ICityDataInfo> = yield call(tableData.cities, action.payload)

        if (response?.status < 300) {
            yield put(setTableCitiesData({
                data: response.data.data, 
                count: response.data.count
            }));
        } else {
            throw new Error(errorKeys.requestError);
        }

    } catch (error: any) {
        yield put(setTableCitiesRequestError(`Произошла ошибка про получении данных о городах ${error.message}`));
    } finally {
        yield put(setTableCitiesDataLoading(false));
    }
}

export function* getTableCitiesDataWatcher() {
    yield takeLatest(getTableCitiesData, getTableCitiesDataHandler);
}