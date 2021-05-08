import React from 'react';
import { Card } from '../card/card';
import styles from './challenge-list.module.scss';

// const challengeData = [{
//   name: 'SOmething',
//   id: 2121,
//   icon: 'some url',
//   status: 'Not Started'
// },
// {
//   name: 'SOmething2',
//   id: 1111,
//   icon: 'some url icon',
//   status: 'Not Started'
// }]

// const challengeList = challengeData.map((item) => <Card key={item.id} />
// )

export type ChallengeListData = {
  /**
   * Name of the challenge
   */
  name: string;

  /**
   * Unique Id of the challenge
   */
  id: number;

  /**
   * Icon URL of the image to be shown for the challenge.
   */
  icon: string;

  /**
   * Status of the challenge.
   * TODO Jainam: This should chage o either be of some specific type. Check later.
   */
  status: string;
};

export interface ChallengeListProps {
  /**
   * Challenge data to be shown in card
   */
  challengeListData: ChallengeListData[];
}

export const ChallengeList: React.FC<ChallengeListProps> = ({
  challengeListData,
}) => (
  // const challengeList = challengeListData.map((item) => <Card key={item.id} />
  <section className={styles.row}>
    {challengeListData.map((item) => (
      <Card
        key={item.id}
        name={item.name}
        status={item.status}
        url={item.icon}
      />
    ))}
  </section>
);
