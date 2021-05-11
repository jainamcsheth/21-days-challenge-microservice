import React from 'react';
import { UserDetails } from '../user-details/user-details';
import { ChallengeList } from './challenge-list/challenge-list';
import {
  ChallengeListProps,
  UserChallengesDetailsProps,
  UserDetailsType,
  UserStatisticsType,
} from './challenge-util';
import styles from './challenges.module.scss';

interface ChallengesProps {
  userStatistics: UserStatisticsType;
  userDetails: UserDetailsType;
  challenges: ChallengeListProps[];
  userChallengeDetails: UserChallengesDetailsProps[];
}

export const Challenges: React.FC<ChallengesProps> = ({
  userStatistics,
  userDetails,
  challenges,
  userChallengeDetails,
}) => (
  <div className={styles.innerBg}>
    {/* <Header /> */}

    <div className={styles.row}>
      <div className={styles.leftBar}>
        <UserDetails
          userDetails={userDetails}
          userStatistics={userStatistics}
        />
      </div>

      <div className={styles.mainContent}>
        <ChallengeList
          challenges={challenges}
          userChallengeDetails={userChallengeDetails}
        />
      </div>
    </div>
  </div>
);
