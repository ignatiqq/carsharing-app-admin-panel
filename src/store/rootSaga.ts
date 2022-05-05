import { all } from "redux-saga/effects";

import { 
    loginUserWatcher,
    refreshUserWatcher,
    logoutUserWatcher
} from "./auth/sagas/authorization";

export default function *rootSaga() {
    yield all([
        loginUserWatcher(),
        refreshUserWatcher(),
        logoutUserWatcher()
    ])
}