import React from 'react';
import styles from './back-button.module.scss';

export const BackButton: React.FC = () => (
  <button className={styles.button} type="button">
    Back
  </button>
);
