import type { AnyAction } from "@reduxjs/toolkit";
import { all, call, takeLatest, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import errorKeys from "constants/errorKeys";
import filterData from "api/routes/filterData";
import { getFiltersData, setCarsData, setCarsRequestError, setCarsRequestLoading } from "../actions";
import { IAllCarsData } from "../types";

function* getCarsDataHandler(action: AnyAction) {
    try {
        yield put(setCarsRequestLoading(true));

        const response: AxiosResponse<IAllCarsData> = yield call(filterData.getCars, action.payload);

        if (response?.status < 300) {
            yield put(setCarsData({
                data: response.data.data, 
                count: response.data.count
            }));
        } else {
            throw new Error(errorKeys.requestError);
        }

    } catch (error: any) {
        yield put(setCarsRequestError(`При получении списка машин произошла ошибка: ${error.message}`))
    } finally {
        yield put(setCarsRequestLoading(false));
    }
}

function* getFiltersDataHandler(action:AnyAction) {
    try {

        yield all([
            call(getCarsDataHandler, action),
        ])


    } catch (error) {
        
    }
}

export function* getFiltersDataWatcher() {
    yield takeLatest(getFiltersData, getFiltersDataHandler)
}