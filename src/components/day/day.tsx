import React from "react";
import styles from './day.module.scss';

export const Day: React.FC<{ dayNumber: number }> = ({ dayNumber }) => (
  <div className={styles.dayWrapper}>
    {dayNumber}
  </div>
)
