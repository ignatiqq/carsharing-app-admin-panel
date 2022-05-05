import React from 'react';

import { ReactComponent as NotificationsIcon } from "assets/icons/Notifications.svg";
import styles from "./Notifications.module.scss";

const Notifications = () => {
  return (
    <button className={styles.button}>
        <NotificationsIcon />
    </button>
  )
}

export default Notifications