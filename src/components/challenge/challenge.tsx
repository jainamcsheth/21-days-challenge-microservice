import React from "react";
import { BackButton } from "../back-button/back-button";
import { ChallengeDetails } from "../challenge-details/challenge-details";
import { Day } from "../day/day";
import { UserDetails } from "../user-details/user-details";
import styles from './challenge.module.scss';

const challengeDays = [{
  id: 1,
  dayNumber: 1,
  challengetxt: 'cooking something from youtube',
  challengeicon: 'some iconnnn'
},
{
  id: 2,
  dayNumber: 2,
  challengetxt: 'cooking something from youtube',
  challengeicon: 'some iconnnn'
}, {
  id: 3,
  dayNumber: 3,
  challengetxt: 'cooking something from youtube',
  challengeicon: 'some iconnnn'
}]

const challengeDaysList = challengeDays.map((item) =>
  <Day dayNumber={item.dayNumber} key={item.id} />
)

export const Challenge: React.FC = () => (
  <div className={styles.outerBg}>
    <div className={styles.innerBg}>

      <div className={styles.headerRow}>
        <nav>burger icon</nav>
        <span className={styles.progress}>32% Done</span>
        <BackButton />
      </div>

      <div className={styles.row}>
        <div className={styles.leftBar}>
          <UserDetails />
        </div>

        <div className={styles.mainContent}>
          <ChallengeDetails />
          <section className={styles.row}>
            {challengeDaysList}
          </section>

        </div>
      </div>
    </div>
  </div>
)
