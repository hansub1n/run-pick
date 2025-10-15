'use client';
import MyFriends from '@/components/bottom-sheet/MyFriends';
import BottomSheet from '@/components/BottomSheet';
import CompltedChallengesSection from '@/components/my-page/CompltedChallengesSection';
import FavoriteVideosSection from '@/components/my-page/FavoriteVideosSection';
import MonthlyStatsSection from '@/components/my-page/MonthlyStatsSection';
import MyPostsSection from '@/components/my-page/MyPostsSection';
import UserProfileSection from '@/components/my-page/UserProfileSection';

type MyPageClientProps = {
  userId: string;
};
const MyPageClient = ({ userId }: MyPageClientProps) => {
  return (
    <>
      <div className='w-[313px] flex flex-col pt-[30px] pb-[23px]'>
        <UserProfileSection />
        <MonthlyStatsSection />
        <section className='font-semibold flex flex-col gap-[15px]'>
          <CompltedChallengesSection />
          <FavoriteVideosSection />
          <MyPostsSection />
        </section>
      </div>
      <BottomSheet>
        <MyFriends userId={userId} />
      </BottomSheet>
    </>
  );
};

export default MyPageClient;
