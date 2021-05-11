/* eslint-disable no-console */
// TODO Aditi: Remove consoles when not required.
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { axiosInstance } from '../../utils/axios-instance';
import { ChallengeDetails } from '../challenges/challenge-details/challenge-details';
import {
  ChallengeListProps,
  UserChallengesDetailsProps,
} from '../challenges/challenge-util';
import { Challenges } from '../challenges/challenges';
import { DayChallenge } from '../challenges/day-challenge/day-challenge';

interface HomeProps {
  userId: string;
}

// API CALL
// - challenges
// - usersDetails

// 1st route -
// 2nd route - user personal data, all

export const Home: React.FC<HomeProps> = ({ userId }: HomeProps) => {
  const [challengeList, setChallengeList] = useState<ChallengeListProps[]>([]);
  const [userChallengeDetails, setuserChallengeDetails] = useState<
    UserChallengesDetailsProps[]
  >([]);

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

  useEffect(() => {
    fetchUserAndChallengeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Routes>
        <Route path="/challenge/:ChallengeID" element={<ChallengeDetails />} />
        <Route
          path="/challenge/:ChallengeID/:dayNumber"
          element={<DayChallenge />}
        />
        <Route
          path="/*"
          element={
            <Challenges
              challenges={challengeList}
              userChallengeDetails={userChallengeDetails}
            />
          }
        />
      </Routes>
    </>
  );
};
