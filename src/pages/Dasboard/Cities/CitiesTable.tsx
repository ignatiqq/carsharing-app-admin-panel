import React from 'react';

import type { IPagination } from 'types/requests';
import type { CitiesTableMappedData } from './withCitiesLogic';
import withCitiesLogic from './withCitiesLogic';
import { Table, Loader, Paginator } from 'components';
import styles from "./CitiesTable.module.scss";
import { ITableHead } from 'components/Table/Table';

export interface ICitiesTable {
  isLoading: boolean,
  error: string | null,
  data: CitiesTableMappedData | null,
  pagination: IPagination,
  setPagination: (data: IPagination) => void
  count: number | null,
  head: ITableHead
}

const CitiesTable: React.FC<ICitiesTable> = ({
  isLoading,
  error,
  data,
  pagination,
  setPagination,
  count,
  head
}) => {

  const CitiesTableHeader = (
      <div className={styles.CitiesTable__header}>
        <div>Список городов</div>
        <div className={styles.CitiesTable__header__countWrapper}>
          <span>Всего: </span> {count ? count : <Loader />}
        </div>
      </div>
  );

  const Pagintation = (
    <div className={styles.pagination}>
      {
        pagination &&
        count &&
        setPagination &&
        data && (
          <Paginator
            page={pagination.page}
            limit={pagination.limit}
            count={count}
            setPagination={setPagination}
          />
        )
      }
    </div>
);

  return (
    <>
      <Table
          data={data}
          isLoading={isLoading}
          error={error}
          customHead={CitiesTableHeader}
          head={head}
      />
      {Pagintation}
    </>
  )
}

export default withCitiesLogic(CitiesTable);