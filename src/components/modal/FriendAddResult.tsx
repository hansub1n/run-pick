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
    <div className='flex flex-col items-center font-semibold text-center'>
      <h1 className='text-[20px]'>{isSuccess ? '친구 추가 성공' : '친구 추가 실패'}</h1>
      {isSuccess ? (
        <>
          <p className='text-[14px] mt-2 leading-[1.5]'>
            {friendNickname}
            <br />
            {message}
          </p>
          <p className='text-[10px] text-[#cccccc] mt-[10px] leading-[1.4]'>
            친구 목록에서 새로 추가된 친구를 확인할 수 있습니다.
          </p>
        </>
      ) : (
        <p className='text-[14px] mt-2 leading-[1.5] text-gray-700'>{message}</p>
      )}
      <button
        onClick={onClickHandler}
        className='mt-[20px] text-[14px] px-[35px] py-[7px] bg-[#007aff] rounded-[10px] transition-colors hover:bg-[#0066cc]'
      >
        확인
      </button>
    </div>
  );
};

export default FriendAddResult;
