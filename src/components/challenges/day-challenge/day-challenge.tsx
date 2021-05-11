import React from 'react';
import { BackButton } from '../../../widgets/back-button/back-button';
import styles from './day-challenge.module.scss';

export const DayChallenge: React.FC = () => (
  <div className={styles.dayChallengeWrapper}>
    <BackButton />
    <div className={styles.row}>
      <div className={styles.challengeHeader}>
        <h1>Challenge name that user clicked on will appear here</h1>
        <img src="https://picsum.photos/100/100" alt="placeholder img" />
        <p>
          Do you enjoy cooking? So this is the ideal challenge for you. Here you
          will 21 ideas to diversify your dishes
        </p>
      </div>

      <div className={styles.challengeCardWrapper}>
        <p className={styles.info}>Tap to see todays challenge</p>
        <div className={styles.challengeCard}>
          <p>Cook one dish from youtube</p>
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <div className={styles.buttonCentre}>
          <button type="button" className={styles.button}>
            Challenge Completed | 2 points
          </button>
          <br />
          <button type="button" className={styles.button}>
            Restart
          </button>
        </div>
      </div>
    </div>
  </div>
);
