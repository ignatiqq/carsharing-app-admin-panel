import { all } from "redux-saga/effects";

import { 
    loginUserWatcher,
    refreshUserWatcher,
    logoutUserWatcher
} from "./auth/sagas/authorization";
import { 
    getOrdersWatcher,
    getTableCitiesDataWatcher,
    getTablePointsDataWatcher,
    getTableRateTypesDataWatcher,
    getTableCarsDataWatcher,
} from "./tableData/sagas";
import { getFiltersDataWatcher } from "./filtersData/sagas/filtersData";
import { 
    getChangeDataWatcher,
    sendDataToChangeWatcher,
    deleteDataToChangeWatcher,
    createEssenceDataWatcher
} from "./changeEssence/sagas/actionCRUD";

export default function *rootSaga() {
    yield all([
        loginUserWatcher(),
        refreshUserWatcher(),
        logoutUserWatcher(),
        getOrdersWatcher(),
        getFiltersDataWatcher(),
        getTableCitiesDataWatcher(),
        getTablePointsDataWatcher(),
        getTableRateTypesDataWatcher(),
        getTableCarsDataWatcher(),
        getChangeDataWatcher(),
        sendDataToChangeWatcher(),
        deleteDataToChangeWatcher(),
        createEssenceDataWatcher(),
    ])
}