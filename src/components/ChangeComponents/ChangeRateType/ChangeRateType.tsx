import React, { ChangeEvent, useState, useEffect } from 'react';

import type { IRateTypeInfoItem } from 'store/tableData/types';
import { StandartInput } from "components";
import styles from "./ChangeRateType.module.scss";

interface IChangeCity {
    onChangeHandler: (data: Partial<IRateTypeInfoItem>) => void,
    onDeleteHandler: () => void,
    data: IRateTypeInfoItem
}


const ChangeRateType: React.FC<IChangeCity> = ({
    onChangeHandler,
    onDeleteHandler,
    data
}) => {

    const [dataToChange, setDataToChange] = useState<Partial<IRateTypeInfoItem>>({});

    useEffect(() => {
        if(data && Object.keys(dataToChange).length <= 0) {
          setDataToChange(data)
        }
    }, [data]);

    const changeUnitHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDataToChange((prev) => {
          return {
            ...prev,
            unit: e.target.value
          }
        })
    }

    const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDataToChange((prev) => {
          return {
            ...prev,
            name: e.target.value
          }
        })
    }

  return (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>Настройки тарифа</h2>
        <div className={styles.settings__wrapper}>
            <StandartInput 
                name="unit"
                id={dataToChange.id}
                placeholder="Введите меру времени"
                label='Мера времени'
                onChange={changeUnitHandler}
                value={dataToChange.unit}
                wrapperClassname={styles.settings__customInput}
            />
            <StandartInput 
                name="name"
                id={dataToChange.id}
                placeholder="Введите название тарифа"
                label='Название тарифа'
                onChange={changeUnitHandler}
                value={dataToChange.name}
                wrapperClassname={styles.settings__customInput}
            />
        </div>
    </div>
  )
}

export default ChangeRateType;