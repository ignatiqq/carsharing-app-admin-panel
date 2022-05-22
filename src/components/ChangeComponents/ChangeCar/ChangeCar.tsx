import React from 'react';

import { ChangeCarWithThumbnail, ChangeCarSettings } from 'components';
import { ICarData, ICarDataCategoryId, ICardDataThumbnail } from 'store/filtersData/types';
import styles from "./ChangeCar.module.scss";

interface IChangeCar {
  categoryId: ICarDataCategoryId,
  colors: Array<string>,
  name: string,
  id: string,
  thumbnail: ICardDataThumbnail,
  description: string
}

const ChangeCar: React.FC<ICarData> = ({
  categoryId,
  colors,
  name,
  description,
  number,
  id,
  thumbnail
}) => {

  return (
    <div className={styles.wrapper}>
      <ChangeCarWithThumbnail
        thumbnail={thumbnail}
        categoryId={categoryId}
        name={name}
        description={description}  
      />
      <ChangeCarSettings
        categoryId={categoryId}
        colors={colors}
        name={name}
      />
    </div>
  )
}

export default ChangeCar;