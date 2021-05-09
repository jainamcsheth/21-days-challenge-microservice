import React from 'react';
import styles from './card.module.scss';

export interface CardProps {
  /**
   * Challenge Name to displayed.
   */
  name: string;

  /**
   * Status of the challenge.
   * TODO Jainam: This should chage to either be of some specific type. Check later.
   */
  status: string;

  /**
   * Url of the image to be shown.
   */
  url: string;

  /**
   * info of the card to be shown.
   */
  info: string;

  /**
   * bgnumber of the card to be shown.
   */
  bgNo: string;
}

export const Card: React.FC<CardProps> = ({
  name,
  status,
  url,
  info,
  bgNo,
}) => (
  <div className={styles.card}>
    <div className={`${styles.cardBody} ${styles[bgNo]}`}>
      <img className={styles.cardIcon} src={url} alt="challeneg Icon" />
      <h2 className={styles.cardHeading}>{name}</h2>
      <p className={styles.cardInfo}>{info}</p>
    </div>
    <div className={styles.cardFooter}>
      <span className={styles.cardTxt}>{status}</span>
      {/* TODO :: Button copy should be start or restart based on the challenge not started
      or already started */}
      <button type="button" className={`${styles.cardButton}`}>
        Start
      </button>
    </div>
  </div>
);
