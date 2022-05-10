import type { AnyAction } from "@reduxjs/toolkit";
import { all, call, takeLatest, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import errorKeys from "constants/errorKeys";
import filterData from "api/routes/filterData";
import { 
    getFiltersData, 
    setCarsData, 
    setCarsRequestError, 
    setCarsRequestLoading,
    setCitiesData,
    setCitiesRequestError,
    setCitiesRequestLoading,
    setPointsData,
    setPointsRequestError,
    setPointsRequestLoading
} from "../actions";

function* getCarsDataHandler() {
    try {
        yield put(setCarsRequestLoading(true));

        const response: AxiosResponse = yield call(filterData.getCars);

        if (response?.status < 300) {
            yield put(setCarsData(response.data.data));
        } else {
            throw new Error(errorKeys.requestError);
        }

    } catch (error: any) {
        yield put(setCarsRequestError(`При получении списка машин произошла ошибка: ${error.message}`))
    } finally {
        yield put(setCarsRequestLoading(false));
    }
}

function* getCitiesDataHandler() {
    try {
        yield put(setCitiesRequestLoading(true));

        const response: AxiosResponse = yield call(filterData.getCities);

        if (response?.status < 300) {
            yield put(setCitiesData(response.data.data));
        } else {
            throw new Error(errorKeys.requestError);
        }

    } catch (error: any) {
        yield put(setCitiesRequestError(`При получении списка городов произошла ошибка: ${error.message}`))
    } finally {
        yield put(setCitiesRequestLoading(false));
    }
}

function* getPointsDataHandler() {
    try {
        yield put(setPointsRequestLoading(true));

        const response: AxiosResponse = yield call(filterData.getPoints);

        if (response?.status < 300) {
            yield put(setPointsData(response.data.data));
        } else {
            throw new Error(errorKeys.requestError);
        }

    } catch (error: any) {
        yield put(setPointsRequestError(`При получении списка пунктов произошла ошибка: ${error.message}`))
    } finally {
        yield put(setPointsRequestLoading(false));
    }
}

function* getFiltersDataHandler() {
    try {

        yield all([
            call(getCarsDataHandler),
            call(getCitiesDataHandler),
            call(getPointsDataHandler)
        ])

    } catch (error) {
        console.error(error);
    }
}

export function* getFiltersDataWatcher() {
    yield takeLatest(getFiltersData, getFiltersDataHandler)
}