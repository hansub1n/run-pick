import ChallengePromptSection from '@/components/home/ChallengePromptSection';
import MotivationSection from '@/components/home/MotivationSection';
import TopRunnersSection from '@/components/home/TopRunnersSection';
import TopVideosSection from '@/components/home/TopVideosSection';

export default function Home() {
  return (
    <div className='w-[313px] flex flex-col gap-[23px] py-[23px]'>
      <MotivationSection />
      <TopVideosSection />
      <ChallengePromptSection />
      <TopRunnersSection />
    </div>
  );
}
