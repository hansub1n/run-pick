import { Distance } from '@/types/videos.types';
import { fetchVideosFromYoutube } from '@/services/videos/fetchVideosFromYoutube';
import { upsertVideos } from '@/services/videos/upsertVideos';

const distances: Distance[] = ['3km', '5km', '10km'];

export const refreshVideos = async () => {
  const results = await Promise.all(
    distances.map(async (distance) => {
      const videos = await fetchVideosFromYoutube(distance);
      await upsertVideos(videos, distance);
      return videos.length;
    }),
  );

  const totalCount = results.reduce((sum, count) => sum + count, 0);
  return totalCount;
};
