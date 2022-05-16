import React, { useEffect, useCallback, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from 'store';
import { getTableCitiesData, setTableCitiesPagination } from 'store/tableData/actions';
import type { IPagination } from 'types/requests';
import type { ICitiesTable } from "./CitiesTable";
import styles from "./CitiesTable.module.scss";

export type CitiesTableMappedData = Array<ICitiesTableMappedItem> | null;

interface ICitiesTableMappedItem {
    name: React.ReactElement
}

const head = [
  {
      name: "Город"
  }
];

const withCitiesLogic = (Component: React.FC<ICitiesTable>) => () =>{

    const dispatch = useAppDispatch();

    const { citiesData } = useAppSelector(({tableData}) => ({
      citiesData: tableData.cities
    }))

    useEffect(() => {
      if(citiesData.pagination) {
        dispatch(getTableCitiesData(citiesData.pagination));
      }
    }, [citiesData.pagination, dispatch])

    const setPagination = useCallback((pagination: IPagination) => {
      dispatch(setTableCitiesPagination(pagination))
    }, [dispatch])

    const mappedData = useMemo(() => {
      if(citiesData?.data) {
        return citiesData.data.data.map(item => {
            return {
                name: <div className={styles.tableData__name}>{item.name}</div>
            }
        })
      }
      return null;
    }, [citiesData.data])

    return (
      <Component
        isLoading={citiesData.isLoading}
        error={citiesData.error}
        data={mappedData}
        pagination={citiesData.pagination}
        setPagination={setPagination}
        count={citiesData?.data && citiesData.data.count}
        head={head}
      />
    )
}

export default withCitiesLogic;