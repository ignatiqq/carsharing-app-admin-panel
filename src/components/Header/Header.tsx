import React from 'react';

import UserAvatar from "assets/icons/UserAvatar.svg";
import { Notifications, SettingsMenu } from "..";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
        <div>
          input
        </div>
        <div className={styles.header__options}>
          <div className={styles.header__notificationsWrapper}>
            <Notifications />
          </div>
          <div className={styles.header__settingsmenuWrapper}>
            <SettingsMenu 
              name="Admin"
              avatar={UserAvatar}
            />
          </div>
        </div>
    </header>
  )
}

export default Header;