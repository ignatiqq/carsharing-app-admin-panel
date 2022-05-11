import React from 'react';
import { Outlet } from 'react-router-dom';

import withDashboardLogic from './withDashboardLogic';
import { Sidebar, Header, Loader } from 'components';
import styles from "./Dashboard.module.scss";

export function selectDataHolder<T>(data: {isLoading: boolean, error: string | null, data: T}) {
  if(data.isLoading) {
    return <Loader className={styles.loader} />
  }
  if(data.error) {
    return <div className='error-text'>{data.error}</div>
  }
  if(data.data) {
    return null
  }
}

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