import { put, call, takeLatest } from "redux-saga/effects";
import { AnyAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

import errorKeys from "constants/errorKeys";
import tableData from "api/routes/tableData";
import { 
    setTableCarsData,
    setTableCarsDataLoading,
    setTableCarsRequestError,
    getTableCarsData,
    getTableCarByIdData,
    setTableCarByIdLoading,
    setTableCarByIdData
} from "../../actions";
import { ICarsDataInfo, ICarRequestResponse } from "../../types";


function* getTableCarsDataHandler(action: AnyAction) {
    try {
        yield put(setTableCarsDataLoading(true));

        const response: AxiosResponse<ICarsDataInfo> = yield call(tableData.cars, action.payload)

        if (response?.status < 300) {
            yield put(setTableCarsData({
                data: response.data.data, 
                count: response.data.count
            }));
        } else {
            throw new Error(errorKeys.requestError);
        }

    } catch (error: any) {
        yield put(setTableCarsRequestError(`Произошла ошибка про получении данных о машинах ${error.message}`));
    } finally {
        yield put(setTableCarsDataLoading(false));
    }
}

export function* getTableCarsDataWatcher() {
    yield takeLatest(getTableCarsData, getTableCarsDataHandler);
}

function* getTableCarByIdHandler(action: AnyAction) {
    try {
        
        yield put(setTableCarByIdLoading(true));

        const response: AxiosResponse<ICarRequestResponse> = yield call(tableData.carById, action.payload);

        if(response?.status < 300) {
            yield put(setTableCarByIdData(response.data.data));
        } else {
            throw new Error(errorKeys.requestError);
        }

    } catch (error: any) {
        yield put(setTableCarsRequestError(`Произошла ошибка про получении данных о машине ${error.message}`));
    } finally {
        yield put(setTableCarByIdLoading(false));
    }
}

export function* getTableCarByIdWatcher() {
    yield takeLatest(getTableCarByIdData, getTableCarByIdHandler);
}