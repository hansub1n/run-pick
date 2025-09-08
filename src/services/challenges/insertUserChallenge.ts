'use client';
import { getStartAndEndDate } from '@/utils/getStartAndEndDate';
import { createClient } from '@/utils/supabase/client';
import { getPublicUserInfo } from '@/utils/supabase/user';

export const insertUserChallenge = async (challengeId: number) => {
  const { startDate, endDate } = getStartAndEndDate();
  const client = createClient();
  const userInfo = await getPublicUserInfo();

  const { data, error: fetchError } = await client
    .from('user_challenges')
    .select('id, end_date')
    .eq('user_id', userInfo.id)
    .eq('status', 'in_progress')
    .maybeSingle();

  if (fetchError) {
    console.error('DB fetch error: ', fetchError);
    return;
  }

  const now = new Date();

  if (data && new Date(data.end_date) > now) {
    alert('이미 등록된 챌린지가 존재합니다.');
    return;
  }

  const { error } = await client.from('user_challenges').insert({
    challenge_id: challengeId,
    user_id: userInfo.id,
    start_date: startDate,
    end_date: endDate,
    status: 'in_progress',
    progress_km: 0,
    run_count: 0,
    completed_at: null,
  });

  if (error) {
    console.error('DB insert error:', error);
    return;
  }

  alert('챌린지가 성공적으로 등록되었습니다!');
};
