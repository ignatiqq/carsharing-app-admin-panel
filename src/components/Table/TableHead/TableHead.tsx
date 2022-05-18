import React from 'react';

import { Loader } from "components";
import styles from "./TableHead.module.scss";

interface ICustomTableHead {
  dataLength: number | null,
  children?: React.ReactElement,
  count: number | null
}

const TableHead: React.FC<ICustomTableHead> = ({ dataLength, children, count }) => {
  return (
      <>
        <div className={styles.header}>
          <div>Список моделей</div>
          <div className={styles.header__countWrapper}>
            <span>Всего: </span> {count && dataLength ? count : count && !dataLength ? 0 : <Loader />}
          </div>
        </div>
        {children && children}
      </>
  )
}

export default TableHead;