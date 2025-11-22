import ChallengePromptSection from '@/components/home/ChallengePromptSection';
import MotivationSection from '@/components/home/MotivationSection';
import TopRunnersSection from '@/components/home/TopRunnersSection';
import TopVideosSection from '@/components/home/TopVideosSection';
import { getPublicUserInfo } from '@/utils/supabase/server';

export default async function Home() {
  const userInfo = await getPublicUserInfo();

  return (
    <div className='w-[313px] flex flex-col gap-[23px] py-[23px]'>
      <MotivationSection userInfo={userInfo} />
      <TopVideosSection />
      <ChallengePromptSection />
      <TopRunnersSection userId={userInfo.id} />
    </div>
  );
}
