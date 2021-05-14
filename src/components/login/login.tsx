import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AccountContext } from '../libs/Accounts';
import styles from './login.module.scss';

interface LoginProps {
  /**
   * TO be called after successfull login.
   */
  onLoggedIn: () => void;
}

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    marginBottom: 10,
  },
}));

export const Login: React.FC<LoginProps> = ({ onLoggedIn }) => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    authenticate(username, password)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((data: any) => {
        sessionStorage.setItem('userId', data?.accessToken?.payload?.username);
        onLoggedIn();
        navigate('/challenge');
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => {
        setErrorMessage(error?.message);
      });
  };

  return (
    <form onSubmit={onSubmit} className={styles.formWrapper}>
      <h3>Sign In</h3>
      {errorMessage ? (
        <div className={classes.root}>
          <Alert severity="error">{errorMessage}</Alert>
        </div>
      ) : (
        ''
      )}
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
      <button type="submit" className={styles.button}>
        Login
      </button>
      <br />
      <Link to="/forgotpassword">Forgot Password?</Link>
      <br />
      Don&apos;t have an account?<Link to="/signup">Sign Up</Link>
    </form>
  );
};
