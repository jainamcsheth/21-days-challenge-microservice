/* eslint-disable no-console */
/* TODO Aditi: Remove this consoles */
import React, { useContext, useEffect, useState } from 'react';
import { AccountContext } from './Accounts';

interface StatusProps {
  onLoggedOut: () => void;
}

export const Status: React.FC<StatusProps> = ({ onLoggedOut }) => {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  const onLogout = () => {
    onLoggedOut();
    logout();
  };

  useEffect(() => {
    getSession().then((session: unknown) => {
      console.log('Session: ', session);
      setStatus(true);
    });
  });

  return (
    <div>
      {status ? (
        <div>
          You are logged in.
          <button onClick={onLogout} type="submit">
            Logout
          </button>
        </div>
      ) : (
        'Please login below.'
      )}
    </div>
  );
};
