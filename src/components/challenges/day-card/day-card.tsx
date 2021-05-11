import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './day-card.module.scss';

export interface DayCardProps {
  /**
   * Current Day Number
   */
  dayNumber: number;
  /**
   * Current Challenge Number
   */
  ChallengeID: number;
}

export const DayCard: React.FC<DayCardProps> = ({ dayNumber, ChallengeID }) => {
  const navigate = useNavigate();

  const gotochallengePage = (day: number, challenge: number) => {
    navigate(`/challenge/${challenge}/${day}`);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={`${styles.dayWrapper} ${styles.disabled}`}
      onClick={() => gotochallengePage(dayNumber, ChallengeID)}
    >
      <p>{dayNumber}</p>

      {/* <button type="button" className={styles.button}>
        see challenge
      </button> */}
    </div>
  );
};
