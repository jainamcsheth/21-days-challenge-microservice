import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChallengeList,
  ChallengeListData
} from '../challenge-list/challenge-list';
import { UserDetails } from '../user-details/user-details';
import styles from './home.module.scss';

const challengeListData: ChallengeListData[] = [
  {
    name: 'Getting up early',
    id: 1000,
    icon:
      'https://picsum.photos/100/100',
    status: 'In progress',
    info: 'In this challenge we will share 21 morning habits'
  },
  {
    name: 'Cooking',
    id: 1001,
    icon: 'https://picsum.photos/100/100',
    status: '1/21',
    info: 'In this challenge we will share 21 cooking habits'
  },
  {
    name: 'Go to bed early',
    id: 1002,
    icon:
      'https://picsum.photos/100/100',
    status: 'Not Started',
    info: 'In this challenge we will share 21 go to bed early habits which is going to be a very long text'
  },
  {
    name: 'Kindness',
    id: 1003,
    icon:
      'https://picsum.photos/100/100',
    status: '6/21',
    info: 'In this challenge we will share 21 kindness habits'
  },
  {
    name: 'Getting up early',
    id: 1004,
    icon:
      'https://picsum.photos/100/100',
    status: 'In progress',
    info: 'In this challenge we will share 21 morning habits'
  },
  {
    name: 'Cooking',
    id: 1005,
    icon: 'https://picsum.photos/100/100',
    status: '1/21',
    info: 'In this challenge we will share 21 cooking habits'
  },
  {
    name: 'Go to bed early',
    id: 1006,
    icon:
      'https://picsum.photos/100/100',
    status: 'Not Started',
    info: 'In this challenge we will share 21 go to bed early habits'
  },
  {
    name: 'Kindness',
    id: 1007,
    icon:
      'https://picsum.photos/100/100',
    status: '6/21',
    info: 'In this challenge we will share 21 kindness habits'
  },
];

export const Home: React.FC = () => (
  <>
    <div className={styles.headerRow}>
      <nav>burger icon</nav>
      <span className={styles.progress}>32% Done</span>
      <button type="button">Logout</button>
    </div>

    <div className={styles.row}>
      <div className={styles.leftBar}>
        <UserDetails />
      </div>
      <div className={styles.mainContent}>
        <ChallengeList challengeListData={challengeListData} />
      </div>

      <Link to="/challenge">To challenge, will change</Link>
    </div>
  </>
)

