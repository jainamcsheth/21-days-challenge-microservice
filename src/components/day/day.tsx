import React from 'react';
import styles from './day.module.scss';

export interface DayProps {
  /**
   * Current Day Number
   */
  dayNumber: number;
}

export const Day: React.FC<DayProps> = ({ dayNumber }) => (
  <div className={styles.dayWrapper}>{dayNumber}</div>
);
