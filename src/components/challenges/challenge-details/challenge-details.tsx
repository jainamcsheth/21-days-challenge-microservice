import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { BackButton } from '../../../widgets/back-button/back-button';
import { ChallengeListProps } from '../challenge-util';
import styles from '../challenges.module.scss';
import { DayCard } from '../day-card/day-card';

interface ChallengeDetailsProps {
  challenges: ChallengeListProps[];
}

export const ChallengeDetails: React.FC<ChallengeDetailsProps> = ({
  challenges,
}) => {
  const { ChallengeID } = useParams();

  const [challengeDetails, setChallengeDetails] = useState<ChallengeListProps>(
    {} as ChallengeListProps,
  );

  const challengeDaysList = challengeDetails?.DayDetails?.map((item) => (
    <DayCard
      ChallengeID={challengeDetails.ChallengeID}
      dayNumber={item.Day}
      key={item.Day}
    />
  ));

  useEffect(() => {
    challenges.some((challenge) => {
      if (challenge.ChallengeID === ChallengeID) {
        setChallengeDetails(challenge);
        return true;
      }
      return false;
    });
  }, [ChallengeID, challenges]);

  return (
    <div className={styles.challengeWrapper}>
      <BackButton />
      <div className={styles.challengeHeader}>
        <h1>{challengeDetails.ChallengeName}</h1>
        <img
          src={challengeDetails.ImageURL}
          alt="placeholder img"
          style={{ width: '25%' }}
        />
        <p>{challengeDetails.Description}</p>
      </div>
      <section className={styles.row}>{challengeDaysList}</section>
    </div>
  );
};

// const challengeDays = [
//   {
//     id: 1,
//     dayNumber: 1,
//     challengetxt: 'cooking something from youtube',
//     challengeicon: 'some iconnnn',
//     ChallengeID: 1000,
//   },
//   {
//     id: 2,
//     dayNumber: 2,
//     challengetxt: 'cooking something from youtube',
//     challengeicon: 'some iconnnn',
//     ChallengeID: 1000,
//   },
//   {
//     id: 3,
//     dayNumber: 3,
//     challengetxt: 'cooking something from youtube',
//     challengeicon: 'some iconnnn',
//     ChallengeID: 1000,
//   },
//   {
//     id: 4,
//     dayNumber: 5,
//     challengetxt: 'cooking something from youtube',
//     challengeicon: 'some iconnnn',
//     ChallengeID: 1000,
//   },
//   {
//     id: 5,
//     dayNumber: 6,
//     challengetxt: 'cooking something from youtube',
//     challengeicon: 'some iconnnn',
//     ChallengeID: 1000,
//   },
//   {
//     id: 6,
//     dayNumber: 7,
//     challengetxt: 'cooking something from youtube',
//     challengeicon: 'some iconnnn',
//     ChallengeID: 1000,
//   },
// ];
