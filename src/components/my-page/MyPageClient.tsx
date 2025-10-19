'use client';
import MyFriends from '@/components/bottom-sheet/MyFriends';
import BottomSheet from '@/components/BottomSheet';
import CompltedChallengesSection from '@/components/my-page/CompltedChallengesSection';
import FavoriteVideosSection from '@/components/my-page/FavoriteVideosSection';
import MonthlyStatsSection from '@/components/my-page/MonthlyStatsSection';
import MyPostsSection from '@/components/my-page/MyPostsSection';
import UserProfileSection from '@/components/my-page/UserProfileSection';
import Modal from '../Modal';
import FriendAddResult from '../modal/FriendAddResult';
import { useModalStore } from '@/stores/useModalStore';
import { useEffect } from 'react';

type MyPageClientProps = {
  friendStatus?: string;
  friendNickname?: string;
};

export const FRIEND_ADD_RESPONSE: Record<number, { success: boolean; message: string }> = {
  200: {
    success: true,
    message: '새로운 친구가 추가되었습니다!',
  },
  400: {
    success: false,
    message: '자신을 친구로 추가할 수 없습니다.',
  },
  404: {
    success: false,
    message: '해당 유저를 찾을 수 없습니다.',
  },
  409: {
    success: false,
    message: '이미 친구로 등록된 상태입니다.',
  },
  500: {
    success: false,
    message: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
  },
};

const MyPageClient = ({ friendStatus, friendNickname }: MyPageClientProps) => {
  const status = friendStatus ? Number(friendStatus) : null;
  const { activeModal, open } = useModalStore();

  useEffect(() => {
    if (status && status in FRIEND_ADD_RESPONSE) {
      open('friend-add-result');
    }
  }, [status]);

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
        <MyFriends />
      </BottomSheet>

      {status && status in FRIEND_ADD_RESPONSE && (
        <Modal id={'friend-add-result'}>
          {activeModal === 'friend-add-result' && (
            <FriendAddResult
              friendStatus={status}
              friendNickname={friendNickname}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default MyPageClient;
