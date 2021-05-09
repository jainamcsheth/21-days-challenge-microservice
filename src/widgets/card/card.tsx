import React from 'react';
import { useNavigate } from 'react-router';
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

   /**
   * challengeId of the card to be shown.
   */
  challengeId: number;
}

export const Card: React.FC<CardProps> = ({
  name,
  status,
  url,
  info,
  bgNo,
  challengeId
}) => {
  const navigate = useNavigate();

  const goToChallengeDetail = (challengeID: number) => {
    navigate(`/challenge/${challengeID}`);
  }

  return (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  <div className={styles.card} onClick={()=> goToChallengeDetail(challengeId)}>
    <div className={`${styles.cardBody} ${styles[bgNo]}`}>
      <img className={styles.cardIcon} src={url} alt="challeneg Icon" />
      <h2 className={styles.cardHeading}>{name}</h2>
      <p className={styles.cardInfo}>{info}</p>
    </div>
    <div className={styles.cardFooter}>
      <span className={styles.cardTxt}>{status}</span>
      {/* TODO :: Button copy should be start or restart based on the challenge not started
      or already started */}
      <button type="button" className={`${styles.cardButton} ${styles[bgNo]}`}>
        Start
      </button>
    </div>
  </div>
);
}
