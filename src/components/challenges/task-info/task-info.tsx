import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { completeTask } from '../../../services/user-service';
import {
  updateCoins,
  updateCompletedChallenges,
} from '../../../services/user-statistics-service';
import { getUserID } from '../../../utils';
import { BackButton } from '../../../widgets/back-button/back-button';
import { Loader } from '../../../widgets/loader/loader';
import {
  ChallengeListProps,
  getCurrentChallengeDetails,
  getCurrentUserChallengeDetails,
  UserChallengesDetailsProps,
  UserStatisticsType,
} from '../challenge-util';
import styles from './task-info.module.scss';

interface TaskInfoProps {
  /**
   * Challenge data
   */
  challenges: ChallengeListProps[];

  /**
   * Challenge details of the user like start date, completed tasks, etc
   */
  userChallengeDetails: UserChallengesDetailsProps[];

  /**
   * All User Statistics data
   */
  userStatistics: UserStatisticsType;

  /**
   * Used to refetch the data in home component.
   * This will be called on back navigate.
   */
  refetchApi?: () => void;
}

export const TaskInfo: React.FC<TaskInfoProps> = ({
  challenges,
  userChallengeDetails,
  userStatistics,
  refetchApi,
}) => {
  const navigate = useNavigate();
  const { ChallengeID, dayNumber: dayNumberParam } = useParams();
  const dayNumber = parseInt(dayNumberParam, 10) - 1;
  const userId = getUserID();

  const [challengeDetails, setChallengeDetails] = useState<ChallengeListProps>(
    {} as ChallengeListProps,
  );
  const { ChallengeName, DayDetails, Description, ImageURL } = challengeDetails;

  const [isLoading, setIsLoading] = useState(false);
  const [isInvalidID, setIsInvalidID] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (challenges.length === 0) {
      return;
    }

    const challengeDetailsFromID = getCurrentChallengeDetails(
      challenges,
      ChallengeID,
    );
    if (dayNumber < 21 && challengeDetailsFromID) {
      setChallengeDetails(challengeDetailsFromID);
      setIsInvalidID(false);
    } else {
      // No challenge with the given ID, reditect to homepage.
      setIsInvalidID(true);
    }
  }, [ChallengeID, challenges, dayNumber]);

  useEffect(() => {
    // No challenge with the given ID, reditect to homepage.
    if (isInvalidID === true) {
      navigate('/challenge');
    }
  }, [isInvalidID, navigate]);

  useEffect(() => {
    if (userChallengeDetails) {
      const currentUserChallengeData = getCurrentUserChallengeDetails(
        userChallengeDetails,
        ChallengeID,
      );
      if (
        dayNumberParam &&
        currentUserChallengeData?.CompletedTasks[dayNumberParam]
      ) {
        setIsCompleted(true);
      }
    }
  }, [ChallengeID, dayNumberParam, userChallengeDetails]);

  if (Object.keys(challengeDetails).length === 0) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const updateIfChallengeCompleted = () => {
    const currentUserChallengeData = getCurrentUserChallengeDetails(
      userChallengeDetails,
      ChallengeID,
    );
    if (Object.keys(currentUserChallengeData!.CompletedTasks!).length === 20) {
      const completedChallenges = userStatistics.CompletedChallenges + 1;
      updateCompletedChallenges(userId!, completedChallenges);
    }
  };

  const completeCurrentTask = () => {
    setIsLoading(true);
    completeTask(userId!, ChallengeID, dayNumberParam)
      .then(() => {
        setIsLoading(false);
        setIsCompleted(true);
        updateIfChallengeCompleted();
      })
      .then(() => {
        const updatedCoins = userStatistics.Coins + 5;
        updateCoins(userId!, updatedCoins);
      });
  };

  const showCompleteButton = (
    <Button
      variant="outlined"
      color="primary"
      onClick={completeCurrentTask}
      className={styles.completeChallengeBtn}
      disabled={isLoading}
    >
      {isLoading ? <Loader /> : 'Complete Challenge | 5 coins'}
    </Button>
  );

  const showCompletedInfo = (
    <Alert severity="success">Challenge Completed</Alert>
  );

  return (
    <div className={styles.dayChallengeWrapper}>
      <BackButton refetchApi={refetchApi} />

      <div className={styles.row}>
        <div className={styles.challengeHeader}>
          <h1>{ChallengeName}</h1>
          <img
            src={ImageURL}
            alt={ChallengeName}
            className={styles.challengeImage}
          />
          <p>{Description}</p>
        </div>

        <div className={styles.challengeCardWrapper}>
          <p className={styles.info}>Checkout todays challenge below</p>
          <div className={styles.challengeCard}>
            <p>{DayDetails[dayNumber]?.Description}</p>
          </div>
          <div className={styles.completeStatus}>
            {isCompleted ? showCompletedInfo : showCompleteButton}
          </div>
        </div>
      </div>
    </div>
  );
};
