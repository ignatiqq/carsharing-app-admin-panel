import React from 'react';

import { ICarData, ICarDataCategoryId } from 'store/filtersData/types';
import styles from "./ChangeCarSettings.module.scss";

interface IChangeCarSettings {
  categoryId: ICarDataCategoryId
  colors: Array<string>,
  name: string
}

const ChangeCarSettings: React.FC<IChangeCarSettings> = ({
  categoryId,
  colors,
  name,
}) => {
  return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>Настройки автомобиля</h2>
        </div>
      </div>
  )
}

export default ChangeCarSettings;