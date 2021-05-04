import React from 'react';
import { Home } from './components/home/home';

const LazyLoadedComponent = React.lazy(
  () => import('./components/to-be-deleted/to-be-deleted'),
);

export const baseRoutes = {
  Home: {
    path: '/',
    element: <Home />,
  },
  TestLazy: {
    path: '/testLazyLoad',
    element: <LazyLoadedComponent />,
  },
};
