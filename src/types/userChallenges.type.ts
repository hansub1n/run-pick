import { ChallengeType } from './challenges.types';

export type ActiveChallenge =
  | {
      id: number;
      status: Status;
      end_date: string;
      completed_at: string;
      info: {
        id: number;
        type: ChallengeType;
        target: number;
      }[];
      progress_km: number;
      run_count: number;
    }
  | UserChallenge
  | null;

export type UserChallenges = UserChallenge[];

export type UserChallenge = {
  id: number;
  end_date: string;
  status: Status;
  progress_km: number;
  run_count: number;
  completed_at: null | string | Date;
  info: Challenge;
};

export type Status = 'in_progress' | 'completed' | 'expired';

export type Challenge = {
  id: number;
  type: ChallengeType;
  target: number;
  title?: string;
  image_url?: string;
  description?: string;
};
