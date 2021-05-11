import React from 'react';
import { Card } from '../../../widgets/card/card';
import {
  ChallengeListProps,
  UserChallengesDetailsProps,
} from '../challenge-util';
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

export interface ChallengeListsProps {
  /**
   * Challenge data to be shown in card
   */
  challenges: ChallengeListProps[];
  userChallengeDetails: UserChallengesDetailsProps[];
}

export const ChallengeList: React.FC<ChallengeListsProps> = ({
  challenges,
  userChallengeDetails,
}) => (
  <section className={styles.row}>
    {challenges.map((item, index) => {
      const { ChallengeID, ChallengeName, ImageURL, Description } = item;
      return (
        <Card
          key={ChallengeID}
          ChallengeID={ChallengeID}
          name={ChallengeName}
          status={userChallengeDetails.some(
            (el) => el.ChallengeID === ChallengeID,
          )}
          url={ImageURL}
          info={Description}
          bgNo={bgList[index % bgList.length]}
        />
      );
    })}
  </section>
);
