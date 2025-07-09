import { convertDistanceToNumber } from '@/utils/convertDistanceToNumber';
import { createClient } from '@/utils/supabase/server';

export const fetchVideosFromDB = async (distance: string) => {
  const distanceValue = convertDistanceToNumber(distance);
  const client = await createClient();

  const { data, error } = await client.from('videos').select('*').eq('distance_category', distanceValue);

  if (error) {
    console.error('Failed to fetch videos: ', error);
    return [];
  }

  return data ?? [];
};
