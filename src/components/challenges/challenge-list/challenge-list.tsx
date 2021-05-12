import React from 'react';
import { Card } from '../../../widgets/card/card';
import {
  ChallengeListProps,
  UserChallengesDetailsProps,
} from '../challenge-util';
import styles from '../challenges.module.scss';

const bgList = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8'];

export interface ChallengeListsProps {
  /**
   * Challenge data to be shown in card
   */
  challenges: ChallengeListProps[];

  /**
   * User specific challenge data
   */
  userChallengeDetails: UserChallengesDetailsProps[];
}

export const ChallengeList: React.FC<ChallengeListsProps> = ({
  challenges,
  userChallengeDetails,
}) => (
  <section className={styles.row}>
    {challenges.map((challenge, index) => {
      const { ChallengeID, ChallengeName, ImageURL, Description } = challenge;

      // If the challenge is not started, currentUserChallengeData will be undefined
      const currentUserChallengeData = userChallengeDetails.find(
        (userChallengeDetail) =>
          userChallengeDetail.ChallengeID === ChallengeID,
      );

      return (
        <Card
          key={ChallengeID}
          ChallengeID={ChallengeID}
          name={ChallengeName}
          isStarted={!!currentUserChallengeData}
          imageUrl={ImageURL}
          description={Description}
          bgNo={bgList[index % bgList.length]}
          startDate={currentUserChallengeData?.StartDate}
        />
      );
    })}
  </section>
);
