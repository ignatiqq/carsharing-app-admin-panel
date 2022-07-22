import React from 'react';

import { ReactComponent as NotificationsIcon } from "assets/icons/Notifications.svg";
import styles from "./PermanentNotifications.module.scss";

const PermanentNotifications = () => {
  return (
    <button className={styles.button}>
        <NotificationsIcon />
    </button>
  )
}

export default PermanentNotifications;