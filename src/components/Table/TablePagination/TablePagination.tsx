import React from 'react';

import { Paginator } from "components";
import styles from "./TablePagination.module.scss";
import type { IPagination } from 'types/requests';

interface ITablePagination {
  dataLength: number | null,
  count: number | null,
  setPagination: (data: IPagination) => void,
  pagination: IPagination,
  isLoading: boolean
}

const TablePagination: React.FC<ITablePagination> = ({
  dataLength,
  count,
  setPagination,
  pagination,
  isLoading
}) => {
  
  return (
    <div className={styles.pagination}>
      {(count && !isLoading && count > pagination.limit) ?
        <Paginator
          page={pagination.page}
          limit={pagination.limit}
          count={count}
          setPagination={setPagination}
          className={isLoading ? styles.pagination_disabled : ""}
        />
        :
        null
      }
    </div>
  )
}

export default TablePagination;