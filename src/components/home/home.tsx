import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChallengeDetails } from '../challenges/chalenge-details/challenge-details';
import { Challenges } from '../challenges/challenges';

// API CALL
// - challenges
// - usersDetails
// -

// 1st route -
// 2nd route - user personal data, all

export const Home: React.FC = () => (
  <>
    <Routes>
      <Route path="/challenge/:id" element={<ChallengeDetails />} />
      <Route path="*" element={<Challenges />} />
    </Routes>
  </>
);
