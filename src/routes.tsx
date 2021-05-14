import { Navigate, PartialRouteObject } from 'react-router';
import { ForgotPassword } from './components/forgotpassword/forgotpassword';
import { Login } from './components/login/login';
import { SignUp } from './components/signup/signup';

export interface CustomRouteProps {
  [key: string]: PartialRouteObject;
}

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
