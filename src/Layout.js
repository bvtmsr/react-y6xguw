import React from 'react';
import { Outlet } from 'react-router-dom';

import MainNav from './component/MainNav';
const Layout = () => {
  return (
    <>
      <MainNav />
      <Outlet />
    </>
  );
};

export default Layout;
