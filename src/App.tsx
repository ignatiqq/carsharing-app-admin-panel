import React from 'react';

import RefreshHandler from 'utils/RefreshHandler';
import AppRoutes from 'routes/AllRoutes';

function App() {
  return (
    <>
      <RefreshHandler />
      <AppRoutes />
    </>
  );
}

export default App;
