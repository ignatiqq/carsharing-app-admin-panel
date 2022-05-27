import React from 'react'
import { Link } from 'react-router-dom';

import { ReactComponent as MenuBtn } from "assets/icons/menuBtn.svg";
import styles from "./DashboardChangeLink.module.scss";

interface IDashboardChangeLink {
    link: string,
    children: React.ReactNode
}

const DashboardChangeLink: React.FC<IDashboardChangeLink> = ({link, children}) => {
  return (
    <Link to={link} className={styles.changeLink}>
        <MenuBtn />
        <span>{children}</span>
    </Link>
  )
}

export default DashboardChangeLink;