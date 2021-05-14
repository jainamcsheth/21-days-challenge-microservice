import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import { CognitoUser } from 'amazon-cognito-identity-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Pool from '../libs/UserPoolData';
import styles from './forgot-password.module.scss';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    marginBottom: 10,
  },
}));

export const ForgotPassword: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [stage, setStage] = useState(1); // 1 = email stage, 2 = code stage
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const goToLogin = () => {
    navigate('/login');
  };

  const getUser = () =>
    new CognitoUser({
      Username: email.toLowerCase(),
      Pool,
    });

  const sendCode = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    getUser().forgotPassword({
      onSuccess: (data: void) => {
        // eslint-disable-next-line no-console
        console.log('Forgot password Success:', data);
      },
      onFailure: (err: Error) => {
        // eslint-disable-next-line no-console
        console.error('Forgot password Failure:', err);
      },
      inputVerificationCode: () => {
        setStage(2);
      },
    });
  };

  const resetPassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords are not the same');
    }

    if (errorMessage === '') {
      getUser().confirmPassword(code, password, {
        onSuccess: () => {
          goToLogin();
        },
        onFailure: (err) => {
          setErrorMessage(err.message);
        },
      });
    }
  };

  useEffect(() => {
    if (errorMessage) {
      setErrorMessage('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, password, confirmPassword]);
  return (
    <div className={styles.divWrapper}>
      <h3>Forgot Password</h3>
      {stage === 1 && (
        <form onSubmit={sendCode}>
          <h5>Enter your registered email below to get the code.</h5>
          <label htmlFor="Email">
            Email:
            <input
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <br />
          <button className={styles.button} type="button" onClick={goToLogin}>
            Back
          </button>
          <button type="submit" className={styles.button}>
            Send verification code
          </button>
        </form>
      )}

      {stage === 2 && (
        <form onSubmit={resetPassword}>
          <h5>Enter the verification code sent to your email.</h5>
          {errorMessage ? (
            <div className={classes.root}>
              <Alert severity="error">{errorMessage}</Alert>
            </div>
          ) : (
            ''
          )}
          <label htmlFor="Code">
            Verification code:
            <input
              required
              pattern="[0-9]{6}"
              value={code}
              onChange={(event) => setCode(event.target.value)}
            />
          </label>
          <br />
          <label htmlFor="NewPassword">
            New Password:
            <input
              required
              value={password}
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <br />
          <label htmlFor="ConfirmPassword">
            Confirm Password:
            <input
              required
              value={confirmPassword}
              type="password"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </label>
          <br />
          <button className={styles.button} type="button" onClick={goToLogin}>
            Back
          </button>
          <button type="submit" className={styles.button}>
            Change password
          </button>
        </form>
      )}
    </div>
  );
};
