import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import type { IOrderData } from 'store/tableData/types';
import { Loader, StandartInput } from "components";
import styles from "./ChangeOrder.module.scss";
import EssenseOptionsFooter from 'components/EssenseOptionsFooter/EssenseOptionsFooter';
import { essenceValidations } from 'constants/Validations/validations';
import useValidate from 'packages/useValidate/useValidate';
import { formatDate } from 'utils/dateFormatter';
import { useAppSelector } from 'store';
import Select from 'components/Dumb/Select/Select';
import { ICurrentPoint, IOrderStatusItem } from 'store/filtersData/types';

interface IChangeOrder {
    submitEssenceHandler: (data: IOrderData) => void,
    onDeleteHandler: () => void,
    data: IOrderData,
}


const ChangeOrder: React.FC<IChangeOrder> = ({
    submitEssenceHandler,
    onDeleteHandler,
    data,
}) => {

    const [dataToChange, setDataToChange] = useState<IOrderData>(data);

    const { cities, points, orderStatuses } = useAppSelector(({filtersData}) => ({
        cities: filtersData.city.data,
        points: filtersData.point.data,
        orderStatuses: filtersData.orderStatus.data
    }))

    const navigation = useNavigate();

    const changeOrderStatusHandler = (data: IOrderStatusItem) => {
      setDataToChange((prev) => {
        return {
          ...prev,
          orderStatusId: data
        }
      })
    }

    const changePointHandler = (data: ICurrentPoint) => {
      setDataToChange((prev) => {
        return {
          ...prev,
          pointId: data
        }
      })
    }

    const changeByKeyHandler = (e: ChangeEvent<HTMLInputElement>) => {
        handleChange(e);
        setDataToChange((prev) => {
          return {
            ...prev,
            [e.target.name]: e.target.value
          }
        })
    }

    const changeCarNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
      handleChange(e);
      setDataToChange((prev: any) => {
        return {
          ...prev,
          carId: {
            ...prev.carId,
            name: e.target.value
          }
        }
      })
    }

    const onSubmitOrder = () => {
      submitEssenceHandler(dataToChange);
    }

    const onDeleteOrder = () => {
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
      handleChange,
    } = useValidate({
      formFields: {
          color: dataToChange.color, 
          price: dataToChange.price,
          dateFrom: dataToChange.dateFrom ? dataToChange.dateFrom : Date.now(),
          dateTo: dataToChange.dateTo ? dataToChange.dateTo : Date.now()
    }, 
      validations: {
          color: essenceValidations.name, 
          price: essenceValidations.price,
          dateFrom: essenceValidations.name,
          dateTo: essenceValidations.name
      }, 
      onSubmit: onSubmitOrder
    });

    const dateFormat = "yyyy-MM-dd\'T\'HH:mm";

    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>?????????????????? ????????????</h2>
        <div className={styles.settings__wrapper}>
          <div className={styles.inputWrapper}>
            <StandartInput
              name="name"
              id={dataToChange.id}
              placeholder="?????????????? ?????????? ????????????????????"
              label="??????????"
              onChange={changeCarNameHandler}
              onBlur={handleBlur}
              onFocus={handleFocus}
              value={dataToChange.carId?.name}
              wrapperClassname={styles.settings__customInput}
            />
            <div className={classNames('error-text', styles.inputWrapper__error)}>
              {errors.color}
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <StandartInput
              name="color"
              id={dataToChange.id}
              placeholder="?????????????? ???????? ????????????????????"
              label="????????"
              onChange={changeByKeyHandler}
              onBlur={handleBlur}
              onFocus={handleFocus}
              value={dataToChange.color}
              wrapperClassname={styles.settings__customInput}
            />
            <div className={classNames('error-text', styles.inputWrapper__error)}>
              {errors.color}
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <StandartInput
              name="price"
              id={dataToChange.id}
              placeholder="?????????????? ???????? ????????????"
              label="???????? ????????????"
              onChange={changeByKeyHandler}
              onBlur={handleBlur}
              onFocus={handleFocus}
              value={dataToChange.price}
              wrapperClassname={styles.settings__customInput}
            />
            <div className={classNames('error-text', styles.inputWrapper__error)}>
              {errors.price}
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <StandartInput
              name="dateFrom"
              type="datetime-local"
              id={dataToChange.id}
              placeholder="?????????????? ???????? ????????????"
              label="???????? ????????????"
              onChange={changeByKeyHandler}
              onBlur={handleBlur}
              onFocus={handleFocus}
              value={
                dataToChange.dateFrom
                  ? formatDate(new Date(dataToChange.dateFrom), dateFormat)
                  : formatDate(new Date(), dateFormat)
              }
              wrapperClassname={styles.settings__customInput}
            />
            <div className={classNames('error-text', styles.inputWrapper__error)}>
              {errors.dateFrom}
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <StandartInput
              name="dateTo"
              type="datetime-local"
              id={dataToChange.id}
              placeholder="?????????????? ???????? ??????????????????"
              label="???????? ??????????????????"
              onChange={changeByKeyHandler}
              onBlur={handleBlur}
              onFocus={handleFocus}
              value={
                dataToChange.dateTo
                  ? formatDate(new Date(dataToChange.dateTo), dateFormat)
                  : formatDate(new Date(), dateFormat)
              }
              wrapperClassname={styles.settings__customInput}
            />
            <div className={classNames('error-text', styles.inputWrapper__error)}>
              {errors.dateTo}
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>
              <label htmlFor="city" className={styles.label__text}>
                ???????????????? ??????????
              </label>
              <Select
                id="city"
                options={cities}
                selected={dataToChange.cityId}
                clickHandler={(data) => console.log(data)}
                customLabel="name"
                customValue="id"
                dataHolder={<Loader />}
                searchPlaceholder="??????????"
              />
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>
              <label htmlFor="city" className={styles.label__text}>
                ???????????????? ??????????
              </label>
              <Select
                id="point"
                options={points}
                selected={dataToChange.pointId}
                clickHandler={changePointHandler}
                customLabel="address"
                customValue="id"
                dataHolder={<Loader />}
                searchPlaceholder="??????????"
              />
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>
              <label htmlFor="city" className={styles.label__text}>
                ???????????????? ???????????? ????????????
              </label>
              <Select
                id="orderStatus"
                options={orderStatuses && orderStatuses?.data}
                selected={dataToChange.orderStatusId}
                clickHandler={changeOrderStatusHandler}
                customLabel="name"
                customValue="id"
                dataHolder={<Loader />}
                searchPlaceholder="???????????? ????????????"
              />
            </div>
          </div>
        </div>
        <EssenseOptionsFooter onApply={handleSubmit} onDelete={onDeleteOrder} onCancel={onGoBack} />
      </div>
    );
}

export default ChangeOrder;