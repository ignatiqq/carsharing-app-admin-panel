import React, { useCallback, useEffect, useState } from 'react';

import { useAppSelector, useAppDispatch } from 'store';
import type { IPagination } from 'types/requests';
import type { ICars } from './CarModels';
import { setTableCarsData, setTableCarsPagination } from "store/tableData/actions";

const withCarModelsLogic = (Component: React.FC<ICars>) => () => {
    const dispatch = useAppDispatch();

    const { cars, carsData } = useAppSelector(({filtersData, tableData}) => ({
        cars: filtersData.car,
        carsData: tableData.cars
    }))

    useEffect(() => {
        if(cars && cars.data) {
            dispatch(setTableCarsData(cars.data.slice(
                (carsData.pagination.page - 1) * carsData.pagination.limit, carsData.pagination.page * carsData.pagination.limit)
            ));
        }
    }, [cars, carsData.pagination])

    const setPagination = useCallback((data: IPagination) => {
        dispatch(setTableCarsPagination(data));
    }, [])

    return (
        <Component
            isLoading={cars.isLoading}
            error={cars.error}
            data={carsData.data}
            pagination={carsData.pagination}
            setPagination={setPagination}
            count={cars?.count}
        />
    )
}

export default withCarModelsLogic;