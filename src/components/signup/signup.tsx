import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserPoolData from '../libs/UserPoolData';
import styles from './signup.module.scss';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    margin: 10,
  },
}));

export const SignUp: React.FC = () => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sex, setSex] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);

  const passwordValidate = () => {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const validate = () => {
    // validate username
    if (!username) {
      return 'Username required';
    }
    if (username.length <= 3) {
      return 'Please enter username with length greater than 3';
    }

    // validate email
    if (emailId === '') {
      return 'Email required';
    }
    if (!/\S+@\S+\.\S+/.test(emailId)) {
      return 'Email address is invalid';
    }

    // validate password
    if (!password) {
      return 'Password is required';
    }
    if (!passwordValidate()) {
      return `Password needs to be 8 characters or more, with atleast:
               1 upper case
               1 lower case
               1 number
               1 special character`;
    }

    return null;
  };

  /**
   * Creates a user in db
   * @param event FormEvent
   */
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setErrorMessage('');
    event.preventDefault();
    const mandatoryValidation = validate();
    if (mandatoryValidation === null) {
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (error, response) => {
          if (error) {
            setErrorMessage(error?.message);
          } else {
            setSignupSuccess(true);
          }
        },
      );
    } else {
      setErrorMessage(mandatoryValidation);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className={styles.formWrapper}>
        <h3>Sign Up</h3>
        {errorMessage ? (
          <div className={classes.root}>
            <Alert severity="error">{errorMessage}</Alert>
          </div>
        ) : (
          ''
        )}
        {signupSuccess ? (
          <div className={classes.root}>
            <Alert severity="success">
              Sign up successful. Please click on <strong>Log in</strong> below.
            </Alert>
          </div>
        ) : (
          ''
        )}
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
            required
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="lastName">
          Last Name:
          <input
            required
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
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
            <option value="PreferNotToSay">Prefer not to say</option>
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
        <button type="submit" className={styles.button}>
          Signup
        </button>
        <br />
        Have an account?<Link to="/">Log in</Link>
      </form>
    </div>
  );
};
