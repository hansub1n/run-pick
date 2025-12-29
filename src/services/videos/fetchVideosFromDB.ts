import { convertDistanceToNumber } from '@/utils/convertDistanceToNumber';
import { createClient } from '@/utils/supabase/server';

export const fetchVideosFromDB = async (distance: string, page: number, pageSize = 10) => {
  const distanceValue = convertDistanceToNumber(distance);
  const client = await createClient();

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, error, count } = await client
    .from('video_with_counts')
    .select('*', { count: 'exact' })
    .eq('distance_category', distanceValue)
    .range(from, to);

  if (error) {
    console.error('Failed to fetch videos: ', error);

    return {
      videos: [],
      nextPage: null,
    };
  }

  const hasNextPage = count !== null && to + 1 < count;

  return {
    videos: data ?? [],
    nextPage: hasNextPage ? page + 1 : null,
  };
};
