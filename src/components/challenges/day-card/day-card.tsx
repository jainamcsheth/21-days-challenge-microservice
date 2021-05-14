import { Card, CardActionArea, Grid, Paper, Tooltip } from '@material-ui/core';
import cx from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './day-card.module.scss';

export interface DayCardProps {
  /**
   * Current Day Number
   */
  dayNumber: string;

  /**
   * Current Challenge Number
   */
  ChallengeID: string;

  /**
   * Is this task completed
   * @default false
   */
  isCompleted?: boolean;

  /**
   * Is this card disabled
   * @default false
   */
  isDisabled?: boolean;
}

export const DayCard: React.FC<DayCardProps> = ({
  dayNumber,
  ChallengeID,
  isCompleted = false,
  isDisabled = false,
}) => {
  const navigate = useNavigate();

  const gotoChallengePage = (day: string, challenge: string) => {
    navigate(`/challenge/${challenge}/${day}`);
  };

  const cardClasses = cx(styles.dayCard, {
    [styles.completed]: isCompleted,
    [styles.disabled]: isDisabled,
  });

  const tooltipTextWhenDisabled = `You don't have permissions to view this challenge, come back on day ${dayNumber}`;

  return (
    <Grid item xs={3} sm={2}>
      <Tooltip
        title={isDisabled ? tooltipTextWhenDisabled : ''}
        placement="top"
        arrow
      >
        <Paper className={styles.paper} elevation={isDisabled ? 1 : 5}>
          <Card className={cardClasses}>
            <CardActionArea
              disabled={isDisabled}
              onClick={() => gotoChallengePage(dayNumber, ChallengeID)}
            >
              <div className={styles.cardActionArea}>
                Day <br />
                {dayNumber}
              </div>
            </CardActionArea>
          </Card>
        </Paper>
      </Tooltip>
    </Grid>
  );
};
