import React from 'react';
import { Card } from '../../../widgets/card/card';
import styles from '../challenges.module.scss';

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
   * TODO Jainam: This should chage to either be of some specific type. Check later.
   */
  status: string;

  /**
   * Info of the challenge.
   * TODO Jainam: This should chage to either be of some specific type. Check later.
   */
  info: string;
};

const bgList = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8'];

export interface ChallengeListProps {
  /**
   * Challenge data to be shown in card
   */
  challengeListData: ChallengeListData[];
}

export const ChallengeList: React.FC<ChallengeListProps> = ({
  challengeListData,
}) => (
  <section className={styles.row}>
    {challengeListData.map((item, index) => (
      <Card
        key={item.id}
        challengeId={item.id}
        name={item.name}
        status={item.status}
        url={item.icon}
        info={item.info}
        bgNo={bgList[index % bgList.length]}
      />
    ))}
  </section>
);
