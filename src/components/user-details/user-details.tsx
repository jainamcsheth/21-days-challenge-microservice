import React from 'react';
import { UserDetailsProps } from '../challenges/challenge-util';
import styles from './user-details.module.scss';

// User details api call

export const UserDetails: React.FC<UserDetailsProps> = ({
 userDetails,userStatistics
}) => {

  const {CompletedChallenges, EnrolledChallenges } = userStatistics;
  const {Name} = userDetails ;
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
        {/* <br />   {Name.FirstName}! */}
        <br/>

      </h1>
    </div>
    <p>
      Enjoy the little things for one day you may look back and realize they
      were the big things.
    </p>
    You have enrolled to  <strong>{EnrolledChallenges}</strong> challenges
    <br/>
    You have completed <strong>{CompletedChallenges}</strong> challenges

  </section>
);
  }

