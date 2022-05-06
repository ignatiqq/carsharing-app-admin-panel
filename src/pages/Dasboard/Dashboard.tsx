import React from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar, Header } from 'components';
import styles from "./Dashboard.module.scss";

export const ComponentCheck = () => {
  console.log("check");

  React.useEffect(() => {
    console.log("check Orders")
  }, [])

  return <div>123</div>
}

const Dashboard = React.memo(() => {

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
});

export default Dashboard;