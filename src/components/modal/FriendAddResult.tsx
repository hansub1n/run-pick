import { useModalStore } from '@/stores/useModalStore';
import { FRIEND_ADD_RESPONSE } from '../my-page/MyPageClient';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/hooks/queries/queryKeys';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/stores/useUserStore';

type FriendAddResultProps = {
  friendStatus: number;
  friendNickname?: string;
};

const FriendAddResult = ({ friendStatus, friendNickname }: FriendAddResultProps) => {
  const router = useRouter();
  const { id: userId } = useUserStore();
  const { close } = useModalStore();
  const { success: isSuccess, message } = FRIEND_ADD_RESPONSE[friendStatus];
  const queryClient = useQueryClient();

  const onClickHandler = () => {
    queryClient.invalidateQueries({ queryKey: QUERY_KEYS.friends(userId) });
    router.replace('/my-page');
    close();
  };

  return (
    <div className='flex flex-col items-center text-center'>
      <h1 className='text-[20px] font-semibold'>{isSuccess ? '친구 추가 성공' : '친구 추가 실패'}</h1>
      {isSuccess ? (
        <div className='mt-2 leading-[1.6] text-center'>
          <p className='text-[15px] text-[#B5B5B5]'>
            새로운 친구 <span className='text-[#FAFAFA] font-semibold'>{friendNickname}</span>
            님을 추가했어요!
          </p>
          <p className='text-[12px] text-[#787878] mt-[3px]'>친구 목록에서 바로 확인해보세요.</p>
        </div>
      ) : (
        <p className='text-[14px] mt-2 leading-[1.6] text-[#B5B5B5]'>{message}</p>
      )}
      <button
        onClick={onClickHandler}
        className='mt-[20px] text-[14px] font-semibold px-[40px] py-[8px] bg-[#007AFF] rounded-[10px] transition-colors hover:bg-[#0066CC]'
      >
        확인
      </button>
    </div>
  );
};

export default FriendAddResult;
