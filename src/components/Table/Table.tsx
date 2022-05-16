import React from 'react';

import styles from "./Table.module.scss";
import Loader from 'components/Dumb/Loader/Loader';
import NothingFound from 'components/Phrases/NothingFound/NothingFound';
import classNames from 'classnames';

interface ITable {
    data: Array<{[key:string]: any}> | null | undefined
    isLoading?: boolean,
    error?: string | null,
    head?: ITableHead,
    customHead?: React.ReactElement,
    className?: string
}

export type ITableHead = Array<IHead>;

interface IHead {
  name: string
}

const Table: React.FC<ITable> = ({ 
    data, 
    isLoading,
    error,
    head,
    customHead,
    className
}) => {
    return (
      <div
        className={classNames(styles.table__wrapper, {
          [styles.table__wrapper_fullheight]: isLoading || error,
        })}>
        <div className={styles.table__customHead}>{customHead && customHead}</div>
        {isLoading ? (
          <div className={styles.table__wrapper_loading}>
            <Loader />
          </div>
        ) : error ? (
          <div className={classNames(styles.talbe__wrapper_error, 'error-text')}>{error}</div>
        ) : data && data?.length <= 0 ? (
          <div className={styles.table__wrapper_notfound}>
            <NothingFound />
          </div>
        ) : (
          <table className={classNames(styles.table, className)}>
            <thead className={styles.table__header}>
              {head && (
                <tr>
                  {head.map((item) => (
                    <th key={item.name} className={styles.table__header_th}>
                      {item.name}
                    </th>
                  ))}
                </tr>
              )}
            </thead>
            <tbody className={styles.table__content}>
              {data &&
                data.map((item, i) => (
                  <tr key={i}>
                    {item &&
                      Object.keys(item).map((key) => (
                        <th
                          key={key}
                          style={{ width: `${head && Math.floor(100 / head?.length)}%` }}>
                          {item[key]}
                        </th>
                      ))}
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    );
}

export default Table;