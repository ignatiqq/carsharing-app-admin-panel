import { all } from "redux-saga/effects";

import { 
    loginUserWatcher,
    refreshUserWatcher,
    logoutUserWatcher
} from "./auth/sagas/authorization";
import { getOrdersWatcher } from "./tableData/sagas/orders";

export default function *rootSaga() {
    yield all([
        loginUserWatcher(),
        refreshUserWatcher(),
        logoutUserWatcher(),
        getOrdersWatcher()
    ])
}