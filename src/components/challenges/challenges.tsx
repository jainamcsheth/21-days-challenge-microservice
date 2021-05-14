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
  /**
   * User Statistics data
   */
  userStatistics: UserStatisticsType;

  /**
   * User details data
   */
  userDetails: UserDetailsType;

  /**
   * Challenge data
   */
  challenges: ChallengeListProps[];

  userChallengeDetails: UserChallengesDetailsProps[];

  /**
   * Used to refetch the data in home component.
   * This will be called on back navigate.
   */
  refetchApi?: () => void;
}

export const Challenges: React.FC<ChallengesProps> = ({
  userStatistics,
  userDetails,
  challenges,
  userChallengeDetails,
  refetchApi,
}) => (
  <div className={styles.innerBox}>
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
          userStatistics={userStatistics}
          refetchApi={refetchApi}
        />
      </div>
    </div>
  </div>
);
