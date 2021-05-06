import React from 'react';
import { ChallengeDetails } from '../challenge-details/challenge-details';
import { ChallengeList } from '../challenge-list/challenge-list';
import { Day } from '../day/day';
import { User } from '../user/user';
import styles from './home.module.scss';

export const Home: React.FC = () => (
  <div className={styles.outerBg}>
    <div className={styles.innerBg}>

      <div className={styles.headerRow}>
        <nav>burger icon</nav>
        <span className={styles.progress}>32% Done</span>
      </div>

      <div className={styles.row}>
        <div className={styles.leftBar}>
          <User />
        </div>

        <div className={styles.mainContent}>

          <ChallengeList />


          <ChallengeDetails />
          <section className={styles.row}>
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
          </section>

        </div>
      </div>
    </div>
  </div>
)
