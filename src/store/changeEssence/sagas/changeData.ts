import { AnyAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import type { AxiosResponse } from "axios";
import { takeLatest, put, call } from "redux-saga/effects";

import tableData from "api/routes/tableData";
import { 
    getDataToChange, 
    setDataToChange, 
    setDataToChangeLoading, 
    setDataToChangeRequestError,
    sendDataToChange,
    sendChangedEssenseDataLoading,
    sendChangedEssenseDataRequestError,
    deleteDataToChange
} from "../actions";
import errorKeys from "constants/errorKeys";
import { addTemporaryNotification } from "store/notifications/actions";
import { temporaryNotificationsFactory } from "utils/notificationsFactory";
import { 
    failedTemporaryChangeEssense, 
    successTemporaryChangeEssense,
    successTemporaryDeleteEssense,
    failedTemporaryDeleteEssense
} from "constants/notifications/temporary";
import { ITemporaryNotification } from "store/notifications/types";

function* getChangeDataHandler(action: AnyAction) {
    try {
        
        yield put(setDataToChangeLoading(true));

        const response: AxiosResponse = yield call(tableData.getChangeDataById, action.payload);

        if(response?.status < 300) {
            yield put(setDataToChange(response.data.data));
        } else {
            throw new Error(errorKeys.requestError);
        }

    } catch (error: any) {
        yield put(setDataToChangeRequestError(`${error.message}`))
    } finally {
        yield put(setDataToChangeLoading(false));
    }
}

export function* getChangeDataWatcher() {
    yield takeLatest(getDataToChange, getChangeDataHandler);
}

function* sendDataToChangeHandler(action: AnyAction) {
    try {
        
        yield put(sendChangedEssenseDataLoading(true));
        
        const response: AxiosResponse = yield call(tableData.putChangeDataById, action.payload);

        if(response?.status < 300) {
            yield put(addTemporaryNotification(temporaryNotificationsFactory(successTemporaryChangeEssense(uuidv4()) as ITemporaryNotification)))
        } else {
            throw new Error(errorKeys.requestError)
        }

    } catch (error: any) {
        yield put(addTemporaryNotification(temporaryNotificationsFactory(failedTemporaryChangeEssense(uuidv4()) as ITemporaryNotification)))
        yield put(sendChangedEssenseDataRequestError(error.message));
    } finally {
        yield put(sendChangedEssenseDataLoading(false));
    }
}

export function* sendDataToChangeWatcher() {
    yield takeLatest(sendDataToChange, sendDataToChangeHandler);
}

function* deleteDataToChangeHandler(action: AnyAction) {
    try {
        
        yield put(sendChangedEssenseDataLoading(true));

        const response: AxiosResponse = yield call(tableData.deleteChandeDataById, action.payload);

        if(response.status < 300) {
            yield put(addTemporaryNotification(temporaryNotificationsFactory(successTemporaryDeleteEssense(uuidv4()) as ITemporaryNotification)))
        } else {
            throw new Error(errorKeys.requestError)
        }

    } catch (error: any) {
        yield put(addTemporaryNotification(temporaryNotificationsFactory(failedTemporaryDeleteEssense(uuidv4()) as ITemporaryNotification)))
        yield put(sendChangedEssenseDataRequestError(error.message));
    } finally {
        yield put(sendChangedEssenseDataLoading(false));
    }
}

export function* deleteDataToChangeWatcher() {
    yield takeLatest(deleteDataToChange, deleteDataToChangeHandler);
}