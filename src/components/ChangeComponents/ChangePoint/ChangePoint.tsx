import React, { useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import {StandartInput,EssenseOptionsFooter} from 'components';
import styles from "./ChangePoint.module.scss";
import { ICurrentPoint } from 'store/filtersData/types';
import { essenceValidations } from 'constants/Validations/validations';
import useValidate from 'packages/useValidate/useValidate';

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
    const [dataToChange, setDataToChange] = useState<ICurrentPoint>(data);

    const navigation = useNavigate();

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

    const onDeletePoint = () => {
      onDeleteHandler();
    }

    const onChangePoint = () =>{ 
      onChangeHandler(dataToChange);
    }

    const goBackHandler = () => {
      navigation(-1)
    }

    const { 
      handleBlur, 
      errors,
      handleSubmit,
      handleFocus,
    } = useValidate({
      formFields: {name: dataToChange.name, address: dataToChange.address}, 
      validations: {name: essenceValidations.name, address: essenceValidations.name}, 
      onSubmit: onChangePoint
    });

    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Настройки тарифа</h2>
        <div className={styles.settings__wrapper}>
          <div className={styles.inputWrapper}>
            <StandartInput
              name="address"
              id={dataToChange.id}
              placeholder="Введите адрес точки"
              label="Адрес точки"
              onChange={changePointAddressHandler}
              value={dataToChange.address}
              onFocus={handleFocus}
              onBlur={handleBlur}
              wrapperClassname={styles.settings__customInput}
            />
            <div className={classNames('error-text', styles.inputWrapper__error)}>{errors.address}</div>
          </div>
          <div className={styles.inputWrapper}>
            <StandartInput
              name="name"
              id={dataToChange.id}
              placeholder="Введите название точки"
              label="Название точки"
              onChange={changePointNameHandler}
              value={dataToChange.name}
              onFocus={handleFocus}
              onBlur={handleBlur}
              wrapperClassname={styles.settings__customInput}
            />
            <div className={classNames('error-text', styles.inputWrapper__error)}>{errors.name}</div>
          </div>
        </div>
        <EssenseOptionsFooter
          onApply={handleSubmit}
          onDelete={onDeletePoint}
          onCancel={goBackHandler}
        />
      </div>
    );
}

export default ChangePoint;
