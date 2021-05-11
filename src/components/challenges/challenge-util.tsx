export interface ChallengeListProps {
  ChallengeID: string;
  ChallengeName: string;
  Description: string;
  ImageURL: string;
}

export interface UserChallengesDetailsProps {
  UserID: string;
  ChallengeID: string;
  StartDate: Date;
  CompletedTasks: CompletedTasks;
}

export type CompletedTasks = {
  [ChallengeID: string]: string;
};
