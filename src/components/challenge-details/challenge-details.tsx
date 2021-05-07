import React from "react";
import styles from './challenge-details.module.scss';

export const ChallengeDetails: React.FC = () => (
  <div className={styles.challengeHeader}>
    <h1>Challenge name</h1>
    <img src="https://via.placeholder.com/100" alt="placeholder img" />
    <p>Do you enjoy cooking? So this is the ideal challenge for you. Here you will 21 ideas to diversify your dishes</p>
  </div>
)
