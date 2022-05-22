import React from 'react'
import { Link } from 'react-router-dom';

import styles from "./DashboardChangeLink.module.scss";

interface IDashboardChangeLink {
    link: string,
    children: React.ReactElement | string
}

const DashboardChangeLink: React.FC<IDashboardChangeLink> = ({link, children}) => {
  return (
    <Link to={link} className={styles.changeLink}>
        {children}
    </Link>
  )
}

export default DashboardChangeLink;