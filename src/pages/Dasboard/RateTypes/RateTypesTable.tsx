import React from 'react';

import { Table, Paginator, Loader } from 'components';
import withRateTypesLogic from "./withRateTypesLogic";
import type { RateTypesTableMappedData } from "./withRateTypesLogic";
import type { IPagination } from 'types/requests';
import { ITableHead } from 'components/Table/Table';
import styles from "./RateTypesTable.module.scss";
import classNames from 'classnames';

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
        data &&
        pagination &&
        count &&
        setPagination && (
          <Paginator
            page={pagination.page}
            limit={pagination.limit}
            count={count}
            setPagination={setPagination}
            className={isLoading ? styles.paginationDisabled : ""}
          />
        )
      }
    </div>
  );

  return (
    <>
      <Table 
        data={data}
        head={head}
        error={error}
        isLoading={isLoading}
        customHead={customHead}
      />
      {Pagintation}
    </>
  )
}

export default withRateTypesLogic(RateTypesTable);