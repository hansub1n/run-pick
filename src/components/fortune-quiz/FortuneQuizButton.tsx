import { useRouter, useSearchParams } from 'next/navigation';

const TOTAL_QUESTIONS = 5;

const BUTTON_LABELS = {
  start: '시작하기',
  next: '다음',
  end: '결과 확인',
};

type FortuneQuizButtonProps = {
  value: string;
  resetAnswer: () => void;
};
const FortuneQuizButton = ({ value, resetAnswer }: FortuneQuizButtonProps) => {
  const params = useSearchParams();
  const router = useRouter();

  const step = Number(params.get('step')) || 0;

  const getButtonType = () => {
    if (step === 0) return 'start';
    if (step < TOTAL_QUESTIONS) return 'next';
    return 'end';
  };

  const saveAnswer = (answer?: string) => {
    if (!answer) return;

    const prev = JSON.parse(sessionStorage.getItem('fortune-quiz') || '{}');

    if (prev[step] === answer) return;

    const next = {
      ...prev,
      [step]: answer,
    };

    sessionStorage.setItem('fortune-quiz', JSON.stringify(next));
    resetAnswer();
  };

  const onClickHandler = () => {
    const type = getButtonType();

    if (type === 'start') {
      router.push('/fortune-quiz?step=1');
      return;
    }

    saveAnswer(value);

    if (type === 'next') {
      router.push(`/fortune-quiz?step=${step + 1}`);
      return;
    }

    router.push('/fortune-quiz/result');
  };

  const buttonType = getButtonType();

  return (
    <div className='mt-4'>
      <button
        onClick={onClickHandler}
        disabled={step > 0 && !value}
        className={`
            cursor-pointer
            w-full py-3 rounded-2xl font-semibold text-lg text-white
            bg-[#007AFF] shadow-lg
            transition-all duration-200
            active:scale-[0.97]
            hover:bg-[#0066CC]
            hover:brightness-110
            disabled:opacity-40
            disabled:cursor-not-allowed
            disabled:shadow-none
          `}
      >
        {BUTTON_LABELS[buttonType]}
      </button>
    </div>
  );
};

export default FortuneQuizButton;
