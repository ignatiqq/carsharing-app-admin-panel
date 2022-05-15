import React, { useMemo } from 'react';

import styles from "./Table.module.scss";
import {Paginator} from 'components';
import type { IPagination } from 'types/requests';
import Loader from 'components/Dumb/Loader/Loader';
import NothingFound from 'components/Phrases/NothingFound/NothingFound';
import type { ICurrentCity, ICurrentPoint, ICarData } from 'store/filtersData/types';
import classNames from 'classnames';

interface ITable {
    data: Array<{[key:string]: any}> | null | undefined
    Component: React.FC<any>,
    filters?: Array<ITableFilters> | null,
    pagination?: IPagination,
    count?: number | null,
    setPagination?: (pagination: IPagination) => void,
    isLoading?: boolean,
    error?: string | null,
    tableContentStyles?: string,
    head?: ITableHead,
    Header?: React.FC<any>
}

export interface ITableFilters {
  data: ICurrentCity[] | ICurrentPoint[] | ICarData[],
  onChange: (data: ICurrentCity | ICurrentPoint | ICarData) => void,
  selected: ICurrentCity | ICurrentPoint | ICarData | undefined,
  error: string | null,
  isLoading: boolean
}

export type ITableHead = Array<IHead>;

interface IHead {
  name: string
}


const Table: React.FC<ITable> = ({ 
    data, 
    pagination, 
    count,
    setPagination,
    isLoading,
    error,
    head
}) => {

    return (
      <div className={classNames(styles.table__wrapper, {
        [styles.table__wrapper_fullheight]: isLoading || error
      })}>
        {
          isLoading ?
          <div className={styles.table__wrapper_loading}>
            <Loader />
          </div>
          :
          error ?
          <div className={classNames(styles.talbe__wrapper_error, "error-text")}>
            {error}
          </div>
          :
          <table className={styles.table}>
            <thead className={styles.table__header}>
              <tr>
                {
                  head &&
                  head.map(item => (
                    <th key={item.name} className={styles.table__header_th}>
                      {item.name}
                    </th>
                  ))
                }
              </tr>
            </thead>
            <tbody className={styles.table__content}>
              {
                data && 
                data.map((item) => (
                  <tr>
                    {
                      item && 
                      Object.keys(item).map(key => (
                        <th key={key} style={{width: `${head && Math.floor(100 / head?.length)}%`}}>
                          {item[key]}
                        </th>
                      ))
                    }
                  </tr>
                ))
              }
            </tbody>
          </table>
        }
        
      </div>
    );
}

export default Table;