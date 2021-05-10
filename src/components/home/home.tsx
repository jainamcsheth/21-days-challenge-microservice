/* eslint-disable no-console */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChallengeDetails } from '../challenges/chalenge-details/challenge-details';
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
  const [readChallengeApiResponse, setReadChallengeApiResponse] = useState({});
  const [
    readUserChallengesApiResponse,
    setUserChallengesApiResponse,
  ] = useState({});

  const someMethod = (response: any) => {
    console.log('any: ', response);
  };

  const getAllChallengeDetail = () =>
    axios
      .get(
        'https://oe2ix8xjv4.execute-api.us-west-2.amazonaws.com/default/microservices-challenge-read',
      )
      .then((response) => {
        someMethod(response);
      })
      .catch((error) => {
        console.error(
          'There was an error while calling lambda api - function:microservices-challenge-read!',
          error,
        );
      });

  const getUserChallenges = () =>
    axios
      .post(
        'https://eewgl4dav1.execute-api.us-west-2.amazonaws.com/default/microservices-user-getUserChallenges',
        {
          UserID: userId,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.error(
          'There was an error while calling lambda api - function:microservices-challenge-read!',
          error,
        );
      });

  const buildObject = (challengesData: any, userChallenges: any) => {
    console.log('build method', challengesData);
    console.log('build method', userChallenges);
  };
  const mainApiRequest = async () => {
    const challengesData = await getAllChallengeDetail();
    const userChallenges = await getUserChallenges();
    buildObject(challengesData, userChallenges);
  };

  useEffect(() => {
    mainApiRequest();
    console.log(readChallengeApiResponse);
    console.log(readUserChallengesApiResponse);
  });

  return (
    <>
      <Routes>
        <Route path="/challenge/:challengeID" element={<ChallengeDetails />} />
        <Route
          path="/challenge/:challengeID/:dayNumber"
          element={<DayChallenge />}
        />
        <Route path="/*" element={<Challenges />} />
      </Routes>
    </>
  );
};
