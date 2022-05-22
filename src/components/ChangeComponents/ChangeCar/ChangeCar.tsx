import React, { useEffect, useState } from 'react';

import { ChangeCarWithThumbnail, ChangeCarSettings } from 'components';
import { ICarData } from 'store/filtersData/types';
import { getPercentByDataComplete } from 'utils/essentialDataHelper';
import styles from "./ChangeCar.module.scss";

const ChangeCar: React.FC<ICarData> = (props) => {
  const [percentCompleted, setPercentCompleted] = useState<number>(0);

  useEffect(() => {
    if(props) {
      setPercentCompleted(getPercentByDataComplete(props));
    }
  }, [props])

  console.log(percentCompleted)

  return (
    <div className={styles.wrapper}>
      <ChangeCarWithThumbnail
        thumbnail={props.thumbnail}
        categoryId={props.categoryId}
        name={props.name}
        description={props.description}  
        percentCompleted={percentCompleted}
      />
      <ChangeCarSettings
        categoryId={props.categoryId}
        colors={props.colors}
        name={props.name}
      />
    </div>
  )
}

export default ChangeCar;