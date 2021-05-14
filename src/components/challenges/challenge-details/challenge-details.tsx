import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getDaysDifference } from '../../../utils';
import { BackButton } from '../../../widgets/back-button/back-button';
import {
  ChallengeListProps,
  getCurrentChallengeDetails,
  getCurrentUserChallengeDetails,
  UserChallengesDetailsProps,
} from '../challenge-util';
import styles from '../challenges.module.scss';
import { DayCard } from '../day-card/day-card';

interface ChallengeDetailsProps {
  /**
   * Challenge data
   */
  challenges: ChallengeListProps[];

  /**
   * Challenge details of the user like start date, completed tasks, etc
   */
  userChallengeDetails: UserChallengesDetailsProps[];

  /**
   * Used to refetch the data in home component.
   * This will be called on back navigate.
   */
  refetchApi?: () => void;
}

export const ChallengeDetails: React.FC<ChallengeDetailsProps> = ({
  challenges,
  userChallengeDetails,
  refetchApi,
}) => {
  const { ChallengeID } = useParams();
  const navigate = useNavigate();

  const [challengeDetails, setChallengeDetails] = useState<ChallengeListProps>(
    {} as ChallengeListProps,
  );
  const [isInvalidID, setIsInvalidID] = useState<boolean>(false);

  useEffect(() => {
    if (challenges.length === 0) {
      return;
    }

    const challengeDetailsFromID = getCurrentChallengeDetails(
      challenges,
      ChallengeID,
    );
    if (challengeDetailsFromID) {
      setChallengeDetails(challengeDetailsFromID);
      setIsInvalidID(false);
    } else {
      // No challenge with the given ID, reditect to homepage.
      setIsInvalidID(true);
    }
  }, [ChallengeID, challenges]);

  useEffect(() => {
    // No challenge with the given ID, reditect to homepage.
    if (isInvalidID === true) {
      navigate('/challenge');
    }
  }, [isInvalidID, navigate]);

  const challengeDaysList = () => {
    const { DayDetails, ChallengeID: ID } = challengeDetails;

    const currentUserChallengeData = getCurrentUserChallengeDetails(
      userChallengeDetails,
      ChallengeID,
    );
    const currentDay = currentUserChallengeData
      ? getDaysDifference(
          new Date(),
          new Date(currentUserChallengeData!.StartDate),
        )
      : 1;

    return DayDetails?.map(({ Day: dayNo }) => {
      const isCompleted = !!currentUserChallengeData?.CompletedTasks[dayNo];

      return (
        <DayCard
          key={dayNo}
          ChallengeID={ID}
          dayNumber={dayNo}
          isCompleted={isCompleted}
          isDisabled={parseInt(dayNo, 10) > currentDay}
        />
      );
    });
  };

  return (
    <div className={styles.challengeWrapper}>
      <BackButton refetchApi={refetchApi} />

      <div className={styles.challengeHeader}>
        <h1>{challengeDetails.ChallengeName}</h1>
        <img
          src={challengeDetails.ImageURL}
          alt={challengeDetails.ChallengeName}
          className={styles.challengeImage}
        />
        <div className="typewriter">
          <p className="typewriter-text">{challengeDetails.Description}</p>
        </div>
      </div>

      <section className={styles.daysGridWrapper}>
        <Grid container spacing={3}>
          {challengeDetails && challengeDaysList()}
        </Grid>
      </section>
    </div>
  );
};
