import { UserStatisticsType } from '../components/challenges/challenge-util';
import { axiosInstance } from '../utils/axios-instance';
import { ApiUrl } from '../utils/url-constants';

/**
 * Get All user statistics data
 */
export const getUserStatisticsData = (
  userId: string,
): Promise<UserStatisticsType> =>
  axiosInstance.post(ApiUrl.GET_USER_STATISTICS, {
    UserID: userId,
  });

/**
 * Update the User coins
 */
export const updateCoins = (
  userId: string,
  coins: number,
): Promise<UserStatisticsType> =>
  axiosInstance.post(ApiUrl.UPDATE_COINS, {
    UserID: userId,
    Coins: coins,
  });

/**
 * Update the total completed challenges
 */
export const updateCompletedChallenges = (
  userId: string,
  completedChallenges: number,
): Promise<UserStatisticsType> =>
  axiosInstance.post(ApiUrl.UPDATE_COMPLETED_CHALLENGES, {
    UserID: userId,
    CompletedChallenges: completedChallenges,
  });

/**
 * Update the total enrolled challenges
 */
export const updateEnrolledChallenges = (
  userId: string,
  enrolledChallenges: number,
): Promise<UserStatisticsType> =>
  axiosInstance.post(ApiUrl.UPDATE_ENROLLED_CHALLENGES, {
    UserID: userId,
    EnrolledChallenges: enrolledChallenges,
  });
