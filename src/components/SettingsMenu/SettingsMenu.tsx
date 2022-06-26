import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';

import { ReactComponent as DropdownIcon } from "assets/icons/Dropdown.svg";
import styles from "./SettingsMenu.module.scss";
import { useAuthorization } from 'hooks';

interface ISettingsMenu {
    avatar: string,
    name: string
}

const SettingsMenu: React.FC<ISettingsMenu> = ({ avatar, name }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const { logoutHandler } = useAuthorization();

    const menu = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if(menu?.current) {
          const clickHandler = (e: Event) => {
            if(!menu.current?.contains(e.target as HTMLDivElement)) {
              setMenuIsOpen(false)
            }
          }
          document.addEventListener('click', clickHandler);
          return () => document.removeEventListener('click', clickHandler)
        }
      }, [menu]);
  
    const toggleMenuHandler = () => {
        setMenuIsOpen(prev => !prev)
    }

    const logoutUserHandler = () => {
        logoutHandler();
    }

    return (
        <div className={styles.wrapper}>
            <button ref={menu} onClick={toggleMenuHandler} className={styles.menu}>
                <div className={styles.menu__wrapper}>
                    <img src={avatar} alt={name} />
                    <span>{name}</span>
                    <DropdownIcon />
                </div>
            </button>
            <div className={classNames(styles.dropdownMenu, {
                [styles.dropdownMenu__opened]: menuIsOpen
            })}>
                <button onClick={logoutUserHandler} className={styles.dropdownMenu__btn}>Выйти</button>
            </div>
        </div>
    )
}

export default React.memo(SettingsMenu);