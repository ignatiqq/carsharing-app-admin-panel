import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import type { IRateTypeInfoItem } from 'store/tableData/types';
import { StandartInput } from "components";
import styles from "./ChangeRateType.module.scss";
import EssenseOptionsFooter from 'components/EssenseOptionsFooter/EssenseOptionsFooter';
import { essenceValidations } from 'constants/Validations/validations';
import useValidate from 'packages/useValidate/useValidate';

interface IChangeCity {
    onChangeHandler: (data: IRateTypeInfoItem) => void,
    onDeleteHandler: () => void,
    data: IRateTypeInfoItem
}


const ChangeRateType: React.FC<IChangeCity> = ({
    onChangeHandler,
    onDeleteHandler,
    data
}) => {

    const [dataToChange, setDataToChange] = useState<IRateTypeInfoItem>(data);

    const navigation = useNavigate();

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

    const onChangeRateType = () => {
      onChangeHandler(dataToChange);
    }

    const onDeleteRateType = () => {
      onDeleteHandler();
    }

    const onGoBack = () => {
      navigation(-1);
    }

    const { 
      handleBlur, 
      errors,
      handleSubmit,
      handleFocus,
    } = useValidate({
      formFields: {name: dataToChange.name, unit: dataToChange.name}, 
      validations: {name: essenceValidations.name, unit: essenceValidations.name}, 
      onSubmit: onChangeRateType
    });

    return (
      <div className={styles.wrapper}>
          <h2 className={styles.title}>Настройки тарифа</h2>
          <div className={styles.settings__wrapper}>
            <div className={styles.inputWrapper}>
                <StandartInput 
                    name="unit"
                    id={dataToChange.id}
                    placeholder="Введите меру времени"
                    label='Мера времени'
                    onChange={changeUnitHandler}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    value={dataToChange.unit}
                    wrapperClassname={styles.settings__customInput}
                />
                <div className={classNames('error-text', styles.inputWrapper__error)}>{errors.unit}</div>
              </div>
              <div className={styles.inputWrapper}>
                <StandartInput 
                    name="name"
                    id={dataToChange.id}
                    placeholder="Введите название тарифа"
                    label='Название тарифа'
                    onChange={changeNameHandler}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    value={dataToChange.name}
                    wrapperClassname={styles.settings__customInput}
                />
                <div className={classNames('error-text', styles.inputWrapper__error)}>{errors.name}</div>
              </div>
          </div>
          <EssenseOptionsFooter 
            onApply={handleSubmit}
            onDelete={onDeleteRateType}
            onCancel={onGoBack}
          />
      </div>
    )
}

export default ChangeRateType;