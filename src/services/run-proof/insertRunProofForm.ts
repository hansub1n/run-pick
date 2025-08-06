'use client';

import { RunProofForm } from '@/components/run-proof/RunProofForm';
import { DBVideo } from '@/types/videos.types';
import { createClient } from '@/utils/supabase/client';
import { getPublicUserInfo } from '@/utils/supabase/user';

type insertRunProofFormProps = {
  videoDetail: DBVideo | null;
  runProofForm: RunProofForm;
};

export const insertRunProofForm = async ({ videoDetail, runProofForm }: insertRunProofFormProps) => {
  const client = createClient();
  const userInfo = await getPublicUserInfo();

  const { error } = await client.from('running_proof_posts').insert({
    youtube_video_id: videoDetail?.youtube_video_id,
    user_id: userInfo.id,
    content: runProofForm.content,
    distance_km: runProofForm.distance_km,
    distance_category: videoDetail?.distance_category,
    duration: runProofForm.duration,
    run_date: new Date(),
    image_url: runProofForm.image_url,
  });

  if (error) {
    console.error('DB insert error: ', error);
    return;
  }
};
