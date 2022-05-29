import React from 'react';

import { ICarDataCategoryId, ICardDataThumbnail } from 'store/filtersData/types';
import { Progress } from 'components';
import CarInfoThumbnail from 'components/CarInfo/CarInfoThumbnail/CarInfoThumbnail';
import styles from "./ChangeCarWithThumbnail.module.scss";
import classNames from 'classnames';

interface IChangeCarWithThumbnail {
  thumbnail?: ICardDataThumbnail 
  categoryId?: ICarDataCategoryId,
  name?: string,
  description?: string,
  percentCompleted?: number,
  changeImageHandler: (data: ICardDataThumbnail) => void,
  validation: {[key: string]: any}
}

const ChangeCarWithThumbnail: React.FC<IChangeCarWithThumbnail> = ({
  thumbnail,
  categoryId,
  name,
  description,
  percentCompleted,
  validation,
  changeImageHandler
}) => {
  return (
    <div className={styles.wrapper}>
      <CarInfoThumbnail
        image={thumbnail && thumbnail.path}
        name={name && name}
        category={categoryId && categoryId.name}
        className={styles.carInfoThumbnail}
        changeImageHandler={changeImageHandler}
        validation={validation}
      />
      <Progress
        title="Заполнено"
        value={percentCompleted}
        className={styles.progress}
      />
      <div className={classNames(styles.description)}>
        <div>Описание</div>
        <div className={styles.description__text}>{description && description}</div>
      </div>
    </div>
  )
}

export default ChangeCarWithThumbnail;