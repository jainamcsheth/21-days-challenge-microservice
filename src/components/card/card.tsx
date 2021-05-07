import React from 'react';
import styles from './card.module.scss';

export const Card: React.FC<{ name: string, status: string, url: string }> = ({ name, status, url }) => (
  <div className={styles.card}>
    <div className={styles.cardBody}>
      <p>{status}</p>
      <img src={url} alt="placeholder img" />
      <h3>{name}</h3>
    </div>
  </div>
);
