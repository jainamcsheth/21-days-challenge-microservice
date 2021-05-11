import React from 'react';
import { UserDetails } from '../user-details/user-details';
import { ChallengeList } from './challenge-list/challenge-list';
import {
  ChallengeListProps,
  UserChallengesDetailsProps,
} from './challenge-util';
import styles from './challenges.module.scss';

interface ChallengesProps {
  challenges: ChallengeListProps[];
  userChallengeDetails: UserChallengesDetailsProps[];
}

export const Challenges: React.FC<ChallengesProps> = ({
  challenges,
  userChallengeDetails,
}) => (
  <div className={styles.innerBg}>
    {/* <Header /> */}

    <div className={styles.row}>
      <div className={styles.leftBar}>
        <UserDetails />
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

// const challengeListData: ChallengeListData[] = [
//   {
//     name: 'Getting up early',
//     id: 1000,
//     icon: 'https://picsum.photos/100/100',
//     status: 'In progress',
//     info: 'In this challenge we will share 21 morning habits',
//   },
//   {
//     name: 'Cooking',
//     id: 1001,
//     icon: 'https://picsum.photos/100/100',
//     status: '1/21',
//     info: 'In this challenge we will share 21 cooking habits',
//   },
//   {
//     name: 'Go to bed early',
//     id: 1002,
//     icon: 'https://picsum.photos/100/100',
//     status: 'Not Started',
//     info:
//       'In this challenge we will share 21 go to bed early habits which is going to be a very long text',
//   },
//   {
//     name: 'Kindness',
//     id: 1003,
//     icon: 'https://picsum.photos/100/100',
//     status: '6/21',
//     info: 'In this challenge we will share 21 kindness habits',
//   },
//   {
//     name: 'Getting up early',
//     id: 1004,
//     icon: 'https://picsum.photos/100/100',
//     status: 'In progress',
//     info: 'In this challenge we will share 21 morning habits',
//   },
//   {
//     name: 'Cooking',
//     id: 1005,
//     icon: 'https://picsum.photos/100/100',
//     status: '1/21',
//     info: 'In this challenge we will share 21 cooking habits',
//   },
//   {
//     name: 'Go to bed early',
//     id: 1006,
//     icon: 'https://picsum.photos/100/100',
//     status: 'Not Started',
//     info: 'In this challenge we will share 21 go to bed early habits',
//   },
//   {
//     name: 'Kindness',
//     id: 1007,
//     icon: 'https://picsum.photos/100/100',
//     status: '6/21',
//     info: 'In this challenge we will share 21 kindness habits',
//   },
// ];
