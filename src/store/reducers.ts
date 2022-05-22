import { combineReducers } from "@reduxjs/toolkit"

import auth from "./auth/reducer";
import tableData from "./tableData/reducer";
import filtersData from "./filtersData/reducer";
import essenceOptions from "./changeEssence/reducer";

const rootReducer = combineReducers({
    auth,
    tableData,
    filtersData,
    essenceOptions
})

export default rootReducer;