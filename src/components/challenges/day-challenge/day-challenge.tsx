import React from 'react';
import styles from './day-challenge.module.scss';

export const DayChallenge: React.FC = () => (
  <div>
    <p className={styles.info}>Tap to see todays challenge</p>
    <div className={styles.challengeCard}>
      <p>Cook one dish from youtube</p>
    </div>
    <button type="button" className={styles.button}>
      Challenge Completed | 2 points
    </button>
  </div>
);
