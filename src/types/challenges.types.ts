export type Challenges = {
  title: string;
  description: string;
  level: Level;
  type: ChallengeType;
  target: number;
  duration_days: number;
  image_url: string;
}[];

export type Level = '기본' | '도전' | '열정';

export type ChallengeType = 'distance' | 'count';
