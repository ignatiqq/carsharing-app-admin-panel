import React from 'react';

import styles from "./Table.module.scss";
import {Paginator} from 'components';
import type { IPagination } from 'types/requests';
import Loader from 'components/Dumb/Loader/Loader';
import NothingFound from 'components/Phrases/NothingFound/NothingFound';
import classNames from 'classnames';
import type { ICurrentCity, ICurrentPoint, ICarData } from 'store/filtersData/types';

interface ITable {
    data: Array<{[key:string]: any}> | null | undefined
    Component: React.FC<any>,
    filters?: Array<ITableFilters> | null,
    pagination?: IPagination,
    count?: number | null,
    setPagination?: (pagination: IPagination) => void,
    isLoading: boolean,
    error: string | null
}

export interface ITableFilters {
  data: ICurrentCity[] | ICurrentPoint[] | ICarData[],
  onChange: (data: ICurrentCity | ICurrentPoint | ICarData) => void,
  selected: ICurrentCity | ICurrentPoint | ICarData | undefined,
  error: string | null,
  isLoading: boolean
}

const Table: React.FC<ITable> = ({ 
    data, 
    Component, 
    filters, 
    pagination, 
    count ,
    setPagination,
    isLoading,
    error
}) => {
    return (
      <div className={styles.table}>
        {
            !isLoading && !error ?
            <div className={styles.table__content}>
                {data && data.length > 0 ? 
                    data.map((item) => <Component key={item.id} {...item} />)
                    : 
                    <NothingFound className={styles.notfound__wrapper} />
                }
            </div>
            : isLoading && !error ?
            <Loader className={styles.table__content} />
            : error &&
            <div className={classNames(styles.error__container, "error-text")}>{error}</div>
        }
        {pagination && count && setPagination && data && (
          <div className={styles.table__paginator__wrapper}>
            <Paginator
              page={pagination.page}
              limit={pagination.limit}
              count={count}
              setPagination={setPagination}
            />
          </div>
        )}
      </div>
    );
}

export default Table;