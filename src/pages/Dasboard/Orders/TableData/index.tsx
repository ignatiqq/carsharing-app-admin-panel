import classNames from "classnames";

import styles from "../Orders.module.scss";
import CarComponentButtons from "./Buttons/CarComponentButtons";
import CarPlaceholder from "assets/images/CarPlaceholder.png";
import { formatDate } from 'utils/dateFormatter';
import type { IOrderDataInfo } from "store/tableData/types";
import type { OrderTableMappedData } from "../withOrderLogic";

export const head = [
    {
        name: "Фотография"
    },
    {
        name: "Информация"
    },
    {
        name: "Дополнительно"
    },
    {
        name: "Цена"
    },
    {
        name: "Настройки"
    }
]

export function orderMappedData(data :IOrderDataInfo | null): OrderTableMappedData  {
  const dateFormat = "dd.MM.yyyy hh:mm";

    if(data && data?.data) {
        return data.data.map(item => {
            return {
              image: (
                <div className={styles.mappedData__carImage_wrapper}>
                 <img
                  className={styles.mappedData__carImage}
                  src={
                    item?.carId?.thumbnail.path ? item?.carId?.thumbnail.path : CarPlaceholder
                  }
                  alt={item?.carId?.name}
                /> 
                </div>
              ),
              info: (
                <div>
                  <div>
                    <span className={styles.bold}>
                      {item?.carId?.name ? item.carId.name : 'Авто не указан'}
                    </span>{' '}
                    <span className={classNames(styles.light, styles.mappedData_gray)}>в </span>
                    <span className={styles.bold}>
                      {item.cityId?.name ? item.cityId?.name : ' Город не указан'}
                    </span>
                    <span className={styles.light}>, </span>
                    <span className={styles.mappedData_gray}>
                      {item.pointId?.name ? item.pointId.name : 'Место не указано'}
                    </span>
                  </div>
                  {item.dateFrom && item.dateTo && (
                    <div className={styles.mappedData__date}>
                      {formatDate(new Date(item.dateFrom), dateFormat)} -{' '}
                      {formatDate(new Date(item.dateTo), dateFormat)}
                    </div>
                  )}
                  <div className={styles.mappedData__color}>
                    Цвет: <span className={styles.bold}>{item.color && item.color}</span>
                  </div>
                </div>
              ),
              additionally: (
                <div className={styles.mappedData__additionally}>
                  {
                    <>
                      <div className={classNames(styles.additionally, {
                        [styles.additionally_active]: item.isFullTank
                      })}>
                        <div
                          className={classNames(styles.rectangle, {
                            [styles.rectangle__active]: item.isFullTank,
                          })}></div>
                        <div>Полный бак</div>
                      </div>
                      <div className={classNames(styles.additionally, {
                        [styles.additionally_active]: item.isNeedChildChair
                      })}>
                        <div
                          className={classNames(styles.rectangle, {
                            [styles.rectangle__active]: item.isNeedChildChair,
                          })}></div>
                        <div>Правый руль</div>
                      </div>
                      <div className={classNames(styles.additionally, {
                        [styles.additionally_active]: item.isRightWheel
                      })}>
                        <div
                          className={classNames(styles.rectangle, {
                            [styles.rectangle__active]: item.isRightWheel,
                          })}></div>
                        <div>Детское кресло</div>
                      </div>
                    </>
                  }
                </div>
              ),
              price: <div>{item.price}₽</div>,
              settings: <CarComponentButtons />,
            };
        })
    }
    return null;
}