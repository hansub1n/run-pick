import { ChallengeType } from './challenges.types';

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
