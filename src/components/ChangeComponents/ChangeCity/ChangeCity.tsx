import React, { useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom';

import { EssenseActions } from 'store/changeEssence/types';
import StandartInput from 'components/Dumb/Inputs/StandartInput/StandartInput';
import EssenseOptionsFooter from 'components/EssenseOptionsFooter/EssenseOptionsFooter';
import {  ICurrentCity } from 'store/filtersData/types';
import styles from "./ChangeCity.module.scss";

interface IChangeCity {
    onChangeHandler: (data: ICurrentCity) => void,
    onDeleteHandler: (data: string) => void,
    data: ICurrentCity,
}

const ChangeCity: React.FC<IChangeCity> = ({
    onChangeHandler,
    onDeleteHandler,
    data
}) => {
    const [dataToChange, setDataToChange] = useState<ICurrentCity>(data);

    const navigation = useNavigate();

    const changeCityNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const prev = {...dataToChange};
        setDataToChange({
          ...prev,
          name: e.target.value
        })
    }

    const onChangeCity = () => {
      onChangeHandler(dataToChange)
    }
    const onDeleteCity = () => {
      onDeleteHandler(dataToChange.id);
    }
  
    const goBackHandler = () => {
      navigation(-1)
    }

    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Настройки тарифа</h2>
        <div className={styles.settings__wrapper}>
          <StandartInput
            name="city"
            id={dataToChange?.id}
            placeholder="Введите название города"
            label="Название города"
            onChange={changeCityNameHandler}
            value={dataToChange?.name}
            wrapperClassname={styles.settings__customInput}
          />
        </div>
        <EssenseOptionsFooter
          onApply={onChangeCity}
          onDelete={onDeleteCity}
          onCancel={goBackHandler}
        />
      </div>
    );
}

export default ChangeCity