import { getCurrentMonthRange } from '@/utils/getCurrnetMonthRange';
import { createClient } from '@/utils/supabase/client';

export const fetchTopRunners = async () => {
  const client = createClient();
  const { startOfMonth, endOfMonth } = getCurrentMonthRange();

  const { data, error } = await client
    .from('running_proof_posts')
    .select('distance_km, info:users!user_id(id, nickname, profile_img_url)')
    .gte('run_date', startOfMonth.toISOString())
    .lte('run_date', endOfMonth.toISOString());

  if (error) {
    console.error('Failed to fetch error: ', error);
  }

  const userDistanceMap: Record<string, { nickname: string; profileImgUrl: string; totalDistance: number }> = {};

  data?.forEach(({ distance_km, info }) => {
    const {
      id: userId,
      nickname,
      profile_img_url: profileImgUrl,
    } = info as unknown as {
      id: string;
      nickname: string;
      profile_img_url: string;
    };

    if (!userDistanceMap[userId]) {
      userDistanceMap[userId] = { nickname, profileImgUrl, totalDistance: 0 };
    }

    userDistanceMap[userId].totalDistance += distance_km;
  });

  const topRunners = Object.entries(userDistanceMap).sort((a, b) => b[1].totalDistance - a[1].totalDistance);

  return topRunners;
};
