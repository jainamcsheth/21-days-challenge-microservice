import React from 'react';
import { PartialRouteObject } from 'react-router';
import { Challenge } from './components/challenge/challenge';
import { Home } from './components/home/home';

const LazyLoadedComponent = React.lazy(
  () => import('./components/to-be-deleted/to-be-deleted'),
);

export const baseRoutes: { [key: string]: PartialRouteObject } = {
  Home: {
    path: '/',
    element: <Home />,
  },
  Challenge: {
    path: '/challenge',
    element: <Challenge />,
  },
  TestLazy: {
    path: '/testLazyLoad',
    element: <LazyLoadedComponent />,
  },
};
