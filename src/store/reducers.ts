import { combineReducers } from "@reduxjs/toolkit"

import auth from "./auth/reducer";
import tableData from "./tableData/reducer";

const rootReducer = combineReducers({
    auth,
    tableData
})

export default rootReducer;