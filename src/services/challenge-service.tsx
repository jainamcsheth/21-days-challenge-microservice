import { ChallengeListProps } from '../components/challenges/challenge-util';
import { axiosInstance } from '../utils/axios-instance';
import { ApiUrl } from '../utils/url-constants';

/**
 * Fetches all the Challenges data
 */
export const getAllChallengesData = (): Promise<ChallengeListProps[]> =>
  axiosInstance.get(ApiUrl.CHALLENGE_READ);
