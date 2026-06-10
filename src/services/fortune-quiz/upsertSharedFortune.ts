import { FortuneProfile } from '@/app/fortune-quiz/result/page';
import { createClient } from '@/utils/supabase/client';

export const upsertSharedFortune = async (fortune: FortuneProfile) => {
  const client = createClient();
  const { data, error } = await client
    .from('fortune_share')
    .upsert({
      id: fortune.id,
      title: fortune.title,
      description: fortune.description,
      luckyItems: fortune.luckyItems,
    })
    .select()
    .single();

  if (error) {
    console.error('DB insert error:', error);
    return;
  }

  return data.id;
};
