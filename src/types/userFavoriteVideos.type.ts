import { DBVideo } from './videos.types';

export type UserFavoriteVideos = UserFavoriteVideo[];

export type UserFavoriteVideo = {
  id: number;
  info: DBVideo;
};
