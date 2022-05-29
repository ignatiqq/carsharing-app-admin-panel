import { all, call, takeLatest, put, fork } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import errorKeys from "constants/errorKeys";
import filterData from "api/routes/filterData";
import { 
    getFiltersData, 
    setCarCategoriesData, 
    setCarCategoriesRequestError, 
    setCarCategoriesRequestLoading, 
    setCarsData, 
    setCarsRequestError, 
    setCarsRequestLoading,
    setCitiesData,
    setCitiesRequestError,
    setCitiesRequestLoading,
    setOrderStatusData,
    setOrderStatusRequestError,
    setOrderStatusRequestLoading,
    setPointsData,
    setPointsRequestError,
    setPointsRequestLoading
} from "../actions";
import { IOrderStatusData } from "../types";

function* getCarCategoriesHandler() {
    try {

        yield put(setCarCategoriesRequestLoading(true));

        const response: AxiosResponse = yield call(filterData.getCarCategories);

        if(response?.status < 300) {
            yield put(setCarCategoriesData(response.data.data))
        } else {
            throw new Error(errorKeys.requestError);
        }
    
    } catch (error: any) {
        yield put(setCarCategoriesRequestError(error.message));
    } finally {
        yield put(setCarCategoriesRequestLoading(false));
    }
}

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

function*  getOrderStatusHandler() {
    try {
        
        yield put(setOrderStatusRequestLoading(true));

        const response: AxiosResponse<IOrderStatusData> = yield call(filterData.getOrderStatuses);

        if(response.status < 300) {
            yield put(setOrderStatusData({
                data: response.data.data,
                count: response.data.count
            }));
        } else {
            throw new Error(errorKeys.requestError);
        }

    } catch (error: any) {
        yield put(setOrderStatusRequestError(error.message));
    } finally {
        yield put(setOrderStatusRequestLoading(false));
    }
}

function* getFiltersDataHandler() {
    try {

        yield all([
            fork(getCarsDataHandler),
            fork(getCitiesDataHandler),
            fork(getPointsDataHandler),
            fork(getCarCategoriesHandler),
            fork(getOrderStatusHandler)
        ])

    } catch (error) {
        console.error(error);
    }
}

export function* getFiltersDataWatcher() {
    yield takeLatest(getFiltersData, getFiltersDataHandler)
}