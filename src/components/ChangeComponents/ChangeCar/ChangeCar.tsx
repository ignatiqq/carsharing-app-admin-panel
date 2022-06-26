import React, { useEffect, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import ChangeCarWithThumbnail from './ChangeCarWithThumbnail';
import ChangeCarSettings from './ChangeCarSettings';
import { ICarData, ICarDataCategoryId, ICardDataThumbnail } from 'store/filtersData/types';
import { getPercentByDataComplete } from 'utils/essentialDataHelper';
import styles from "./ChangeCar.module.scss";
import { useAppSelector } from 'store';
import { EssenseActions } from 'store/changeEssence/types';
import { essenceValidations } from 'constants/Validations/validations';
import useValidate from 'packages/useValidate/useValidate';
import { changeCarEmptyData } from "constants/changeEssense";
import Loader from 'components/Dumb/Loader/Loader';

interface IChangeCar {
  submitHandler: (data: ICarData) => void,
  onDeleteHandler: () => void,
  data: ICarData,
  action: EssenseActions
}

const ChangeCar: React.FC<IChangeCar> = ({
  submitHandler,
  onDeleteHandler,
  data,
}) => {
  const [percentCompleted, setPercentCompleted] = useState<number>(0);
  const [dataToChange, setDataToChange] = useState<ICarData>({...changeCarEmptyData});

  const { carCategories } = useAppSelector(({ filtersData }) => ({
    carCategories: filtersData.carCategories
  }))

  const navigation = useNavigate();
  
  useEffect(() => {
    if(data === null) {
      setDataToChange({...changeCarEmptyData})
    } else {
      setDataToChange(data)
    }
  }, [data])

  useEffect(() => {
    if(dataToChange){
      setPercentCompleted(getPercentByDataComplete(dataToChange));
    }
  }, [dataToChange])
  
  const changeByKeyHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const isChangebleDataNumber = !isNaN(parseInt(e.target.value));
     setDataToChange((prev) => {
      return {
        ...prev,
        [e.target.name]: isChangebleDataNumber ? parseInt(e.target.value) : e.target.value
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

  const changeImageHandler = (data: ICardDataThumbnail) => {
    setDataToChange((prev) => {
      return {
        ...prev,
        thumbnail: data
      }
    })
  }

  const onSubmitCarHandler = () => {
    submitHandler(dataToChange)
  }

  const goBackHandler = () => {
    navigation(-1)
  }

  const validation = useValidate({
    formFields: {
      name: dataToChange.name,
      number: dataToChange.number,
      priceMax: dataToChange.priceMax,
      priceMin: dataToChange.priceMin,
      description: dataToChange.description,
      tank: dataToChange.tank,
      path: dataToChange.thumbnail?.path,
    }, 
    validations: {
      name: essenceValidations.name,
      number: essenceValidations.number,
      priceMax: essenceValidations.price,
      priceMin: essenceValidations.price,
      description: essenceValidations.description,
      tank: essenceValidations.tank,
      path: essenceValidations.name
    }, 
    onSubmit: onSubmitCarHandler
  });

  return (
    <div className={styles.wrapper}>
      <ChangeCarWithThumbnail
        thumbnail={dataToChange.thumbnail}
        categoryId={dataToChange.categoryId}
        name={dataToChange.name}
        description={dataToChange.description}  
        percentCompleted={percentCompleted}
        changeImageHandler={changeImageHandler}
        validation={validation}
      />
      <ChangeCarSettings
        dataToChange={dataToChange}
        carCategories={carCategories}
        changeCarCategoryHandler={changeCarCategoryHandler}
        changeCarColorsHandler={changeCarColorsHandler}
        changeByKeyHandler={changeByKeyHandler}
        onSubmitCarHandler={onSubmitCarHandler}
        goBackHandler={goBackHandler}
        onDeleteHandler={onDeleteHandler}
        validation={validation}
      />
    </div>
  )
}

export default ChangeCar;