/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Challenge } from './components/challenge/challenge';
import { ForgotPassword } from './components/forgotpassword/forgotpassword';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { SignUp } from './components/signup/signup';

const LazyLoadedComponent = React.lazy(
  () => import('./components/to-be-deleted/to-be-deleted'),
);

// export const baseRoutes: { [key: string]: PartialRouteObject } = {

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const baseRoutes = () => ({
  Home: {
    path: '/',
    element: <Home />,
  },
  Challenge: {
    path: '/challenge',
    element: <Challenge />,
  },
  TestLazy: {
    path: 'testLazyLoad',
    element: <LazyLoadedComponent />,
  },
});

export const loginRoutes: any = (onLoggedIn: () => void) => ({
  Login: {
    path: '/',
    element: <Login onLoggedIn={onLoggedIn} />,
  },
  SignUp: {
    path: '/signup',
    element: <SignUp />,
  },
  ForgotPassword: {
    path: '/forgotpassword',
    element: <ForgotPassword />,
  },
});
