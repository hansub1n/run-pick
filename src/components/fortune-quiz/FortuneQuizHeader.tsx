import { useSearchParams } from 'next/navigation';

const FortuneQuizHeader = () => {
  const params = useSearchParams();
  const step = Number(params.get('step')) || 0;

  if (step !== 0)
    return (
      <header className='flex items-end gap-[4px] mb-[7px]'>
        <h1 className='font-semibold text-[20px] leading-[24px]'>오늘의 러닝 운세</h1>
      </header>
    );
};

export default FortuneQuizHeader;
