/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-return-await */
/* eslint-disable no-console */
/* TODO Aditi, TODO Jainam: Remove this consoles, check the escaped lint */
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import React, { createContext, ReactNode } from 'react';
import Pool from './UserPoolData';

interface AccountProps {
  children: ReactNode | ReactNode[];
}

export const AccountContext = createContext<any>({} as any);

export const Account: React.FC<AccountProps> = ({ children }) => {
  const getSession = async () =>
    await new Promise((response, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((err: unknown, session: unknown) => {
          if (err) {
            reject();
          } else {
            response(session);
          }
        });
      } else {
        reject();
      }
    });

  const authenticate = async (Username: string, Password: string) =>
    await new Promise((response, reject) => {
      const user = new CognitoUser({ Username, Pool });
      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log('onSuccess:', data);
          response(data);
        },

        onFailure: (err) => {
          console.error('onFailure:', err);
          reject(err);
        },

        newPasswordRequired: (data) => {
          console.log('newPasswordRequired:', data);
          response(data);
        },
      });
    });

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  };

  return (
    <AccountContext.Provider
      value={{
        authenticate,
        getSession,
        logout,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
