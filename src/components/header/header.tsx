import React from 'react';
import styles from './header.module.scss';

export const Header: React.FC = () => (
  <div className={styles.headerRow}>
    <nav>burger icon</nav>
    <span className={styles.progress}>32% Done</span>
    <button type="button">Logout</button>
  </div>
);
