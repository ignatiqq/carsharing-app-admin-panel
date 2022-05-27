import React, { useState, useEffect, ChangeEvent } from 'react'

import StandartInput from 'components/Dumb/Inputs/StandartInput/StandartInput';
import styles from "./ChangePoint.module.scss";
import { ICurrentPoint } from 'store/filtersData/types';

interface IChangePoint {
    onChangeHandler: (data: Partial<ICurrentPoint>) => void,
    onDeleteHandler: () => void,
    data: ICurrentPoint
}

const ChangePoint: React.FC<IChangePoint> = ({
    data,
    onChangeHandler,
    onDeleteHandler
}) => {
    const [dataToChange, setDataToChange] = useState<Partial<ICurrentPoint>>({});

    useEffect(() => {
        if(data && Object.keys(dataToChange).length <= 0) {
          setDataToChange(data)
        }
    }, [data]);

    const changePointAddressHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDataToChange((prev) => {
          return {
            ...prev,
            address: e.target.value
          }
        })
    }

    const changePointNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
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
            name="adress"
            id={dataToChange.id}
            placeholder="Введите адрес точки"
            label="Адрес точки"
            onChange={changePointAddressHandler}
            value={dataToChange.address}
            wrapperClassname={styles.settings__customInput}
          />
          <StandartInput
            name="point"
            id={dataToChange.id}
            placeholder="Введите название точки"
            label="Название точки"
            onChange={changePointNameHandler}
            value={dataToChange.name}
            wrapperClassname={styles.settings__customInput}
          />
        </div>
      </div>
    );
}

export default ChangePoint;
