export type DayDetails = {
  /**
   * Day number
   */
  Day: string;

  /**
   * Description of the Task to be completed
   */
  Description: string;
};

export interface ChallengeListProps {
  /**
   * ID of the challenge
   */
  ChallengeID: string;

  /**
   * Challenge name
   */
  ChallengeName: string;

  /**
   * Short description about the challenge
   */
  Description: string;

  /**
   * Challenge Image url
   */
  ImageURL: string;

  /**
   * Array of 21 days which contains the task details for each day
   */
  DayDetails: DayDetails[];
}

export interface UserChallengesDetailsProps {
  /**
   * Id of the user
   */
  UserID: string;

  /**
   * Id of the challenge
   */
  ChallengeID: string;

  /**
   * Date when the challenge started
   */
  StartDate: string;

  /**
   * Object of tasks which are completed
   */
  CompletedTasks: CompletedTasks;
}

export type CompletedTasks = {
  /**
   * Completed task day number as 'completed'
   */
  [dayNo: string]: string;
};

export type UserStatisticsType = {
  /**
   * Id of the user
   */
  UserID: string;

  /**
   * Total reward/coins
   */
  Coins: number;

  /**
   * Number of completed challenges.
   * A challenge is called completed when all of the tasks inside it are completed
   */
  CompletedChallenges: number;

  /**
   * Total number of challenges enrolled by the user
   */
  EnrolledChallenges: number;
};

export interface UserDetailsProps {
  /**
   * User details data
   */
  userDetails: UserDetailsType;

  /**
   * User Statistics data
   */
  userStatistics: UserStatisticsType;
}

export interface UserDetailsType {
  /**
   * Email id of the user
   */
  Email: string;

  /**
   * Gender of the user
   */
  Gender: string;

  /**
   * User Full name
   */
  Name: {
    FirstName: string;
    LastName: string;
  };

  /**
   * Unique user id, also referred as username
   */
  UserID: string;
}

/**
 * Finds and return the Current Challenge details from the list of challenges. Returns undefined if not found.
 * @param challengesData Entire challenges data
 * @param challengeID Specific ID
 * @returns Returns the current challnege data or undefined
 */
export const getCurrentChallengeDetails = (
  challengesData: ChallengeListProps[],
  challengeID: string,
): ChallengeListProps | undefined =>
  challengesData.find((challenge) => challenge.ChallengeID === challengeID);

/**
 * Finds and return the Current Challenge details from the list of challenges. Returns undefined if not found.
 * @param challengesData Entire challenges data
 * @param challengeID Specific ID
 * @returns Returns the current challnege data or undefined
 */
export const getCurrentUserChallengeDetails = (
  userChallengesData: UserChallengesDetailsProps[],
  challengeID: string,
): UserChallengesDetailsProps | undefined =>
  userChallengesData.find(
    (userChallenge) => userChallenge.ChallengeID === challengeID,
  );
