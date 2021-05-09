import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';

export const Header: React.FC = () => (
  <div className={styles.headerRow}>
    {/* <nav>burger icon</nav>
    <span className={styles.progress}>32% Done</span> */}

<Link to="/login"> <button type="button" className={styles.button}>
      Logout
    </button></Link>
  </div>
);
