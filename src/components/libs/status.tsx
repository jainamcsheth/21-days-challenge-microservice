/* eslint-disable no-console */
import React, { useContext } from 'react';
import { AccountContext } from './Accounts';
import styles from './status.module.scss';

interface StatusProps {
  onLoggedOut: () => void;
}

export const Status: React.FC<StatusProps> = ({ onLoggedOut }) => {
  const { logout } = useContext(AccountContext);

  const onLogout = () => {
    sessionStorage.removeItem('userId');
    onLoggedOut();
    logout();
  };

  return (
    <div>
      <div className={styles.loginStatusWrapper}>
        <button onClick={onLogout} className={styles.button} type="submit">
          Logout
        </button>
      </div>
    </div>
  );
};
