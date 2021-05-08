/* eslint-disable no-console */
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AccountContext } from '../user-cognito/Accounts';

interface LoginProps {
  onLoggedIn: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { authenticate } = useContext(AccountContext);

  const createUser = (data: unknown) => {
    console.log('create user in signup: ', data);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    authenticate(username, password)
      .then((data: number) => {
        console.log('Logged in! ', data);
        createUser(data);
        onLoggedIn();
      })
      .catch((error: number) => {
        console.error('Failed to login! ', error);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <h3>Sign In</h3>
          <label htmlFor="Username">
            Enter username:
            <input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <br />
          <label htmlFor="Password">
            Enter password:
            <input
              value={password}
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
      <br />
      <Link to="forgotpassword">Forgot Password?</Link>
      <br />
      Don&apos;t have an account?<Link to="/signup">Sign Up</Link>
    </div>
  );
};
