import React, { useEffect, useState, ChangeEvent } from 'react';

import { ChangeCarWithThumbnail, ChangeCarSettings } from 'components';
import { ICarData, ICarDataCategoryId } from 'store/filtersData/types';
import { getPercentByDataComplete } from 'utils/essentialDataHelper';
import styles from "./ChangeCar.module.scss";
import { useAppSelector } from 'store';

const ChangeCar: React.FC<ICarData> = (props) => {
  const [percentCompleted, setPercentCompleted] = useState<number>(0);
  const [dataToChange, setDataToChange] = useState<Partial<ICarData>>({});

  const { carCategories } = useAppSelector(({ filtersData }) => ({
    carCategories: filtersData.carCategories
  }))

  useEffect(() => {
    if(props) {
      setPercentCompleted(getPercentByDataComplete(props));
      setDataToChange(props)
    }
  }, [props]);

  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDataToChange((prev) => {
      return {
        ...prev,
        name: e.target.value 
      }
    })
  }

  const changeCarCategoryHandler = (categoryId: ICarDataCategoryId) => {
    setDataToChange((prev) => {
      return {
        ...prev,
        categoryId
      }
    })
  }

  const changeCarColorsHandler = (colors: Array<string>) => {
    setDataToChange((prev)=> {
      return {
        ...prev,
        colors
      }
    })
  }

  return (
    <div className={styles.wrapper}>
      <ChangeCarWithThumbnail
        thumbnail={dataToChange?.thumbnail}
        categoryId={dataToChange?.categoryId}
        name={dataToChange?.name}
        description={dataToChange?.description}  
        percentCompleted={percentCompleted}
      />
      <ChangeCarSettings
        categoryId={dataToChange?.categoryId}
        colors={dataToChange?.colors}
        name={dataToChange?.name}
        carCategories={carCategories}
        changeCarCategoryHandler={changeCarCategoryHandler}
        changeNameHandler={changeNameHandler}
        changeCarColorsHandler={changeCarColorsHandler}
      />
    </div>
  )
}

export default ChangeCar;