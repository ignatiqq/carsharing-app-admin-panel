import React from 'react';

import type { ICarData } from 'store/filtersData/types';
import { carNumberFormatter } from 'utils/carNumber';
import styles from "./CarModelComponent.module.scss";

const CarModelComponent: React.FC<ICarData> = ({
  categoryId,
  description,
  name,
  number,
  thumbnail,
  priceMax,
  priceMin
}) => {
  return (
    <div className={styles.carModel}>
      <div className={styles.carModel__image}>
        <img src={thumbnail?.path} alt="Фото" />
      </div>
      <div className={styles.carModel__number}>
        <span>
          {
            number ? carNumberFormatter(number) : "Номер не опознан"
          }
        </span>
      </div>
      <div className={styles.carModel__category}>
        {categoryId?.name}
      </div>
      <div className={styles.carModel__description}>
        {categoryId?.description}
      </div>
    </div>
  )
}

export default CarModelComponent;