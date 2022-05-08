import React from 'react';

import { Select } from "components";
import styles from "./Table.module.scss";
import {Paginator} from 'components';
import { IPagination } from 'store/tableData/types';
import Loader from 'components/Dumb/Loader/Loader';
import NothingFound from 'components/Phrases/NothingFound/NothingFound';

interface ITable {
    data: Array<{[key:string]: any}> | null | undefined
    Component: React.FC<any>,
    filters?: Array<IFilterItem>,
    pagination?: IPagination,
    count?: number | null,
    setPagination?: (pagination: IPagination) => void,
    isLoading: boolean,
    error: string | null
}

interface IFilterItem {
    data: Array<{[key:string]: any}>
    label: string, 
    selected: string,
    placeholder: string
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
        <div>
          {filters &&
            filters.length > 0 &&
            filters.map((item) => (
              <Select
                key={item.label}
                options={item.data}
                label={item.label}
                selected={item.selected}
                clickHandler={() => console.log(item)}
              />
            ))}
        </div>
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
            <div className="error-text">{error}</div>
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