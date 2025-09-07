import { Challenge, UserChallenge } from '@/types/userChallenge.type';
import { createClient } from '@/utils/supabase/client';

export const checkAndUpdateChallengeStatus = async (userId: string) => {
  const client = createClient();

  const { data, error: fetchError } = await client
    .from('user_challenges')
    .select(`id, status, end_date, completed_at, challenges(id, type, target), progress_km, run_count`)
    .eq('user_id', userId)
    .eq('status', 'in_progress')
    .maybeSingle();

  if (fetchError || !data) {
    console.error('Failed to fetch user_challenges: ', fetchError);
    return null;
  }

  const challenge = data.challenges as Challenge;
  const today = new Date();
  const endDate = new Date(data.end_date);
  const isExpired = today >= endDate;

  const isDistance = challenge.type === 'distance';
  const target = challenge.target;

  const achieved = isDistance ? data.progress_km >= target : data.run_count >= target;

  let newStatus = data.status;
  let completedAt = data.completed_at;

  if (isExpired) {
    if (achieved) {
      newStatus = 'completed';
      completedAt = completedAt ?? today;
    } else {
      newStatus = 'expired';
    }
  } else if (achieved) {
    completedAt = completedAt ?? today;
  }

  if (newStatus !== data.status || completedAt !== data.completed_at) {
    const { error: updateError } = await client
      .from('user_challenges')
      .update({ status: newStatus, completed_at: completedAt })
      .eq('id', data.id);

    if (updateError) {
      console.error('Update error:', updateError);
    }

    const { data: updatedData } = await client
      .from('user_challenges')
      .select(`id, status, end_date, completed_at, challenges(id, type, target), progress_km, run_count`)
      .eq('id', data.id)
      .single();

    return updatedData;
  }

  console.log(data);
  return data as UserChallenge;
};
