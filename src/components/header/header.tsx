import React from 'react';
import { BackButton } from '../../widgets/back-button/back-button';
import styles from './header.module.scss';

export const Header: React.FC = () => (
  <div className={styles.headerRow}>
    {/* <nav>burger icon</nav>
    <span className={styles.progress}>32% Done</span> */}
    <BackButton />
    <button type="button" className={styles.button}>
      Logout
    </button>
  </div>
);
