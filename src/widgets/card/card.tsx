import cx from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router';
import { getDaysDifference } from '../../utils';
import { axiosInstance } from '../../utils/axios-instance';
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
}

const START_CHALLENGE_URL =
  'https://8qh2u27nuj.execute-api.us-west-2.amazonaws.com/default/microservices-user-startChallenge';

export const Card: React.FC<CardProps> = ({
  ChallengeID,
  name,
  isStarted = false,
  imageUrl,
  description,
  startDate,
  bgNo = '1',
}) => {
  const navigate = useNavigate();

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

  const startChallenge = () =>
    axiosInstance.post(START_CHALLENGE_URL, {
      UserID: 'testApi2',
      ChallengeID,
    });

  const handleCardClick = () => {
    if (!isStarted) {
      startChallenge();
    }
    navigate(`/challenge/${ChallengeID}`);
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
          {isStarted ? 'OPEN' : 'START'}
        </button>
      </div>
    </div>
  );
};
