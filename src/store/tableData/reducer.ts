import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { 
    setOrderData,
    setOrderDataLoading,
    setOrderDataError,
    setOrderPagination,
    setOrderCityFilter,
    setOrderCarFilter,
    setOrderPointFilter,
    setTableCitiesData,
    setTableCitiesDataLoading,
    setTableCitiesRequestError,
    setTableCitiesPagination,
    setTablePointsData,
    setTablePointsDataLoading,
    setTablePointsRequestError,
    setTablePointsPagination,
    setTableRateTypesData,
    setTableRateTypesDataLoading,
    setTableRateTypesRequestError,
    setTableRateTypesPagination,
    setTableCarsData,
    setTableCarsPagination,
    setTableCarsDataLoading,
    setTableCarsRequestError,
    setTableCarsFilter,
} from "./actions";
import type { IPagination } from "types/requests";
import type { 
    ICityDataInfo, 
    IOrderDataInfo, 
    IPointDataInfo, 
    IRateTypeDataInfo, 
    ITableData, 
    ICarsDataInfo,
} from "./types";


const initialState: ITableData = {
    order: {
        data: null,
        pagination: {
            page: 1,
            limit: 3
        },
        filters: {
            cityId: "",
            pointId: "",
            carId: ""
        },
        isLoading: false,
        error: null
    },
    cars: {
        data: null,
        pagination: {
            page: 1,
            limit: 3
        },
        filters: {
            categoryId: ""
        },
        isLoading: false,
        error: null
    },
    cities: {
        data: null,
        pagination: {
            page: 1,
            limit: 10
        },
        isLoading: false,
        error: null
    },
    points: {
        data: null,
        pagination: {
            page: 1,
            limit: 10
        },
        isLoading: false,
        error: null
    },
    rateTypes: {
        data: null,
        pagination: {
            page: 1,
            limit: 10
        },
        isLoading: false,
        error: null
    }
}

const tableData = createReducer(initialState, (builder) => {
    builder
        .addCase(setOrderData, (state, action: PayloadAction<IOrderDataInfo>) => {
            state.order.data = action.payload
        })
        .addCase(setOrderDataLoading, (state, action: PayloadAction<boolean>) => {
            state.order.isLoading = action.payload
        })
        .addCase(setOrderDataError, (state, action: PayloadAction<string>) => {
            state.order.error = action.payload
        })
        .addCase(setOrderPagination, (state, action: PayloadAction<IPagination>) => {
            state.order.pagination = action.payload
        })

        // Filter

        .addCase(setOrderCityFilter, (state, action: PayloadAction<string>) => {
            state.order.filters.cityId = action.payload
        })
        .addCase(setOrderPointFilter, (state, action: PayloadAction<string>) => {
            state.order.filters.pointId = action.payload
        })
        .addCase(setOrderCarFilter, (state, action: PayloadAction<string>) => {
            state.order.filters.carId = action.payload
        })

        // Cars

        .addCase(setTableCarsData, (state, action: PayloadAction<ICarsDataInfo>) => {
            state.cars.data = action.payload;
        })
        .addCase(setTableCarsDataLoading, (state, action: PayloadAction<boolean>) => {
            state.cars.isLoading = action.payload
        })
        .addCase(setTableCarsRequestError, (state, action: PayloadAction<string>) => {
            state.cars.error = action.payload
        })
        .addCase(setTableCarsPagination, (state, action: PayloadAction<IPagination>) => {
            state.cars.pagination = action.payload
        })
        .addCase(setTableCarsFilter, (state, action: PayloadAction<string>) => {
            state.cars.filters.categoryId = action.payload
        })

        // Cities

        .addCase(setTableCitiesData, (state, action: PayloadAction<ICityDataInfo>) => {
            state.cities.data = action.payload
        })
        .addCase(setTableCitiesDataLoading, (state, action: PayloadAction<boolean>) => {
            state.cities.isLoading = action.payload
        })
        .addCase(setTableCitiesRequestError, (state, action: PayloadAction<string>) => {
            state.cities.error = action.payload
        })
        .addCase(setTableCitiesPagination, (state, action: PayloadAction<IPagination>) => {
            state.cities.pagination = action.payload
        })

        // Points

        .addCase(setTablePointsData, (state, action: PayloadAction<IPointDataInfo>) => {
            state.points.data = action.payload
        })
        .addCase(setTablePointsDataLoading, (state, action: PayloadAction<boolean>) => {
            state.points.isLoading = action.payload
        })
        .addCase(setTablePointsRequestError, (state, action: PayloadAction<string>) => {
            state.points.error = action.payload
        })
        .addCase(setTablePointsPagination, (state, action: PayloadAction<IPagination>) => {
            state.points.pagination = action.payload
        })

        // rate

        .addCase(setTableRateTypesData, (state, action: PayloadAction<IRateTypeDataInfo>) => {
            state.rateTypes.data = action.payload
        })
        .addCase(setTableRateTypesDataLoading, (state, action: PayloadAction<boolean>) => {
            state.rateTypes.isLoading = action.payload
        })
        .addCase(setTableRateTypesRequestError, (state, action: PayloadAction<string>) => {
            state.rateTypes.error = action.payload
        })
        .addCase(setTableRateTypesPagination, (state, action: PayloadAction<IPagination>) => {
            state.rateTypes.pagination = action.payload
        })
})

export default tableData;