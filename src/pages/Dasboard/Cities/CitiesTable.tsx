import React from 'react';

import type { IPagination } from 'types/requests';
import type { CitiesTableMappedData } from './withCitiesLogic';
import withCitiesLogic from './withCitiesLogic';
import { Table, TablePagination, Button, TableHead } from 'components';
import styles from "./CitiesTable.module.scss";
import { ITableHead } from 'components/Table/Table/Table';

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

  const CitiesTableHeader = <TableHead dataLength={data && data?.length} count={count} />

  const Pagintation = (
    <>
        <TablePagination 
          count={count} 
          pagination={pagination} 
          isLoading={isLoading}  
          setPagination={setPagination}
        />
    </>
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