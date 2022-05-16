import { all } from "redux-saga/effects";

import { loginUserWatcher } from "./auth/sagas/authorization";

export default function *rootSaga() {
    yield all([
        loginUserWatcher()
    ])
}