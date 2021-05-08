import React from 'react';
import styles from './card.module.scss';

export interface CardProps {
  /**
   * Challenge Name to displayed.
   */
  name: string;

  /**
   * Status of the challenge.
   * TODO Jainam: This should chage o either be of some specific type. Check later.
   */
  status: string;

  /**
   * Url of the image to be shown.
   */
  url: string;
}

export const Card: React.FC<CardProps> = ({ name, status, url }) => (
  <div className={styles.card}>
    <div className={styles.cardBody}>
      <p>{status}</p>
      <img src={url} alt="placeholder img" />
      <h3>{name}</h3>
    </div>
  </div>
);
