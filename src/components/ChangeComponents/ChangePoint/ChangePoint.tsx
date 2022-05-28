import React, { useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import {StandartInput,EssenseOptionsFooter} from 'components';
import styles from "./ChangePoint.module.scss";
import { ICurrentCity, ICurrentPoint } from 'store/filtersData/types';
import { essenceValidations } from 'constants/Validations/validations';
import useValidate from 'packages/useValidate/useValidate';
import { EssenseActions } from 'store/changeEssence/types';
import Select from 'components/Dumb/Select/Select';
import { useAppSelector } from 'store';
import Loader from 'components/Dumb/Loader/Loader';

interface IChangePoint {
    submitEssenceHandler: (data: Partial<ICurrentPoint>) => void,
    onDeleteHandler: () => void,
    data: ICurrentPoint,
    action: EssenseActions
}

const ChangePoint: React.FC<IChangePoint> = ({
    data,
    submitEssenceHandler,
    onDeleteHandler,
    action
}) => {
    const [dataToChange, setDataToChange] = useState<ICurrentPoint>(data);

    const navigation = useNavigate();

    const { allCities } = useAppSelector(({filtersData}) => ({
      allCities: filtersData.city.data
    }))

    const changePointAddressHandler = (e: ChangeEvent<HTMLInputElement>) => {
      handleChange(e);
        setDataToChange((prev) => {
          return {
            ...prev,
            address: e.target.value
          }
        })
    }

    const changePointNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
      handleChange(e);
        setDataToChange((prev) => {
          return {
            ...prev,
            name: e.target.value
          }
        })
    }

    const changeCityIdHandler = (data: ICurrentCity) => {
      setDataToChange((prev) => {
        return {
          ...prev,
          cityId: data
        }
      })
    }

    const onDeletePoint = () => {
      onDeleteHandler();
    }

    const onSubmitPointHandler = () =>{ 
      submitEssenceHandler(dataToChange);
    }

    const goBackHandler = () => {
      navigation(-1)
    }

    const { 
      handleBlur, 
      errors,
      handleSubmit,
      handleFocus,
      handleChange
    } = useValidate({
      formFields: {name: dataToChange.name, address: dataToChange.address}, 
      validations: {name: essenceValidations.name, address: essenceValidations.name}, 
      onSubmit: onSubmitPointHandler
    });

    const essenseFooterText = action === EssenseActions.CHANGE ? "Сохранить" : "Создать";

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
          <div className={styles.inputWrapper}>
            <label htmlFor="select-cityid" className={styles.label}>Выберите город</label> 
            <Select 
              id="select-cityid"
              options={allCities}
              selected={dataToChange.cityId}
              clickHandler={changeCityIdHandler}
              customLabel="name"
              customValue="id"
              dataHolder={<Loader />}
            />
          </div>
        </div>
        <EssenseOptionsFooter
          onApply={handleSubmit}
          onDelete={onDeletePoint}
          onCancel={goBackHandler}
          applyText={essenseFooterText}
        />
      </div>
    );
}

export default ChangePoint;
