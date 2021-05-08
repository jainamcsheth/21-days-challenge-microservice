/* eslint-disable no-console */
import { CognitoUser } from 'amazon-cognito-identity-js';
import React, { useState } from 'react';
import Pool from '../user-cognito/UserPoolData';

export const ForgotPassword: React.FC = () => {
  const [stage, setStage] = useState(1); // 1 = email stage, 2 = code stage
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const getUser = () =>
    new CognitoUser({
      Username: email.toLowerCase(),
      Pool,
    });

  const sendCode = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    getUser().forgotPassword({
      onSuccess: (data: void) => {
        console.log('onSuccess:', data);
      },
      onFailure: (err: Error) => {
        console.error('onFailure:', err);
      },
      inputVerificationCode: (data: unknown) => {
        console.log('Input code:', data);
        setStage(2);
      },
    });
  };

  const resetPassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.error('Passwords are not the same');
      return;
    }

    getUser().confirmPassword(code, password, {
      onSuccess: (data: void) => {
        console.log('onSuccess:', data);
      },
      onFailure: (err) => {
        console.error('onFailure:', err);
      },
    });
  };
  return (
    <div>
      <h3>Forgot Password</h3>
      {stage === 1 && (
        <form onSubmit={sendCode}>
          <h5>Enter your registered email below to get the code.</h5>
          <label htmlFor="Email">
            Email:
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Send verification code</button>
        </form>
      )}
      {stage === 2 && (
        <form onSubmit={resetPassword}>
          <h5>Enter the verification code sent to your email.</h5>
          <label htmlFor="Code">
            Verification code:
            <input
              value={code}
              onChange={(event) => setCode(event.target.value)}
            />
          </label>
          <br />
          <label htmlFor="NewPassword">
            New Password:
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <br />
          <label htmlFor="ConfirmPassword">
            Confirm Password:
            <input
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Change password</button>
        </form>
      )}
    </div>
  );
};
