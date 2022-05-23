import React from 'react';

import { Table, TablePagination, TableHead } from 'components';
import withRateTypesLogic from "./withRateTypesLogic";
import type { RateTypesTableMappedData } from "./withRateTypesLogic";
import type { IPagination } from 'types/requests';
import { ITableHead } from 'components/Table/Table/Table';
import styles from "./RateTypesTable.module.scss";

export interface IRateTypesTable {
  data: RateTypesTableMappedData,
  error: string | null,
  count: number | null,
  head: ITableHead,
  isLoading: boolean,
  pagination: IPagination,
  setPagination: (data: IPagination) => void
}

const RateTypesTable: React.FC<IRateTypesTable> = ({
  data,
  head,
  error,
  isLoading,
  count,
  pagination,
  setPagination
}) => {

  const customHead = <TableHead count={count} />

  const Pagintation = (
    <>
        <TablePagination 
          dataLength={data && data?.length}
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
        head={head}
        error={error}
        isLoading={isLoading}
        customHead={customHead}
        className={styles.customTableStyle}
      />
      {Pagintation}
    </>
  )
}

export default withRateTypesLogic(RateTypesTable);