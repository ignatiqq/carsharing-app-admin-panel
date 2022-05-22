import CarInfoThumbnail from 'components/CarInfo/CarInfoThumbnail/CarInfoThumbnail';
import React from 'react';
import { ICarDataCategoryId, ICardDataThumbnail } from 'store/filtersData/types';

import styles from "./ChangeCarWithThumbnail.module.scss";

interface IChangeCarWithThumbnail {
  thumbnail: ICardDataThumbnail
  categoryId: ICarDataCategoryId,
  name: string,
  description: string
}

const ChangeCarWithThumbnail: React.FC<IChangeCarWithThumbnail> = ({
  thumbnail,
  categoryId,
  name,
  description
}) => {
  return (
    <div className={styles.wrapper}>
      <CarInfoThumbnail
        image={thumbnail && thumbnail.path}
        name={name}
        category={categoryId && categoryId.name}
      />
      <div>

      </div>
      <div>

      </div>
    </div>
  )
}

export default ChangeCarWithThumbnail;