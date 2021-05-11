/* eslint-disable no-console */
// TODO Aditi: Remove consoles when not required.
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { axiosInstance } from '../../utils/axios-instance';
import { ChallengeDetails } from '../challenges/challenge-details/challenge-details';
import {
  ChallengeListProps,
  UserChallengesDetailsProps,
  UserDetailsType,
  UserStatisticsType,
} from '../challenges/challenge-util';
import { Challenges } from '../challenges/challenges';
import { DayChallenge } from '../challenges/day-challenge/day-challenge';

interface HomeProps {
  userId: string;
}

export const Home: React.FC<HomeProps> = ({ userId }: HomeProps) => {
  const [challengeList, setChallengeList] = useState<ChallengeListProps[]>([]);
  const [userChallengeDetails, setuserChallengeDetails] = useState<
    UserChallengesDetailsProps[]
  >([]);
  const [userStatistics, setUserStatistics] = useState<UserStatisticsType>(
    {} as UserStatisticsType,
  );
  const [userDetails, setUserDetails] = useState<UserDetailsType>(
    {} as UserDetailsType,
  );

  const getAllChallengesData = () =>
    axiosInstance.get(
      'https://oe2ix8xjv4.execute-api.us-west-2.amazonaws.com/default/microservices-challenge-read',
    );

  const getUserChallengesData = () =>
    axiosInstance.post(
      'https://eewgl4dav1.execute-api.us-west-2.amazonaws.com/default/microservices-user-getUserChallenges',
      {
        UserID: userId,
      },
    );

  const getUserStatisticsData = () =>
    axiosInstance.post(
      'https://4n34hjvoo6.execute-api.us-west-2.amazonaws.com/default/microservices-user-getUserStatistics',
      {
        UserID: userId,
      },
    );

  const getUserDetailsData = () =>
    axiosInstance.post(
      'https://xcmzy3zzv8.execute-api.us-west-2.amazonaws.com/default/microservices-user-getUserDetails',
      {
        UserID: userId,
      },
    );
  const fetchUserAndChallengeData = () => {
    Promise.all([getAllChallengesData(), getUserChallengesData()]).then(
      (userAndChallengesData) => {
        const challengesData = userAndChallengesData[0];
        const userChallenges = userAndChallengesData[1];

        setChallengeList(challengesData);
        setuserChallengeDetails(userChallenges);
      },
    );
  };

  const fetchUserDetailsandStatisticsData = () => {
    Promise.all([getUserDetailsData(), getUserStatisticsData()]).then(
      (data) => {
        const userDetailsData = data[0];
        const userStatisticsData = data[1];

        setUserDetails(userDetailsData);
        setUserStatistics(userStatisticsData);
      },
    );
  };

  useEffect(() => {
    fetchUserAndChallengeData();
    fetchUserDetailsandStatisticsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/challenge/:ChallengeID"
          element={<ChallengeDetails challenges={challengeList} />}
        />
        <Route
          path="/challenge/:ChallengeID/:dayNumber"
          element={<DayChallenge challenges={challengeList} />}
        />
        <Route
          path="/*"
          element={
            <Challenges
              userStatistics={userStatistics}
              userDetails={userDetails}
              challenges={challengeList}
              userChallengeDetails={userChallengeDetails}
            />
          }
        />
      </Routes>
    </>
  );
};
