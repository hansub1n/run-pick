import { createClient } from '@/utils/supabase/client';
import { checkAndUpdateChallengeStatus } from './checkAndUpdateChallengeStatus';

export const updateUserChallenge = async (userId: string, runDistance: number) => {
  const client = createClient();

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
    .eq('user_id', userId)
    .eq('status', 'in_progress')
    .maybeSingle();

  if (fetchError || !data) {
    console.error('DB fetch error: ', fetchError);
    return;
  }

  const newProgressKm = data.progress_km + runDistance;
  const newRunCount = data.run_count + 1;

  const { error: updateError } = await client
    .from('user_challenges')
    .update({
      progress_km: newProgressKm,
      run_count: newRunCount,
    })
    .eq('id', data.id);

  if (updateError) {
    console.error('DB update error: ', updateError);
    return;
  }

  await checkAndUpdateChallengeStatus(userId);
};
