import {
  UserChallengesDetailsProps,
  UserDetailsType,
} from '../components/challenges/challenge-util';
import { axiosInstance } from '../utils/axios-instance';
import { ApiUrl } from '../utils/url-constants';

/**
 * Gets all Challenges data specific to the user
 */
export const getUserChallengesData = (
  userId: string,
): Promise<UserChallengesDetailsProps[]> =>
  axiosInstance.post(ApiUrl.GET_USER_CHALLENGES, {
    UserID: userId,
  });

/**
 * Gets all User data
 */
export const getUserDetailsData = (userId: string): Promise<UserDetailsType> =>
  axiosInstance.post(ApiUrl.GET_USER_DETAILS, {
    UserID: userId,
  });

/**
 * Updates User DB with current challenge as started
 */
export const startChallenge = (
  userId: string,
  challengeId: string,
): Promise<void> =>
  axiosInstance.post(ApiUrl.START_CHALLENGE, {
    UserID: userId,
    ChallengeID: challengeId,
  });

/**
 * Marks the given task/day as completed for that particular challenge
 */
export const completeTask = (
  userId: string,
  challengeId: string,
  taskNo: string,
): Promise<void> =>
  axiosInstance.post(ApiUrl.COMPLETE_TASK, {
    UserID: userId,
    ChallengeID: challengeId,
    TaskNo: taskNo,
  });
