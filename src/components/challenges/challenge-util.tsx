export type DayDetails = {
  Day: string;
  Description: string;
};

export interface ChallengeListProps {
  ChallengeID: string;
  ChallengeName: string;
  Description: string;
  ImageURL: string;
  DayDetails: DayDetails[];
}

export interface UserChallengesDetailsProps {
  UserID: string;
  ChallengeID: string;
  StartDate: string;
  CompletedTasks: CompletedTasks;
}

export type CompletedTasks = {
  [ChallengeID: string]: string;
};

export type UserStatisticsType = {
  UserID: string;
  Coins: number;
  CompletedChallenges: number;
  EnrolledChallenges: number;
};

export interface UserDetailsProps {
  userDetails: UserDetailsType;
  userStatistics: UserStatisticsType;
}

export interface UserDetailsType {
  Email: string;
  Gender: string;
  Name: {
    FirstName: string;
    LastName: string;
  };
  UserID: string;
}

export interface UserStatisticsProps {
  userStatistics: UserDetailsType;
}
