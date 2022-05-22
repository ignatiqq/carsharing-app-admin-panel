import StandartInput from 'components/Dumb/Inputs/StandartInput/StandartInput';
import React, { ChangeEvent, memo, useEffect, useState } from 'react';

import { ICarDataCategoryId } from 'store/filtersData/types';
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

  const [inputName, setInputName] = useState<string>("");
  const [inputCategory, setInputCategory] = useState<string>("");

  useEffect(() => {
    if(categoryId) {
      setInputCategory(categoryId.name);
    }
    if(name) {
      setInputName(name);
    }
    if(colors) {

    }
  }, [categoryId, colors, name])

  const changeInputNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  }

  const changeInputCategoryHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputCategory(e.target.value);
  }

  return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>Настройки автомобиля</h2>
        </div>
        <div className={styles.settingsWrapper}>
          <label className={styles.label}>
            <div className={styles.label__text}>
              Модель автомобиля
            </div>
            <StandartInput
              name="model"
              value={inputName}
              placeholder='Введите модель автомобиля'
              onChange={changeInputNameHandler}
            />
          </label>
          <label className={styles.label}>
            <div className={styles.label__text}>
              Тип автомобиля
            </div>
            <StandartInput
              name="model"
              value={inputCategory}
              placeholder='Введите тип автомобиля'
              onChange={changeInputCategoryHandler}
            />
          </label>
          <div>
            <label className={styles.label}>
              <div className={styles.label__text}>
                Доступные цвета
              </div>
              <StandartInput
                name="model"
                value=""
                placeholder='Введите цвет'
              />
            </label>
          </div> 
        </div>
      </div>
  )
}

export default memo(ChangeCarSettings);