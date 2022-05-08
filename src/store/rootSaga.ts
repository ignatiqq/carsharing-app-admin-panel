import { all } from "redux-saga/effects";

import { 
    loginUserWatcher,
    refreshUserWatcher,
    logoutUserWatcher
} from "./auth/sagas/authorization";
import { 
    getOrdersWatcher 
} from "./tableData/sagas/orders";
import { 
    getFiltersDataWatcher 
} from "./filtersData/sagas/filtersData";

export default function *rootSaga() {
    yield all([
        loginUserWatcher(),
        refreshUserWatcher(),
        logoutUserWatcher(),
        getOrdersWatcher(),
        getFiltersDataWatcher()
    ])
}