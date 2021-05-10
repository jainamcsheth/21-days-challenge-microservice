import React from 'react';
import styles from './user-details.module.scss';

// User details api call

export const UserDetails: React.FC = () => (
  <section className={styles.userInfo}>
    <div className={styles.userIcon}>
      <img
        className={styles.userImg}
        src="https://picsum.photos/100/100"
        alt="placeholder img"
      />
      <h1 className={styles.heading}>
        Hello
        <br /> Jainam Sheth{' '}
      </h1>
    </div>
    <p>
      Enjoy the little things for one day you may look back and realize they
      were the big things.
    </p>
    <h2 className={styles.subHeading}>01. Completed</h2>
    <strong>Challenge Name</strong>
    <h2 className={styles.subHeading}>02. In Progress</h2>
    <strong>Challenge Name</strong>
  </section>
);
