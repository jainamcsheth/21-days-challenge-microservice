import React from 'react';
import { useNavigate } from 'react-router';
import styles from './card.module.scss';

interface CardProps {
  ChallengeID: string;
  name: string;
  info: string;
  url: string;
  status: boolean;
  bgNo: string;
}

export const Card: React.FC<CardProps> = ({
  name,
  status,
  url,
  info,
  bgNo,
  ChallengeID,
}) => {
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const goToChallengeDetail = (ChallengeID: string) => {
    navigate(`/challenge/${ChallengeID}`);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={styles.card}
      onClick={() => goToChallengeDetail(ChallengeID)}
    >
      <div className={`${styles.cardBody} ${styles[bgNo]}`}>
        <img className={styles.cardIcon} src={url} alt="challeneg Icon" />
        <h2 className={styles.cardHeading}>{name}</h2>
        <p className={styles.cardInfo}>{info}</p>
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.cardTxt}>{status ? '' : 'NOT STARTED'}</span>
        {/* TODO :: Button copy should be start or restart based on the challenge not started
      or already started */}
        <button
          type="button"
          className={`${styles.cardButton} ${styles[bgNo]}`}
        >
          {status ? 'OPEN' : 'START'}
        </button>
      </div>
    </div>
  );
};
