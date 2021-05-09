import React from 'react';
import styles from './day-card.module.scss';

export interface DayCardProps {
  /**
   * Current Day Number
   */
  dayNumber: number;
}

export const DayCard: React.FC<DayCardProps> = ({ dayNumber }) => (
  <div className={styles.dayWrapper}>{dayNumber}</div>
);
