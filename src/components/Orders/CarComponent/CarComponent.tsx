import React from 'react'
import classNames from 'classnames';

import CarComponentButtons from './Buttons/CarComponentButtons';
import CarPlaceholder from "assets/images/CarPlaceholder.png";
import { formatDate } from 'utils/dateFormatter';
import type { IOrderData } from "store/tableData/types";
import styles from "./CarComponent.module.scss";

const CarComponent: React.FC<IOrderData> = ({
    carId,
    cityId, 
    color,
    dateFrom,
    dateTo,
    id,
    isFullTank,
    isNeedChildChair,
    isRightWheel,
    orderStatusId,
    pointId,
    price,
    rateId,
}) => {
    const dateFormat = "dd.MM.yyyy hh:mm";
    return (
        <div className={styles.wrapper}>

            <div className={styles.car__info}>
                <div className={styles.car__image_wrapper}>
                    <img 
                        className={styles.car__image}
                        src={carId?.thumbnail.path ? carId?.thumbnail.path : CarPlaceholder} 
                        alt={carId?.name}
                    />
                </div>
                <div>
                    <div>
                        <span className={styles.bold}>{carId?.name ? carId?.name : "Авто"}</span> <span> в </span> 
                        <span className={styles.bold}>{cityId?.name ? cityId?.name : " Город"}</span><span>, </span>
                        <span className={styles.bold}>{pointId?.name ? pointId?.name : "Место"}</span>
                    </div>
                    {
                        dateFrom && dateTo &&
                        <div className={styles.car__date}>
                            {formatDate(new Date(dateFrom), dateFormat)} - {formatDate(new Date(dateTo), dateFormat
                            )}
                        </div>
                    }
                    <div className={styles.car__color}>
                        Цвет: <span className={styles.bold}>{color && color}</span>
                    </div>
                </div>
            </div>

            <div className={styles.car__additionally}>
                {
                    <>
                        <div className={styles.additionally}>
                            <div className={classNames(styles.rectangle, {
                                [styles.rectangle__active]: isFullTank
                            })}></div>
                            <div>Полный бак</div>
                        </div>
                        <div className={styles.additionally}>
                            <div className={classNames(styles.rectangle, {
                                [styles.rectangle__active]: isNeedChildChair
                            })}></div>
                            <div>Правый руль</div>
                        </div>
                        <div className={styles.additionally}>
                            <div className={classNames(styles.rectangle, {
                                [styles.rectangle__active]: isRightWheel
                            })}></div>
                            <div>Детское кресло</div>
                        </div>
                    </>
                }
            </div>

            <div className={styles.car__price__wrapper}>
                <div className={styles.car__price}>{price && price} ₽</div>
            </div>

            <CarComponentButtons />
        </div>
    )
}

export default CarComponent;