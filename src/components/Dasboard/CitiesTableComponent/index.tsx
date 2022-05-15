import React from 'react';

import { ICurrentCity } from 'store/filtersData/types';

import styles from "./CitiesTableComponent.module.scss";


const CitiesTableComponent: React.FC<ICurrentCity> = ({
    updatedAt,
    createdAt,
    name,
    id
}) => {
  return (
    <div className={styles.wrapper}>
        <span>{name ? name : "Город"}</span>
    </div>
  )
}

export default CitiesTableComponent;