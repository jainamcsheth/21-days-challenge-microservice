import React, { useEffect } from 'react';

interface LoginProps {
  onLoggedIn: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLoggedIn }) => {
  useEffect(() => {
    onLoggedIn();
  }, [onLoggedIn]);

  return <div>Login Page</div>;
};
