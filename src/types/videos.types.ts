export type SortOption = 'default' | 'proof' | 'favorite';

export type Distance = '3km' | '5km' | '10km';

export type Category = 'music' | 'vlog' | 'training' | 'info' | 'motivation';

export type Behavior = {
  videoId: string;
  viewStartTime: number;
  viewTime: number;
  clicked: boolean;
  category: Category;
};

export type BehaviorLogs = Behavior[];

export type YoutubeItems = {
  kind: string;
  etag: string;
  id: Object;
  snippet: Object;
};

export type YoutubeVideo = {
  id: string;
  snippet: {
    channelId: string;
    title: string;
    thumbnails: {
      default: ThumbnailDetail; // 120 * 90
      high: ThumbnailDetail; // 480 * 360
      maxres: ThumbnailDetail; // 1280 * 720
      medium: ThumbnailDetail; // 320 * 180
      standard: ThumbnailDetail; // 640 * 480
    };
  };
  contentDetails: {
    duration: string;
  };
  category: Category;
};

export type ThumbnailDetail = { url: string; width: number; height: number };

export type DBVideo = {
  id: number;
  youtube_video_id: string;
  title: string;
  thumbnail_url: string;
  distance_category: number;
  duration: string;
  favorite_count: number;
  post_count: number;
  video_category: Category;
};
