import { useAuthStatus } from '@/hooks/queries/useAuthStatus';
import { insertUserChallenge } from '@/services/challenges/insertUserChallenge';
import { useModalStore } from '@/stores/useModalStore';
import { Challenge } from '@/types/challenges.types';
import { useRouter } from 'next/navigation';

type ConfirmChallengeRegisterProps = {
  selectedChallenge: null | Challenge;
  onClick: () => void;
};

const ConfirmChallengeRegister = ({ selectedChallenge, onClick }: ConfirmChallengeRegisterProps) => {
  const { close } = useModalStore();
  const { isSignedIn } = useAuthStatus();
  const router = useRouter();

  if (!isSignedIn) {
    router.replace('/login');
    return;
  }

  if (!selectedChallenge) return;

  const onClickHandler = (challengeId: number) => {
    insertUserChallenge(challengeId);
    router.replace('/');
    close();
  };

  return (
    <div className='flex flex-col items-center font-semibold text-center'>
      <h1 className='text-[20px]'>{`'${selectedChallenge.title}'`}</h1>
      <p>주간 챌린지로 등록하시겠습니까?</p>
      <p className='text-[10px] text-[#787878] mt-[10px] leading-[1.4]'>등록한 챌린지는 일주일 후 변경 가능합니다</p>
      <div className='mt-[20px] flex gap-[18px] text-[14px]'>
        <button
          onClick={onClick}
          className='px-[35px] py-[7px] bg-[#EAEAEA] rounded-[10px]'
        >
          취소
        </button>
        <button
          onClick={() => onClickHandler(selectedChallenge.id)}
          className='px-[35px] py-[7px] bg-[#AFAFAF] rounded-[10px]'
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default ConfirmChallengeRegister;
