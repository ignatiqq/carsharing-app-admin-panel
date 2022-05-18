import React from 'react'

import type { IPagination } from 'types/requests';
import type { PointsTableMappedData } from './withPointsTableLogic';
import withPointsTableLogic from './withPointsTableLogic';
import { Table, Button, TableHead, TablePagination } from 'components';
import type { ITableHead } from 'components/Table/Table/Table';
import styles from "./PointsTable.module.scss";

export interface IPointsTable {
  isLoading: boolean,
  error: string | null,
  data: PointsTableMappedData,
  pagination: IPagination,
  setPagination: (data: IPagination) => void
  count: number | null,
  head: ITableHead
}

const PointsTable: React.FC<IPointsTable> = ({
  isLoading,
  error,
  data,
  pagination,
  setPagination,
  count,
  head
}) => {

  const customHead = <TableHead dataLength={data && data?.length} count={count} />

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
        error={error}
        isLoading={isLoading}
        head={head}
        customHead={customHead}
      />
      {Pagintation}
    </>
  );
}

export default withPointsTableLogic(PointsTable);