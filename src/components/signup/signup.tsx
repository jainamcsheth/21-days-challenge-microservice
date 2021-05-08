/* eslint-disable no-console */
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserPoolData from '../user-cognito/UserPoolData';

export const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sex, setSex] = useState('');

  /**
   * Creates a user in db
   * @param event FormEvent
   */
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const givenName = new CognitoUserAttribute({
      Name: 'given_name',
      Value: firstName,
    });
    const familyName = new CognitoUserAttribute({
      Name: 'family_name',
      Value: lastName,
    });
    const gender = new CognitoUserAttribute({
      Name: 'gender',
      Value: sex,
    });
    const email = new CognitoUserAttribute({
      Name: 'email',
      Value: emailId,
    });
    UserPoolData.signUp(
      username,
      password,
      [givenName, familyName, gender, email],
      [],
      (error, response) => {
        if (error) {
          console.error(error);
        } else {
          console.log(response);
        }
      },
    );
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Sign Up</h3>
        <label htmlFor="username">
          Username:
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="firstName">
          First Name:
          <input
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="lastName">
          Last Name:
          <input
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="sex">
          Sex:
          <select value={sex} onChange={(event) => setSex(event.target.value)}>
            <option value="" disabled>
              Select Sex:
            </option>
            <option value="F">Female</option>
            <option value="M">Male</option>
            <option value="O">Other</option>
            <option value="P">Prefer not to say</option>
          </select>
        </label>
        <br />
        <label htmlFor="email">
          Email:
          <input
            value={emailId}
            onChange={(event) => setEmailId(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input
            value={password}
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
      <br />
      Have an account?<Link to="/">Log in</Link>
    </div>
  );
};
