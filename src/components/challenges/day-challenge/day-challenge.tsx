import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from '../../../widgets/back-button/back-button';
import { Loader } from '../../../widgets/loader/loader';
import { ChallengeListProps } from '../challenge-util';
import styles from './day-challenge.module.scss';

interface DayChallengeProps {
  challenges: ChallengeListProps[];
}

export const DayChallenge: React.FC<DayChallengeProps> = ({ challenges }) => {
  const { ChallengeID, dayNumber: dayNumberParam } = useParams();
  const dayNumber = parseInt(dayNumberParam, 10) - 1;

  const [challengeDetails, setChallengeDetails] = useState<ChallengeListProps>(
    {} as ChallengeListProps,
  );

  const { ChallengeName, DayDetails, Description, ImageURL } = challengeDetails;

  useEffect(() => {
    challenges.some((challenge) => {
      if (challenge.ChallengeID === ChallengeID) {
        setChallengeDetails(challenge);
        return true;
      }
      return false;
    });
  }, [ChallengeID, challenges]);

  if (Object.keys(challengeDetails).length === 0) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.dayChallengeWrapper}>
      <BackButton />
      <div className={styles.row}>
        <div className={styles.challengeHeader}>
          <h1>{ChallengeName}</h1>
          <img src={ImageURL} alt="placeholder img" style={{ width: '15%' }} />
          <p>{Description}</p>
        </div>

        <div className={styles.challengeCardWrapper}>
          <p className={styles.info}>Tap to see todays challenge</p>
          <div className={styles.challengeCard}>
            <p>{DayDetails[dayNumber]?.Description}</p>
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <div className={styles.buttonCentre}>
            <button type="button" className={styles.button}>
              Challenge Completed | 2 points
            </button>
            <br />
            <button type="button" className={styles.button}>
              Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
