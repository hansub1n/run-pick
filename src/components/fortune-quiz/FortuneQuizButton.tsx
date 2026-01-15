import { number } from 'framer-motion';
import { label } from 'framer-motion/client';
import { useRouter, useSearchParams } from 'next/navigation';

const TOTAL_QUESTIONS = 5;

const BUTTON_LABELS = {
  start: '시작하기',
  next: '다음',
  end: '결과 확인',
} as const;

const FortuneQuizButton = ({ value }: { value: string }) => {
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

    const prev = JSON.parse(sessionStorage.getItem('fortune-quiz') || '[]');
    sessionStorage.setItem('fortune-quiz', JSON.stringify([...prev, answer]));
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
    <button
      onClick={onClickHandler}
      disabled={step > 0 && !value}
    >
      {BUTTON_LABELS[buttonType]}
    </button>
  );
};

export default FortuneQuizButton;
