import React from 'react';

import type { ICurrentPoint } from 'store/filtersData/types';
import styles from "./PointsTableComponent.module.scss";

const PointsTableComponent: React.FC<ICurrentPoint> = ({
  name,
  address,
  cityId
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__city}>{cityId?.name ? cityId.name : "Город"}</div>
      <div className={styles.wrapper__address}>{address ? address : "Адрес"}</div>
      <div className={styles.wrapper__name}>{name ? name: "Название"}</div>
    </div>
  )
}

export default PointsTableComponent;