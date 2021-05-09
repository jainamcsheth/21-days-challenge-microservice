import React from 'react';
import styles from '../challenges.module.scss';
import { DayCard } from '../day-card/day-card';

const challengeDays = [
  {
    id: 1,
    dayNumber: 1,
    challengetxt: 'cooking something from youtube',
    challengeicon: 'some iconnnn',
  },
  {
    id: 2,
    dayNumber: 2,
    challengetxt: 'cooking something from youtube',
    challengeicon: 'some iconnnn',
  },
  {
    id: 3,
    dayNumber: 3,
    challengetxt: 'cooking something from youtube',
    challengeicon: 'some iconnnn',
  },
];

const challengeDaysList = challengeDays.map((item) => (
  <DayCard dayNumber={item.dayNumber} key={item.id} />
));

export const ChallengeDetails: React.FC = () => (
  <div className={styles.mainContent}>
    <div className={styles.challengeHeader}>
      <h1>Challenge name</h1>
      <img src="https://via.placeholder.com/100" alt="placeholder img" />
      <p>
        Do you enjoy cooking? So this is the ideal challenge for you. Here you
        will 21 ideas to diversify your dishes
      </p>
    </div>
    <section className={styles.row}>{challengeDaysList}</section>
  </div>
);