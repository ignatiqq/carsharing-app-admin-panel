import React from 'react'
import classNames from 'classnames';

import { ReactComponent as CheckmarkBtn } from "assets/icons/checkmarkBtn.svg";
import { ReactComponent as MenuBtn } from "assets/icons/menuBtn.svg";
import { ReactComponent as CloseBtn } from "assets/icons/closeBtn.svg";
import CarPlaceholder from "assets/images/CarPlaceholder.png";
import { Button } from "../..";
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
                        <span className={styles.bold}>{carId?.name ? carId?.name : "Авто"}</span> в 
                        <span className={styles.bold}>{cityId?.name ? cityId?.name : " Город"}</span>,
                        <span className={styles.bold}>{pointId?.name}</span>
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

            <div>
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

            <div>
                <div className={styles.car__price}>{price && price} ₽</div>
            </div>

            <div className={styles.car__action}>
                <Button className={styles.car__action_btn}>
                    <CheckmarkBtn />
                    <span>Готово</span>
                </Button>
                <Button className={styles.car__action_btn}>
                    <CloseBtn />
                    <span>Отмена</span>
                </Button>
                <Button className={styles.car__action_btn}>
                    <MenuBtn />
                    <span>Изменить</span>
                </Button>
            </div>
        </div>
    )
}

export default CarComponent;