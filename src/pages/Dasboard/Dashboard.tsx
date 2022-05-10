import React from 'react';
import { Outlet } from 'react-router-dom';

import withDashboardLogic from './withDashboardLogic';
import { Sidebar, Header } from 'components';
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
        <Sidebar />
        <div className={styles.dashboard__contentWrapper}>
          <Header />
          <div className={styles.dashboard__outlet}>
            <Outlet />
          </div>
        </div>
    </div>

  )
}

export default withDashboardLogic(Dashboard);