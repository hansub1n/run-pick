'use client';
import CompltedChallengesSection from '@/components/my-page/CompltedChallengesSection';
import FavoriteVideosSection from '@/components/my-page/FavoriteVideosSection';
import MonthlyStatsSection from '@/components/my-page/MonthlyStatsSection';
import MyPostsSection from '@/components/my-page/MyPostsSection';
import UserProfileSection from '@/components/my-page/UserProfileSection';

const MyPage = () => {
  return (
    <div className='w-[313px] flex flex-col py-[23px]'>
      <UserProfileSection />
      <MonthlyStatsSection />
      <section className='font-semibold flex flex-col gap-[15px]'>
        <CompltedChallengesSection />
        <FavoriteVideosSection />
        <MyPostsSection />
      </section>
    </div>
  );
};

export default MyPage;
