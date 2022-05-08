import React from 'react';

import { Button } from "components";
import { ReactComponent as CheckmarkBtn } from "assets/icons/checkmarkBtn.svg";
import { ReactComponent as MenuBtn } from "assets/icons/menuBtn.svg";
import { ReactComponent as CloseBtn } from "assets/icons/closeBtn.svg";
import styles from "./CarComponentButtons.module.scss";

const CarComponentButtons = () => {
  return (
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
  )
}

export default CarComponentButtons