import React from 'react';

import { Sidebar, Header } from 'components'
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{display: "flex"}}>
        <Sidebar />
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
          <Header />
          <Outlet />
        </div>
    </div>

  )
}

export default Dashboard