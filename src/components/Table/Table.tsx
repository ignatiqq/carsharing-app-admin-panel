import React from 'react';

import { Select } from "components";
import styles from "./Table.module.scss";

interface ITable {
    data: Array<{[key:string]: any}>
    Component: React.FC<any>,
    filters?: Array<IFilterItem>
}

interface IFilterItem {
    data: Array<{[key:string]: any}>
    label: string, 
    selected: string,
    placeholder: string
}


const Table: React.FC<ITable> = ({ data, Component, filters }) => {

  return (
    <div className={styles.table}>
        <div>
            {
                filters && filters.length > 0 &&
                filters.map(item => (
                    <Select
                        options={item.data}
                        label={item.label}
                        selected={item.selected}
                        clickHandler={() => console.log(item)}
                    />
                ))
            }
        </div>
        <div className={styles.table__content}>
            {
                data && data.length > 0 &&
                data.map(item => (
                    <Component {...item} />
                ))
            }
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Table