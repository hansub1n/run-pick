import { QUERY_KEYS } from '@/hooks/queries/queryKeys';
import { insertUserChallenge } from '@/services/challenges/insertUserChallenge';
import { useModalStore } from '@/stores/useModalStore';
import { useUserStore } from '@/stores/useUserStore';
import { Challenge } from '@/types/challenges.types';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

type ConfirmChallengeRegisterProps = {
  selectedChallenge: null | Challenge;
  onClick: () => void;
};

const ConfirmChallengeRegister = ({ selectedChallenge, onClick }: ConfirmChallengeRegisterProps) => {
  const { id } = useUserStore();
  const { close } = useModalStore();
  const router = useRouter();
  const queryClient = useQueryClient();

  if (!selectedChallenge) return;

  const onClickHandler = async (userId: string, challengeId: number) => {
    await insertUserChallenge(userId, challengeId);
    await queryClient.invalidateQueries({ queryKey: QUERY_KEYS.activeChallenge(userId) });
    router.replace('/');
    close();
  };

  return (
    <div className='flex flex-col items-center text-center'>
      <h1 className='text-[20px] font-semibold'>{selectedChallenge.title}</h1>
      <p className='text-[#cccccc] font-medium'>주간 챌린지로 등록하시겠습니까?</p>
      <p className='text-[10px] text-[#787878] mt-[10px] leading-[1.4] font-medium'>
        등록한 챌린지는 일주일 후 변경 가능합니다
      </p>
      <div className='mt-[20px] flex gap-[18px] text-[14px] font-semibold'>
        <button
          onClick={onClick}
          className='cursor-pointer px-[35px] py-[7px] bg-[#414141] rounded-[10px] transition-colors hover:bg-[#333333]'
        >
          취소
        </button>
        <button
          onClick={() => onClickHandler(id, selectedChallenge.id)}
          className='cursor-pointer px-[35px] py-[7px] bg-[#007aff] rounded-[10px] transition-colors hover:bg-[#0066cc]'
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default ConfirmChallengeRegister;
