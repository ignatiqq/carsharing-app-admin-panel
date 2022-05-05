import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { 
    setOrderData
} from "./actions";
import type { IOrderData, ITableData } from "./types";

const initialState: ITableData = {
    order: {
        data: null,
        isLoading: false,
        error: null
    }
}

const tableData = createReducer(initialState, (builder) => {
    builder
        .addCase(setOrderData, (state, action: PayloadAction<Array<IOrderData>>) => {
            state.order.data = action.payload
        })
})