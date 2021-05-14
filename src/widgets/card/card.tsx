import cx from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router';
import { UserStatisticsType } from '../../components/challenges/challenge-util';
import { startChallenge } from '../../services/user-service';
import { updateEnrolledChallenges } from '../../services/user-statistics-service';
import { getDaysDifference, getUserID } from '../../utils';
import styles from './card.module.scss';

interface CardProps {
  /**
   * Id of the challenge
   */
  ChallengeID: string;

  /**
   * Challenge Name
   */
  name: string;

  /**
   * Url of the challenge Image
   */
  imageUrl: string;

  /**
   * Is the Challenge started or not.
   * @default false
   */
  isStarted?: boolean;

  /**
   * Description of the challenge
   */
  description?: string;

  /**
   * Date when the challenge was started by the user
   */
  startDate?: string;

  /**
   * Background number to set card styling
   * @default '1'
   */
  bgNo?: string;

  /**
   * Is the challenge Completed.
   * @default false
   */
  isChallengeCompleted?: boolean;

  /**
   * User Statistics data
   */
  userStatistics: UserStatisticsType;

  /**
   * Used to refetch the data in home component.
   * This will be called on back navigate.
   */
  refetchApi?: () => void;
}

export const Card: React.FC<CardProps> = ({
  ChallengeID,
  name,
  isStarted = false,
  imageUrl,
  description,
  startDate,
  bgNo = '1',
  isChallengeCompleted = false,
  userStatistics,
  refetchApi,
}) => {
  const navigate = useNavigate();
  const userId = getUserID();

  const getChallengeStatus = () => {
    if (!startDate) {
      return 'Not Started';
    }

    const currentDay = getDaysDifference(new Date(), new Date(startDate));
    if (currentDay > 21) {
      return 'Done';
    }
    return `${currentDay}/21`;
  };

  const handleCardClick = () => {
    if (!isStarted) {
      // Update User DB with current challenge as started
      startChallenge(userId!, ChallengeID).then(() => {
        updateEnrolledChallenges(
          userId!,
          userStatistics.EnrolledChallenges + 1,
        ).then(() => {
          if (refetchApi) {
            refetchApi();
          }
        });
      });
    }
    navigate(`/challenge/${ChallengeID}`);
  };

  const buttonText = (): string => {
    if (isChallengeCompleted) {
      return 'COMPLETED';
    }
    if (isStarted) {
      return 'OPEN';
    }
    return 'START';
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={styles.card} onClick={() => handleCardClick()}>
      <div className={cx(styles.cardBody, styles[bgNo])}>
        <img className={styles.cardIcon} src={imageUrl} alt={name} />
        <h2 className={styles.cardHeading}>{name}</h2>
        {description && (
          <p className={cx('noMargin', styles.cardInfo)}>{description}</p>
        )}
      </div>

      <div className={styles.cardFooter}>
        <span className={styles.challengeStatus}>{getChallengeStatus()}</span>
        <button type="button" className={cx(styles.cardButton, styles[bgNo])}>
          {buttonText()}
        </button>
      </div>
    </div>
  );
};
