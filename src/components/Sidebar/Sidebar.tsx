import React from 'react';
import { Link } from 'react-router-dom';

import sidebarLinks from 'constants/sidebarLinks/sidebarLinks';
import { ReactComponent as Logo } from "assets/images/Logo.svg";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__logo__wrapper}>
        <Logo className={styles.sidebar__logo__item} />
      </div>
      <div>
        {
          sidebarLinks &&
          sidebarLinks.map(item => (
            <Link key={item.name} className={styles.sidebar__link} to={item.path}>
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
  )
}

export default Sidebar