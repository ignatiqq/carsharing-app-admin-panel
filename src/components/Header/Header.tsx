import React, { useState } from 'react';

import { Input } from '..';
import UserAvatar from "assets/icons/UserAvatar.svg";
import { ReactComponent as SearchIcon } from "assets/icons/Search.svg"; 
import { Notifications, SettingsMenu } from "..";
import styles from "./Header.module.scss";

const Header = () => {

    const [search, setSearch] = useState("");

    const setSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    }

    return (
      <header className={styles.header}>
          <div className={styles.header__input__wrapper}>
            <SearchIcon />
            <Input 
              className={styles.header__input}
              name="header-search"
              value={search}
              placeholder="Поиск..."
              onChange={setSearchHandler}
            />
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