import { createClient } from '@/utils/supabase/client';
import { getPublicUserInfo } from '@/utils/supabase/user';

export const updateUserChallenge = async (runDistance: number) => {
  const client = createClient();
  const userInfo = await getPublicUserInfo();

  const { data, error: fetchError } = await client
    .from('user_challenges')
    .select(
      `id,
         challenge_id, 
         start_date, 
         end_date, 
         status, 
         progress_km, 
         run_count,
         completed_at, 
         challenges(id, type, target)`,
    )
    .eq('user_id', userInfo.id)
    .eq('status', 'in_progress')
    .maybeSingle();

  if (fetchError || !data) {
    console.error('DB fetch error: ', fetchError);
    return;
  }

  const today = new Date();
  const isExpired = today > new Date(data.end_date);
  const isDistance = data.challenges[0].type === 'distance';
  const target = data.challenges[0].target;

  const newProgressKm = data.progress_km + runDistance;
  const newRunCount = data.run_count + 1;

  let newStatus = data.status;
  let completedAt = data.completed_at;

  if (isExpired) {
    newStatus = 'expired';
  } else {
    const achieved = isDistance ? newProgressKm >= target : newRunCount >= target;

    if (achieved) {
      newStatus = 'completed';
      completedAt = today;
    }
  }

  const { error: updateError } = await client
    .from('user_challenges')
    .update({
      status: newStatus,
      progress_km: newProgressKm,
      run_count: newRunCount,
      completed_at: completedAt,
    })
    .eq('user_id', userInfo.id)
    .eq('id', data.id);

  if (updateError) {
    console.error('DB update error: ', updateError);
    return;
  }
};
