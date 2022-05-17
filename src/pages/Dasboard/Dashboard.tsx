import React, { useCallback } from 'react';
import { Outlet } from 'react-router-dom';

import withDashboardLogic from './withDashboardLogic';
import { Sidebar, Header, Loader, Footer } from 'components';
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
  const [sidebarExtended, setSidebarExtended] = React.useState(false);

  const openSidebarHanlder = useCallback(() => {
    setSidebarExtended(true)
  }, [])

  const closeSidebarHanlder = useCallback(() => {
    setSidebarExtended(false)
  }, [])

  return (
    <main className={styles.dashboard}>
        <Sidebar
          closeSidebarHanlder={closeSidebarHanlder}
          sidebarExtended={sidebarExtended}
        />
        <div className={styles.dashboard__wrapper}>
          <div className={styles.dashboard__contentWrapper}>
            <Header
              openSidebarHanlder={openSidebarHanlder}
              sidebarExtended={sidebarExtended}
            />
            <div className={styles.dashboard__outlet}>
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>    
    </main>

  )
}

export default withDashboardLogic(Dashboard);