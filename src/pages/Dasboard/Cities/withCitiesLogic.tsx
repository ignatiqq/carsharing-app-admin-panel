import React, { useEffect, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from 'store';
import { getTableCitiesData, setTableCitiesPagination } from 'store/tableData/actions';
import { IQueryFilter } from 'store/tableData/types';
import type { IPagination } from 'types/requests';
import type { ICitiesTable } from "./CitiesTable";

const withCitiesLogic = (Component: React.FC<ICitiesTable>) => () =>{

    const dispatch = useAppDispatch();

    const { citiesData } = useAppSelector(({tableData}) => ({
      citiesData: tableData.cities
    }))

    useEffect(() => {
      if(citiesData.pagination) {
        dispatch(getTableCitiesData(citiesData.pagination as IQueryFilter));
      }
    }, [citiesData.pagination, dispatch])

    const setPagination = useCallback((pagination: IPagination) => {
      dispatch(setTableCitiesPagination(pagination))
    }, [dispatch])

    return (
      <Component
        isLoading={citiesData.isLoading}
        error={citiesData.error}
        data={citiesData?.data && citiesData.data.data}
        pagination={citiesData.pagination}
        setPagination={setPagination}
        count={citiesData?.data && citiesData.data.count}
      />
    )
}

export default withCitiesLogic;