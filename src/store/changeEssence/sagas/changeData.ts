import { AnyAction } from "@reduxjs/toolkit";
import type { AxiosResponse } from "axios";
import { takeLatest, put, call } from "redux-saga/effects";

import tableData from "api/routes/tableData";
import { getDataToChange, setDataToChange, setDataToChangeLoading, setDataToChangeRequestError } from "../actions";
import errorKeys from "constants/errorKeys";

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