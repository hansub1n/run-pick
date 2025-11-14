'use client';

import { DBVideo } from '@/types/videos.types';
import { createClient } from '@/utils/supabase/client';
import { getPublicUserInfo } from '@/utils/supabase/client';
import { updateUserChallenge } from '../challenges/updateUserChallenge';
import { RunProofFormType } from '@/types/runProofForm.types';
import { toast } from 'react-toastify';

type insertRunProofFormProps = {
  videoDetail: DBVideo | null;
  runProofForm: RunProofFormType;
};

export const insertRunProofForm = async ({ videoDetail, runProofForm }: insertRunProofFormProps) => {
  const client = createClient();
  const userInfo = await getPublicUserInfo();

  const { error } = await client.from('running_proof_posts').insert({
    youtube_video_id: videoDetail?.youtube_video_id,
    user_id: userInfo.id,
    content: runProofForm.content,
    distance_km: runProofForm.distance_km,
    duration: runProofForm.duration,
    run_date: new Date(),
    image_url: runProofForm.image_url,
    condition: runProofForm.condition,
  });

  if (error) {
    console.error('DB insert error: ', error);
    return;
  }

  await updateUserChallenge(userInfo.id, runProofForm.distance_km);
  toast.info('인증글이 성공적으로 등록되었습니다!');
};
