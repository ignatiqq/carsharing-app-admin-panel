import React, { useCallback, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import withDashboardLogic from './withDashboardLogic';
import { Sidebar, Header, Loader, Footer, TemporaryNotificationWrapper } from 'components';
import styles from "./Dashboard.module.scss";
import { useAppSelector } from 'store';

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

  const navigate = useNavigate();

  const { temporaryNotifications } = useAppSelector(({notifications}) => ({
    temporaryNotifications: notifications.temporary.data
  }))

  const openSidebarHanlder = useCallback(() => {
    setSidebarExtended(true)
  }, [])

  const closeSidebarHanlder = useCallback(() => {
    setSidebarExtended(false)
  }, [])

  useEffect(() => {
    const splitedPathname = window.location.pathname.split("/");
    if(splitedPathname[splitedPathname.length - 1] === "dashboard") {
      navigate("/dashboard/order")
    }
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
            <TemporaryNotificationWrapper 
              className={styles.dashboard__notificationsWrapper}
              data={temporaryNotifications}
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