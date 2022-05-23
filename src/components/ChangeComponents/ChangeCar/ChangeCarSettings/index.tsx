import React, { ChangeEvent, memo, useEffect, useState } from 'react';

import { ReactComponent as PlusIcon } from "assets/icons/plus.svg";
import {Button, Checkbox, StandartInput, Select} from 'components';
import { IAllCarCategories, ICarDataCategoryId } from 'store/filtersData/types';
import styles from "./ChangeCarSettings.module.scss";

interface IChangeCarSettings {
  categoryId?: ICarDataCategoryId
  colors?: Array<string>,
  name?: string,
  carCategories: IAllCarCategories,
  changeCarCategoryHandler: (categoryId: ICarDataCategoryId) => void,
  changeNameHandler: (e: ChangeEvent<HTMLInputElement>) => void,
  changeCarColorsHandler: (colors: Array<string>) => void
}

const ChangeCarSettings: React.FC<IChangeCarSettings> = ({
  categoryId,
  colors,
  name,
  carCategories,
  changeCarCategoryHandler,
  changeNameHandler
}) => {
  const [allColors, setAllColors] = useState<Array<string>>([]);
  const [colorInput, setColorInput] = useState<string>("");

  useEffect(() => {
    if(colors && colors.length > 0) {
      setAllColors(colors);
    }
  }, [colors])

  const addColorHandler = (color: string) => {
      setAllColors((prev) => [...prev, color] );
      setColorInput("");
  }

  const setColorInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setColorInput(e.target.value);
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
              value={name}
              placeholder='Введите модель автомобиля'
              onChange={changeNameHandler}
            />
          </label>
          <label className={styles.label}>
           { carCategories.data &&
            <>
              <div className={styles.label__text}>
                Тип автомобиля
              </div>
              <Select 
                options={carCategories?.data}
                selected={categoryId}
                clickHandler={changeCarCategoryHandler}
                customLabel="name"
                customValue="id"
                className={styles.categorySelect}
              />
            </>
          }
          </label>
          <div>
            <div className={styles.label__wrapper}>
              <label htmlFor='color-input'>
                <div className={styles.label__text}>
                  Доступные цвета
                </div>
              </label>
              <div className={styles.label__withButton}>
                <StandartInput
                    name="color"
                    value={colorInput}
                    onChange={setColorInputHandler}
                    placeholder='Введите цвет'
                    id="color-input"
                    className={styles.fullInput}
                  />
                <Button 
                  onClick={() => addColorHandler(colorInput)}
                  className={styles.label__button_add}
                >
                  <PlusIcon />
                </Button>
                </div>    
            </div>       
            <div className={styles.colorsWrapper}>
              {
                allColors && colors &&
                allColors.map(item => (
                  <Checkbox
                    label={item}
                    value={item}
                    id={item}
                    name={item}
                    selected={colors?.includes(item)}
                    onChange={(data) => alert(data)}
                    customCheckboxStyles={styles.color__checkbox}
                    customLabelStyles={styles.color__label}
                  />
                ))
              }
            </div>
          </div> 
        </div>
      </div>
  )
}

export default memo(ChangeCarSettings);