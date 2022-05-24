import React, { useEffect, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChangeCarWithThumbnail, ChangeCarSettings } from 'components';
import { ICarData, ICarDataCategoryId, ICardDataThumbnail } from 'store/filtersData/types';
import { getPercentByDataComplete } from 'utils/essentialDataHelper';
import styles from "./ChangeCar.module.scss";
import { useAppSelector } from 'store';

interface IChangeCar extends ICarData {
  onChangeHandler: (data: Partial<ICarData>) => void,
  onDeleteHandler: () => void
}

const ChangeCar: React.FC<IChangeCar> = ({
  onChangeHandler,
  thumbnail,
  categoryId,
  colors,
  createdAt,
  description,
  id,
  name,
  number,
  priceMax,
  priceMin,
  updatedAt,
  onDeleteHandler
}) => {
  const [percentCompleted, setPercentCompleted] = useState<number>(0);
  const [dataToChange, setDataToChange] = useState<Partial<ICarData>>({});

  const carData = {
    thumbnail,
    categoryId,
    colors,
    createdAt,
    description,
    id,
    name,
    number,
    priceMax,
    priceMin,
    updatedAt
  }

  const { carCategories } = useAppSelector(({ filtersData }) => ({
    carCategories: filtersData.carCategories
  }))

  const navigation = useNavigate();

  useEffect(() => {
    if(carData && Object.keys(dataToChange).length <= 0) {
      setDataToChange(carData)
    }
  }, [carData]);
  
  useEffect(() => {
    if(dataToChange){
      setPercentCompleted(getPercentByDataComplete(dataToChange));
    }
  }, [dataToChange])
  
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
        categoryId: {
          description: categoryId.description,
          id: categoryId.id,
          name: categoryId.name
        }
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

  const changeCarDescriptionHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDataToChange((prev) => {
      return {
        ...prev,
        description: e.target.value
      }
    })
  }

  const changeImageHandler = (data: ICardDataThumbnail) => {
    setDataToChange((prev) => {
      return {
        ...prev,
        thumbnail: data
      }
    })
  }

  const sendChangedCar = () => {
    onChangeHandler(dataToChange)
  }

  const goBackHandler = () => {
    navigation(-1)
  }

  return (
    <div className={styles.wrapper}>
      <ChangeCarWithThumbnail
        thumbnail={dataToChange?.thumbnail}
        categoryId={dataToChange?.categoryId}
        name={dataToChange?.name}
        description={dataToChange?.description}  
        percentCompleted={percentCompleted}
        changeImageHandler={changeImageHandler}
      />
      <ChangeCarSettings
        categoryId={dataToChange?.categoryId}
        colors={dataToChange?.colors}
        name={dataToChange?.name}
        carCategories={carCategories}
        description={dataToChange?.description}
        changeCarCategoryHandler={changeCarCategoryHandler}
        changeNameHandler={changeNameHandler}
        changeCarColorsHandler={changeCarColorsHandler}
        changeCarDescriptionHandler={changeCarDescriptionHandler}
        sendChangedCar={sendChangedCar}
        goBackHandler={goBackHandler}
        onDeleteHandler={onDeleteHandler}
      />
    </div>
  )
}

export default ChangeCar;