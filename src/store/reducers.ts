import { combineReducers } from "@reduxjs/toolkit"

import auth from "./auth/reducer";
import tableData from "./tableData/reducer";
import filtersData from "./filtersData/reducer";

const rootReducer = combineReducers({
    auth,
    tableData,
    filtersData
})

export default rootReducer;