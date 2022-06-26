import React from 'react';

import { Loader } from "components";
import styles from "./TableHead.module.scss";

interface ICustomTableHead {
  children?: React.ReactElement,
  count: number | null,
  isLoading: boolean
}

const TableHead: React.FC<ICustomTableHead> = ({ children, count, isLoading }) => {
  return (
      <>
        <div className={styles.header}>
          <div>Список моделей</div>
          <div className={styles.header__countWrapper}>
            <span>Всего: </span> {isLoading ? <Loader /> : (count !== null) && count}
          </div>
        </div>
        {children && children}
      </>
  )
}

export default TableHead;