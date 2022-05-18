import React from 'react'

import type { IPagination } from 'types/requests';
import type { PointsTableMappedData } from './withPointsTableLogic';
import withPointsTableLogic from './withPointsTableLogic';
import { Table, Paginator, Loader } from 'components';
import { ITableHead } from 'components/Table/Table';
import styles from "./PointsTable.module.scss";

export interface IPointsTable {
  isLoading: boolean,
  error: string | null,
  data: PointsTableMappedData,
  pagination?: IPagination,
  setPagination?: (data: IPagination) => void
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

  const customHead = (
    <div className={styles.customHead}>
      <div>Список адресов</div>
      <div className={styles.customHead__countWrapper}>
        <span>Всего: </span> {count ? count : <Loader />}
      </div>
    </div>
  );

  const Pagintation = (
    <div className={styles.pagination}>
      {
        isLoading ?
        <Loader />
        :
        data &&
        pagination &&
        count &&
        setPagination ? (
          <Paginator
            page={pagination.page}
            limit={pagination.limit}
            count={count}
            setPagination={setPagination}
          />
        )
        :
        null
      }
    </div>
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