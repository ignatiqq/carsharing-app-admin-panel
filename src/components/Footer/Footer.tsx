import { memo } from 'react';
import { Link } from 'react-router-dom';

import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer__links}>
            <Link to="/dashboard/orders">
                Главная страница
            </Link>
            <Link to="/helloworld">
                Error page
            </Link>
        </div>
        <div>
            <span className={styles.footer__copyright}>Copyright © 2020 Simbirsoft</span>
        </div>
    </div>
  )
}

export default memo(Footer);