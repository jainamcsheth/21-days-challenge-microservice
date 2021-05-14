import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getAllChallengesData } from '../../services/challenge-service';
import {
  getUserChallengesData,
  getUserDetailsData,
} from '../../services/user-service';
import { getUserStatisticsData } from '../../services/user-statistics-service';
import { ChallengeDetails } from '../challenges/challenge-details/challenge-details';
import {
  ChallengeListProps,
  UserChallengesDetailsProps,
  UserDetailsType,
  UserStatisticsType,
} from '../challenges/challenge-util';
import { Challenges } from '../challenges/challenges';
import { TaskInfo } from '../challenges/task-info/task-info';

export const Home: React.FC = () => {
  const userId = sessionStorage.getItem('userId') || '';
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

  // Used to refetch the data. As the state updates, it will trigger the useeffect and inturn make the api call.
  const [refetchApiState, setRefetchApiState] = useState<boolean>(false);
  const refetchApi = () => setRefetchApiState(!refetchApiState);

  const fetchUserAndChallengeData = async () => {
    await Promise.all([
      getAllChallengesData(),
      getUserChallengesData(userId),
    ]).then(([challengesData, userChallenges]) => {
      setChallengeList(challengesData);
      setuserChallengeDetails(userChallenges);
    });
  };

  const fetchUserDetailsandStatisticsData = async () => {
    await Promise.all([
      getUserDetailsData(userId),
      getUserStatisticsData(userId),
    ]).then(([userDetailsData, userStatisticsData]) => {
      setUserDetails(userDetailsData);
      setUserStatistics(userStatisticsData);
    });
  };

  useEffect(() => {
    fetchUserAndChallengeData();
    fetchUserDetailsandStatisticsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetchApiState]);

  return (
    <Routes>
      <Route
        path="/challenge/:ChallengeID"
        element={
          <ChallengeDetails
            userChallengeDetails={userChallengeDetails}
            challenges={challengeList}
            refetchApi={refetchApi}
          />
        }
      />
      <Route
        path="/challenge/:ChallengeID/:dayNumber"
        element={
          <TaskInfo
            challenges={challengeList}
            refetchApi={refetchApi}
            userChallengeDetails={userChallengeDetails}
            userStatistics={userStatistics}
          />
        }
      />
      <Route
        path="/*"
        element={
          <Challenges
            userStatistics={userStatistics}
            userDetails={userDetails}
            challenges={challengeList}
            userChallengeDetails={userChallengeDetails}
            refetchApi={refetchApi}
          />
        }
      />
    </Routes>
  );
};
