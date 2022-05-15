import React from 'react';

import type { ICurrentCity } from 'store/filtersData/types';
import { IPagination } from 'types/requests';
import withCitiesLogic from './withCitiesLogic';
import { Table, CitiesTableComponent, Loader } from 'components';
import styles from "./CitiesTable.module.scss";

export interface ICitiesTable {
  isLoading: boolean,
  error: string | null,
  data: Array<ICurrentCity> | null,
  pagination: IPagination,
  setPagination: (data: IPagination) => void
  count: number | null
}

const CitiesTable: React.FC<ICitiesTable> = ({
  isLoading,
  error,
  data,
  pagination,
  setPagination,
  count
}) => {

  const CitiesTableHeader = () => {
    return (
      <div className={styles.CitiesTable__header}>
        <div>Список городов</div>
        <div className={styles.CitiesTable__header__countWrapper}><span>Всего: </span> {count ? count : <Loader />}</div>
      </div>
    )
  }

  return (
   <Table
      data={data}
      Component={CitiesTableComponent}
      isLoading={isLoading}
      error={error}
      pagination={pagination}
      setPagination={setPagination}
      count={count}
      Header={CitiesTableHeader}
   />
  )
}

export default withCitiesLogic(CitiesTable);