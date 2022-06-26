import React from 'react';
import { Link } from 'react-router-dom';

import sidebarLinks from 'constants/sidebarLinks/sidebarLinks';
import { ReactComponent as CloseIcon } from "assets/icons/XIcon.svg";
import { ReactComponent as Logo } from "assets/icons/Logo.svg";
import styles from "./Sidebar.module.scss";
import classNames from 'classnames';

interface ISidebar {
  closeSidebarHanlder: () => void,
  sidebarExtended: boolean
}

const Sidebar: React.FC<ISidebar> = ({ 
  closeSidebarHanlder,
  sidebarExtended
}) => {

  const locationPathnameLink = "/" + window.location.pathname.split("/").splice(2).join("/");

  return (
    <>
      <aside className={classNames(styles.sidebar, {
        [styles.sidebar_opened]: sidebarExtended
      })}>
        <button 
          onClick={closeSidebarHanlder}
          className={styles.sidebar__button_close}
        >
          <CloseIcon width="30px" stroke="#818ea3" fill="#818ea3" alt="open menu" />
        </button>
        <div className={styles.sidebar__logo__wrapper}>
          <Logo className={styles.sidebar__logo__item} />
        </div>
        <div>
          {
            sidebarLinks &&
            sidebarLinks.map(item => (
              <Link 
                onClick={closeSidebarHanlder}
                key={item.name} 
                className={classNames(styles.sidebar__link, {
                  [styles.sidebar__link_active]: locationPathnameLink === item.path
                })} 
                to={item.path}
              >
                <div>
                  <img src={item.icon} alt={item.name} />
                </div>
                <div>
                  {item.name}
                </div>
              </Link>
            ))
          }
        </div>
      </aside>
    </>
  )
}

export default Sidebar