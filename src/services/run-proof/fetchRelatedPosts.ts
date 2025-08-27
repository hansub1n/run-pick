import { createClient } from '@/utils/supabase/client';
import { ParamValue } from 'next/dist/server/request/params';

export const fetchRelatedPosts = async (videoId: ParamValue) => {
  const client = createClient();

  const { data, error } = await client.from('running_proof_posts').select('*').eq('youtube_video_id', videoId);

  if (error) {
    console.error('Failed to fetch running_proof_posts: ', error);
    return;
  }

  return data;
};
