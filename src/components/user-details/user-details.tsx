import React from 'react';
import { UserDetailsProps } from '../challenges/challenge-util';
import styles from './user-details.module.scss';

export const UserDetails: React.FC<UserDetailsProps> = ({
  userDetails,
  userStatistics,
}) => {
  const { Coins, CompletedChallenges, EnrolledChallenges } = userStatistics;
  const { Name } = userDetails;
  return (
    <section className={styles.userInfo}>
      <div className={styles.userIcon}>
        <img
          className={styles.userImg}
          src="https://picsum.photos/100/100"
          alt="placeholder img"
        />
        <h1 className={styles.heading}>
          Hello
          <br /> {Name?.FirstName}
          <br />
        </h1>
      </div>

      <div className="typewriter">
        <p className="typewriter-text">
          Enjoy the little things for one day you may look back and realize they
          were the big things.
        </p>
      </div>

      <h3>Statistics</h3>
      <div className={styles.statisticsWrapper}>
        <div className={styles.statisticsBlock}>
          <h3 className={styles.statisticsValue}>{Coins}</h3>
          <strong>Total coins</strong>
        </div>
        <div className={styles.statisticsBlock}>
          <h3 className={styles.statisticsValue}>{EnrolledChallenges}</h3>
          <strong>Enrolled challenges</strong>
        </div>

        <div className={styles.statisticsBlock}>
          <h3 className={styles.statisticsValue}>{CompletedChallenges}</h3>
          <strong>Completed challenges</strong>
        </div>
      </div>
    </section>
  );
};
