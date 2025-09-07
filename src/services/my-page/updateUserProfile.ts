import { newProfile } from '@/types/newProfile.types';
import { createClient } from '@/utils/supabase/client';

export const updateUserProfile = async (id: string, newProfile: newProfile) => {
  const client = createClient();

  const { error } = await client
    .from('users')
    .update({
      profile_img_url: newProfile.profileImgUrl,
      nickname: newProfile.nickname,
    })
    .eq('id', id);

  if (error) {
    console.error('Failed to upload userProfile: ', error);
  }
};
