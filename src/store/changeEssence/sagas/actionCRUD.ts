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
    actionEssenseDataRequestError,
    actionEssenseDataLoading,
    deleteDataToChange,
    createEssenceData,
} from "../actions";
import errorKeys from "constants/errorKeys";
import { addTemporaryNotification } from "store/notifications/actions";
import { temporaryNotificationsFactory } from "utils/notificationsFactory";
import { 
    failedChangeEssense, 
    successChangeEssense,
    successDeleteEssense,
    failedDeleteEssense,
    failedCreateEssense,
    successCreateEssense
} from "constants/notifications/temporary";
import { ITemporaryNotification } from "store/notifications/types";

// GET

function* getChangeDataHandler(action: AnyAction) {
    try {
        yield put(setDataToChangeRequestError(null));
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

// CHANGE

function* sendDataToChangeHandler(action: AnyAction) {
    try {
        
        yield put(actionEssenseDataLoading(true));

        const response: AxiosResponse = yield call(tableData.putChangeDataById, action.payload);

        if(response?.status < 300) {
            yield put(
                addTemporaryNotification(
                    temporaryNotificationsFactory(successChangeEssense(uuidv4()) as ITemporaryNotification)
                )
            )
        } else {
            throw new Error(errorKeys.requestError)
        }

    } catch (error: any) {
        yield put(
            addTemporaryNotification(
                temporaryNotificationsFactory(failedChangeEssense(uuidv4()) as ITemporaryNotification))
            )
        yield put(actionEssenseDataRequestError(error.message));
    } finally {
        yield put(actionEssenseDataLoading(false));
    }
}

export function* sendDataToChangeWatcher() {
    yield takeLatest(sendDataToChange, sendDataToChangeHandler);
}

// DELETE

function* deleteDataToChangeHandler(action: AnyAction) {
    try {
        
        yield put(actionEssenseDataLoading(true));

        const response: AxiosResponse = yield call(tableData.deleteChangeDataById, action.payload);

        if(response.status < 300) {
            yield put(
                addTemporaryNotification(
                    temporaryNotificationsFactory(successDeleteEssense(uuidv4()) as ITemporaryNotification)
            ));
        } else {
            throw new Error(errorKeys.requestError)
        }

    } catch (error: any) {
        yield put(
            addTemporaryNotification(
                temporaryNotificationsFactory(failedDeleteEssense(uuidv4()) as ITemporaryNotification))
            )
        yield put(actionEssenseDataRequestError(error.message));
    } finally {
        yield put(actionEssenseDataLoading(false));
    }
}

export function* deleteDataToChangeWatcher() {
    yield takeLatest(deleteDataToChange, deleteDataToChangeHandler);
}

// CREATE

function* createEssenceDataHandler(action: AnyAction) {
    try {
        
        yield put(actionEssenseDataLoading(true));

        const response: AxiosResponse = yield call(tableData.createEssenseData, action.payload);

        if(response.status < 300) {
            yield put(
                addTemporaryNotification(
                    temporaryNotificationsFactory(successCreateEssense(uuidv4()) as ITemporaryNotification)
            ));
        } else {
            throw new Error(errorKeys.requestError)
        }
        
    } catch (error) {
        yield put(
            addTemporaryNotification(
                temporaryNotificationsFactory(failedCreateEssense(uuidv4()) as ITemporaryNotification))
            )
    } finally {
        yield put(actionEssenseDataLoading(false));
    }
}

export function* createEssenceDataWatcher() {
    yield takeLatest(createEssenceData, createEssenceDataHandler)
}