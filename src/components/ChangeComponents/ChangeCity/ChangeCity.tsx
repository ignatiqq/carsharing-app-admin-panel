import React, { useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom';

import StandartInput from 'components/Dumb/Inputs/StandartInput/StandartInput';
import EssenseOptionsFooter from 'components/EssenseOptionsFooter/EssenseOptionsFooter';
import {  ICurrentCity } from 'store/filtersData/types';
import styles from "./ChangeCity.module.scss";
import { essenceValidations } from 'constants/Validations/validations';
import useValidate from 'packages/useValidate/useValidate';
import classNames from 'classnames';
import { EssenseActions } from 'store/changeEssence/types';
import { isValid } from 'date-fns';

interface IChangeCity {
  submitEssenceHandler: (data: ICurrentCity) => void,
  onDeleteHandler: (data: string) => void,
  data: ICurrentCity,
  action: EssenseActions
}

const ChangeCity: React.FC<IChangeCity> = ({
    submitEssenceHandler,
    onDeleteHandler,
    data,
    action
}) => {
    const [dataToChange, setDataToChange] = useState<ICurrentCity>(data);

    const navigation = useNavigate();

    const onSubmitCityHandler = () => {
      submitEssenceHandler(dataToChange)
    }
    const onDeleteCity = () => {
      onDeleteHandler(dataToChange.id);
    }
  
    const goBackHandler = () => {
      navigation(-1)
    }

    const { 
      handleBlur, 
      errors,
      handleSubmit,
      handleFocus,
      handleChange,
      isValid
    } = useValidate({
      formFields: {name: dataToChange.name}, 
      validations: {name: essenceValidations.name}, 
      onSubmit: onSubmitCityHandler
    });

    const changeCityNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
      handleChange(e);
      const prev = { ...dataToChange };
      setDataToChange({
        ...prev,
        name: e.target.value,
      });
    }
 
    const essenseFooterText = action === EssenseActions.CHANGE ? "Сохранить" : "Создать";

    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Настройки тарифа</h2>
        <div className={styles.settings__wrapper}>
          <div className={styles.inputWrapper}>
            <div>
              <StandartInput
                name="name"
                id={dataToChange?.id}
                placeholder="Введите название города"
                label="Название города"
                onChange={changeCityNameHandler}
                value={dataToChange?.name}
                onBlur={handleBlur}
                onFocus={handleFocus}
                wrapperClassname={styles.settings__customInput}
              />
              <div className={classNames('error-text', styles.inputWrapper__error)}>{errors.name}</div>
            </div>
          </div>
        </div>
        <EssenseOptionsFooter
          onApply={handleSubmit}
          onDelete={onDeleteCity}
          onCancel={goBackHandler}
          applyText={essenseFooterText}
        />
      </div>
    );
}

export default ChangeCity