import React from "react";
import { ChallengeDetails } from "../challenge-details/challenge-details";
import { Day } from "../day/day";
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
  <>
    <div className={styles.mainContent}>
      <ChallengeDetails />
      <section className={styles.row}>
        {challengeDaysList}
      </section>

    </div>
  </>
)
