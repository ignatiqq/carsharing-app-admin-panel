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
  description?: string,
  changeCarCategoryHandler: (categoryId: ICarDataCategoryId) => void,
  changeNameHandler: (e: ChangeEvent<HTMLInputElement>) => void,
  changeCarColorsHandler: (colors: Array<string>) => void,
  changeCarDescriptionHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const ChangeCarSettings: React.FC<IChangeCarSettings> = ({
  categoryId,
  colors,
  name,
  carCategories,
  changeCarCategoryHandler,
  changeNameHandler,
  changeCarColorsHandler,
  changeCarDescriptionHandler,
  description
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

  const deleteColorHandler = (data: string) => {
    const filteredColors = allColors.filter(item => item !== data);
    setAllColors(filteredColors);
  }

  useEffect(() => {
    changeCarColorsHandler(allColors);
  }, [allColors])

  return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>Настройки автомобиля</h2>
        </div>
        
        <div className={styles.settingsWrapper}>
          <StandartInput
            label="Модель автомобиля"
            name="model"
            value={name}
            placeholder='Введите модель автомобиля'
            onChange={changeNameHandler}
            id="model"
            wrapperClassname={styles.inputCustomWrapper}
          />
          <div className={styles.label}>
           { carCategories.data &&
            <>
              <label htmlFor="auto-type" className={styles.label__text}>
                Тип автомобиля
              </label>
              <Select 
                options={carCategories?.data}
                selected={categoryId}
                clickHandler={changeCarCategoryHandler}
                customLabel="name"
                customValue="id"
                className={styles.categorySelect}
                id="auto-type"
              />
            </>
          }
          </div>

          <StandartInput
            label="Описание автомобиля"
            name="model"
            value={description}
            placeholder='Введите описание автомобиля'
            id="model"
            onChange={changeCarDescriptionHandler}
            wrapperClassname={styles.inputCustomWrapper}
          />

          <div>
            <div className={styles.label__wrapper}>
              <div className={styles.label__withButton}>
                <StandartInput
                    name="color"
                    value={colorInput}
                    onChange={setColorInputHandler}
                    placeholder='Введите цвет'
                    id="color-input"
                    className={styles.fullInput}
                    label="Доступные цвета"
                    wrapperClassname={styles.inputCustomWrapper}
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
                    key={item}
                    label={item}
                    value={item}
                    id={item}
                    name={item}
                    selected={colors?.includes(item)}
                    onChange={deleteColorHandler}
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