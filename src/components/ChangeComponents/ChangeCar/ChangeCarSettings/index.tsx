import React, { ChangeEvent, memo, useEffect, useState } from 'react';

import { ReactComponent as PlusIcon } from "assets/icons/plus.svg";
import {Button, Checkbox, StandartInput, Select} from 'components';
import { IAllCarCategories, ICarData, ICarDataCategoryId } from 'store/filtersData/types';
import styles from "./ChangeCarSettings.module.scss";
import EssenseOptionsFooter from 'components/EssenseOptionsFooter/EssenseOptionsFooter';
import classNames from 'classnames';

interface IChangeCarSettings {
  dataToChange: ICarData,
  carCategories: IAllCarCategories,
  changeCarCategoryHandler: (categoryId: ICarDataCategoryId) => void,
  changeCarColorsHandler: (colors: Array<string>) => void,
  changeByKeyHandler: (data: ChangeEvent<HTMLInputElement>) => void,
  onSubmitCarHandler: () => void,
  goBackHandler: () => void,
  onDeleteHandler: () => void,
  validation: {[key: string]: any}
}

const ChangeCarSettings: React.FC<IChangeCarSettings> = ({
  dataToChange,
  carCategories,
  changeCarCategoryHandler,
  changeCarColorsHandler,
  changeByKeyHandler,
  onSubmitCarHandler,
  goBackHandler,
  onDeleteHandler,
  validation
}) => {
  const [allColors, setAllColors] = useState<Array<string>>([]);
  const [colorInput, setColorInput] = useState<string>("");

  useEffect(() => {
    if(dataToChange.colors && dataToChange.colors.length > 0) {
      setAllColors(dataToChange.colors);
    }
  }, [dataToChange.colors])

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
  
  const changeByKeyWithValidation = (e: ChangeEvent<HTMLInputElement>) => {
    validation.handleChange(e);
    changeByKeyHandler(e);
  }

  useEffect(() => {
    changeCarColorsHandler(allColors);
  }, [allColors])

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__settings}>
        <div className={styles.header}>
          <h2>?????????????????? ????????????????????</h2>
        </div>
        <div className={styles.settingsWrapper}>
          <div className={styles.settingsWrapper__inputWrapper}>
            <StandartInput
              label="???????????? ????????????????????"
              name="name"
              value={dataToChange.name}
              placeholder="?????????????? ???????????? ????????????????????"
              onChange={changeByKeyWithValidation}
              id="name"
              onBlur={validation.handleBlur}
              onFocus={validation.handleFocus}
              wrapperClassname={styles.inputCustomWrapper}
            />
            <div className={classNames('error-text', styles.inputWrapper__error)}>
              {validation.errors.name}
            </div>
          </div>
          {carCategories.data && (
            <div className={styles.label}>
              <label htmlFor="auto-type" className={styles.label__text}>
                ?????? ????????????????????
              </label>
              <Select
                options={carCategories?.data}
                selected={dataToChange.categoryId}
                clickHandler={changeCarCategoryHandler}
                customLabel="name"
                customValue="id"
                className={styles.categorySelect}
                searchPlaceholder="?????? ????????????????????"
                id="auto-type"
              />
            </div>
          )}
          <div className={styles.settingsWrapper__inputWrapper}>
            <StandartInput
              label="???????????????? ????????????????????"
              name="description"
              value={dataToChange.description}
              placeholder="?????????????? ???????????????? ????????????????????"
              id="description"
              onChange={changeByKeyWithValidation}
              onBlur={validation.handleBlur}
              onFocus={validation.handleFocus}
              wrapperClassname={styles.inputCustomWrapper}
            />
            <div className={classNames('error-text', styles.inputWrapper__error)}>
              {validation.errors.description}
            </div>
          </div>
          <div className={styles.settingsWrapper__inputWrapper}>
            <StandartInput
              label="?????????????????????? ????????"
              name="priceMin"
              type='number'
              value={dataToChange.priceMin}
              placeholder="?????????????? ?????????????????????? ????????"
              id="priceMin"
              onChange={changeByKeyWithValidation}
              onBlur={validation.handleBlur}
              onFocus={validation.handleFocus}
              wrapperClassname={styles.inputCustomWrapper}
            />
            <div className={classNames('error-text', styles.inputWrapper__error)}>
              {validation.errors.priceMin}
            </div>
          </div>
          <div className={styles.settingsWrapper__inputWrapper}>
            <StandartInput
              label="???????????????????????? ????????"
              name="priceMax"
              type="number"
              value={dataToChange.priceMax}
              placeholder="?????????????? ???????????????????????? ????????"
              id="priceMax"
              onChange={changeByKeyWithValidation}
              onBlur={validation.handleBlur}
              onFocus={validation.handleFocus}
              wrapperClassname={styles.inputCustomWrapper}
            />
            <div className={classNames('error-text', styles.inputWrapper__error)}>
              {validation.errors.priceMax}
            </div>
          </div>
          <div className={styles.settingsWrapper__inputWrapper}>
            <StandartInput
              label="?????????? ????????????????????"
              name="number"
              value={dataToChange.number}
              placeholder="?????????????? ?????????? ????????????????????"
              id="number"
              onChange={changeByKeyWithValidation}
              onBlur={validation.handleBlur}
              onFocus={validation.handleFocus}
              wrapperClassname={styles.inputCustomWrapper}
            />
            <div className={classNames('error-text', styles.inputWrapper__error)}>
              {validation.errors.number}
            </div>
          </div>
          <div className={styles.settingsWrapper__inputWrapper}>
            <StandartInput
              label="???????????????????? ??????????????"
              name="tank"
              type="number"
              value={dataToChange.tank}
              placeholder="?????????????? ???????????????????? ??????????????"
              id="tank"
              onChange={changeByKeyWithValidation}
              onBlur={validation.handleBlur}
              onFocus={validation.handleFocus}
              wrapperClassname={styles.inputCustomWrapper}
            />
            <div className={classNames('error-text', styles.inputWrapper__error)}>
              {validation.errors.tank}
            </div>
          </div>
          <div className={styles.colorSettings__wrapper}>
            <div className={styles.label__withButton}>
              <StandartInput
                name="color"
                value={colorInput}
                onChange={setColorInputHandler}
                placeholder="?????????????? ????????"
                id="color-input"
                className={styles.fullInput}
                label="?????????????????? ??????????"
                wrapperClassname={styles.colorsCustomWrapper}
              />
              <Button
                onClick={() => addColorHandler(colorInput)}
                className={styles.label__button_add}>
                <PlusIcon />
              </Button>
            </div>
            <div className={styles.colorsWrapper}>
              {allColors &&
                dataToChange.colors &&
                allColors.map((item) => (
                  <Checkbox
                    key={item}
                    label={item}
                    value={item}
                    id={item}
                    name={item}
                    selected={dataToChange.colors?.includes(item)}
                    onChange={deleteColorHandler}
                    customCheckboxStyles={styles.color__checkbox}
                    customLabelStyles={styles.color__label}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <EssenseOptionsFooter
        onApply={validation.handleSubmit}
        onCancel={goBackHandler}
        onDelete={onDeleteHandler}
      />
    </div>
  );
}

export default memo(ChangeCarSettings);