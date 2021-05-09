import { Navigate, PartialRouteObject } from 'react-router';
import { ChallengeDetails } from './components/challenges/chalenge-details/challenge-details';
import { Challenges } from './components/challenges/challenges';
import { ForgotPassword } from './components/forgotpassword/forgotpassword';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { SignUp } from './components/signup/signup';
import { BackButton } from './widgets/back-button/back-button';

// const LazyLoadedComponent = React.lazy(
//   () => import('./components/to-be-deleted/to-be-deleted'),
// );

export interface CustomRouteProps {
  [key: string]: PartialRouteObject;
}

export const baseRoutes = (): CustomRouteProps => ({
  Home: {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Challenges />,
      },
      {
        path: '/challenges',
        element: <Challenges />,
      },
      {
        path: '/challenge/:challengeId',
        element: <ChallengeDetails />,
        children: [
          {
            path: '/:dayNo',
            element: <BackButton />
          }
        ]
      },
      {
        path: '/challenges/:challengeId/:dayNo',
        element: <BackButton />,
      },
    ],
  },
  NotFound: {
    path: '*',
    element: <Navigate to="/" />,
  },
  // TestLazy: {
  //   path: 'testLazyLoad',
  //   element: <LazyLoadedComponent />,
  // },
});

export const loginRoutes = (onLoggedIn: () => void): CustomRouteProps => ({
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
  NotFound: {
    path: '*',
    element: <Navigate to="/" />,
  },
});
