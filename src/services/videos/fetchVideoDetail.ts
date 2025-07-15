import { createClient } from '@/utils/supabase/client';
import { ParamValue } from 'next/dist/server/request/params';

export const fetchVideoDetail = async (videoId: ParamValue) => {
  const client = createClient();
  const { data, error } = await client.from('videos').select('*').eq('id', videoId).single();

  if (error) {
    console.error('Failed to fetch video: ', error);
    return null;
  }

  return data;
};
