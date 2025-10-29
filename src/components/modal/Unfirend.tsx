import { QUERY_KEYS } from '@/hooks/queries/queryKeys';
import { deleteFriend } from '@/services/my-friend/deleteFriend';
import { useModalStore } from '@/stores/useModalStore';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

type UnfriendProps = {
  myId: string;
  friendId: string;
  friendNickname: string;
};
const Unfirend = ({ myId, friendId, friendNickname }: UnfriendProps) => {
  const { close } = useModalStore();
  const router = useRouter();
  const queryClient = useQueryClient();

  const onClickHandler = async () => {
    await deleteFriend(myId, friendId);
    await queryClient.invalidateQueries({ queryKey: QUERY_KEYS.friends(myId) });
    router.replace('/my-page');
    close();
  };

  return (
    <div className='flex flex-col items-center font-semibold'>
      <h1 className='text-[20px] mb-[10px]'>친구 끊기</h1>
      <p className='text-center text-[14px] mt-2 leading-[1.5] text-[#787878]'>
        {`'${friendNickname}'님과의 친구 관계를`}
        <br />
        정말 끊으시겠습니까?
      </p>
      <div className='mt-[20px] flex gap-[18px] text-[14px]'>
        <button
          onClick={close}
          className='cursor-pointer px-[35px] py-[7px] bg-[#414141] rounded-[10px]'
        >
          취소
        </button>
        <button
          onClick={onClickHandler}
          className='cursor-pointer px-[35px] py-[7px] bg-[#007aff] rounded-[10px]'
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Unfirend;
