export type Distance = '3km' | '5km' | '10km';

export type Videos = Video[];

export type Video = {
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
};

export type ThumbnailDetail = { url: string; width: number; height: number };
