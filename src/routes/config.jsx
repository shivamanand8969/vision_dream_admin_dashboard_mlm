import {
  Home,
  PeopleOutlined,
  FactCheck,
  AccountBalanceWallet,
  Storefront
} from '@mui/icons-material';
import React, { lazy } from 'react';
import Product from '../dhanush_pages/Product';

const OnlineTxns = lazy(() => import('../pages/OnlineTxns'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const User = lazy(() => import('../pages/user'));

const Payouts = lazy(() => import('../pages/mlm/Payouts'));
const Kyc = lazy(() => import('../pages/mlm/Kyc'));
const UserFunds = lazy(() => import('../pages/mlm/UserFunds'));
const DepositeFunds = lazy(() => import('../pages/mlm/DepositeFunds'));

export const appRoutes = [
  {
    group: 'Dashboard',
    title: 'Dashboard',
    path: '/',
    element: <Dashboard />,
    isChild: false,
    icon: <Home />,
  },
  {
    group: 'Dashboard',
    title: 'Total Users',
    path: 'users',
    element: <User />,
    isChild: false,
    icon: <PeopleOutlined />,
  },
  {
    group: 'Dashboard',
    title: 'All Income History',
    path: 'payouts',
    element: <Payouts />,
    isChild: false,
    icon: <PeopleOutlined />,
  },
  {
    group: 'Users',
    title: 'User KYC',
    path: 'userkyc',
    element: <Kyc />,
    isChild: false,
    icon: <PeopleOutlined />,
  },
  {
    group: 'Users',
    title: 'Transactions History',
    path: 'onlinetxn',
    element: <OnlineTxns />,
    isChild: false,
    icon: <PeopleOutlined />,
  }, 
  {
    group: 'Users',
    title: 'Fund Request',
    path: 'userFunds',
    element: <UserFunds />,
    icon: <FactCheck />,
  },
  {
    group: 'Users',
    title: 'Deposite Request',
    path: 'depositeFunds',
    element: <DepositeFunds />,
    icon: <AccountBalanceWallet/>,
  },
  {
    group:'Products',
    title:"Product",
    path:"my-products",
    element:<Product/>,
    icon:<Storefront/>
  }
];
