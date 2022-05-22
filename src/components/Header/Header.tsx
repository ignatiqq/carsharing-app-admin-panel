import React, { useState } from 'react';

import { StandartInput } from '..';
import UserAvatar from "assets/icons/UserAvatar.svg";
import { ReactComponent as MenuBtn } from "assets/icons/sidebarOpen.svg";
import { ReactComponent as SearchIcon } from "assets/icons/Search.svg"; 
import { Notifications, SettingsMenu } from "..";
import styles from "./Header.module.scss";
import classNames from 'classnames';

interface IHeader {
  openSidebarHanlder: () => void,
  sidebarExtended: boolean
}

const Header: React.FC<IHeader> = ({
  openSidebarHanlder,
  sidebarExtended
}) => {

    const [search, setSearch] = useState("");

    const setSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    }

    return (
      <header className={styles.header}>
        <div className={styles.header__additionally}>
          <button 
            onClick={openSidebarHanlder}
            className={classNames(styles.header__button_sidebarOpen, {
              [styles.header__button_sidebarOpen_visible]: sidebarExtended
            })}
          >
            <MenuBtn width="26px" stroke="#818ea3" alt="close menu" />
          </button>
          <div className={styles.header__input__wrapper}>
            <SearchIcon />
            <StandartInput 
              className={styles.header__input}
              name="header-search"
              value={search}
              placeholder="Поиск..."
              onChange={setSearchHandler}
            />
          </div>
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

export default React.memo(Header);