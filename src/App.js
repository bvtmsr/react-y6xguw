import React from 'react';
import './style.css';
import Layout from './Layout';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  loader,
} from 'react-router-dom';

import Home from './pages/Home';
import Users, { loadUsersList } from './pages/Users';
import UserDetails, { loadUser } from './pages/UserDetails';
const routerlist = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/users',
        element: <Users />,
        loader: loadUsersList,
        children: [
          { index: true, element: <Users /> },
          { path: 'edit/:uid', element: <UserDetails />, loader: loadUser },
        ],
      },
    ],
  },
  // { path: '/dashboard', element: <Layout /> },
]);
export default function App() {
  return <RouterProvider router={routerlist} />;
}
