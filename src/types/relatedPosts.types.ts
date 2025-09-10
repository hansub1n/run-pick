import { Condition, Duration } from './runProofForm.types';

export type RelatedPosts = RelatedPost[];

export type RelatedPost = {
  id: number;
  condition: Condition;
  content: string;
  created_at: string;
  distance_km: number;
  duration: Duration;
  image_url: string;
  run_date: string;
  user_id: string;
  youtube_video_id: string;
};
