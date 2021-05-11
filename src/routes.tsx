import { Navigate, PartialRouteObject } from 'react-router';
import { ForgotPassword } from './components/forgotpassword/forgotpassword';
import { Login } from './components/login/login';
import { SignUp } from './components/signup/signup';

// const LazyLoadedComponent = React.lazy(
//   () => import('./components/to-be-deleted/to-be-deleted'),
// );

export interface CustomRouteProps {
  [key: string]: PartialRouteObject;
}

// export const baseRoutes = (): CustomRouteProps => ({
//   Home: {
//     path: '/',
//     element: <Home />,
//     children: [
//       {
//         path: '/',
//         element: <Challenges />,
//       },
//       {
//         path: '/challenges',
//         element: <Challenges />,
//       },
//       {
//         path: '/challenge/:ChallengeID',
//         element: <ChallengeDetails />,
//         // children: [
//         //   {
//         //     path: '/:taskNo',
//         //     element: <TaskDetails />
//         //   }
//         // ]
//       },
//     ],
//   },
//   NotFound: {
//     path: '*',
//     element: <Navigate to="/" />,
//   },
//   // TestLazy: {
//   //   path: 'testLazyLoad',
//   //   element: <LazyLoadedComponent />,
//   // },
// });

export const loginRoutes = (onLoggedIn: () => void): CustomRouteProps => ({
  Login: {
    path: '/login',
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
    element: <Navigate to="/login" />,
  },
});
