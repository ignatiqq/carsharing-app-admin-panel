import React from 'react';

import { Paginator, Button } from "components";
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
      {count && dataLength ?
        <Paginator
          page={pagination.page}
          limit={pagination.limit}
          count={count}
          setPagination={setPagination}
          className={isLoading ? styles.pagination_disabled : ""}
        />
        : !isLoading &&
        <div className={styles.goBack}>
          <Button
            apperance='default'
            className={styles.goBack__utton}
            onClick={() => setPagination({...pagination, page: 1})}
          >В начало</Button>
        </div>
      }
    </div>
  )
}

export default TablePagination;