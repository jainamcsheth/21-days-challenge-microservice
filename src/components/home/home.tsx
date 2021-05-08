import React from 'react';
import { BackButton } from '../back-button/back-button';
import { ChallengeList } from '../challenge-list/challenge-list';
import { UserDetails } from '../user-details/user-details';
import styles from './home.module.scss';

const challengeListData = [{
  name: 'Getting up early',
  id: 2121,
  icon: 'https://dummyimage.com/250x250/000000/ffffff&text=dummyimage.com+rocks!',
  status: 'In progress'
},
{
  name: 'Cooking',
  id: 1111,
  icon: 'https://dummyimage.com/250x250/000000/ffffff&text=cooking.is.fun!',
  status: 'Not Started'
},
{
  name: 'Go to bed early',
  id: 1001,
  icon: 'https://dummyimage.com/250x250/000000/ffffff&text=impossible.to.possible!',
  status: 'Not Started'
}]

export const Home: React.FC = () => (
  <>
    <div className={styles.headerRow}>
      <nav>burger icon</nav>
      <span className={styles.progress}>32% Done</span>
      <BackButton />
    </div>

    <div className={styles.row}>
      <div className={styles.leftBar}>
        <UserDetails />
      </div>
      <div className={styles.mainContent}>
        <ChallengeList challengeListData={challengeListData} />
      </div>
    </div>
  </>
)

