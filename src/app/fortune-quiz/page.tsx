'use client';

import FortuneQuiz from '@/components/fortune-quiz/FortuneQuiz';
import FortuneQuizButton from '@/components/fortune-quiz/FortuneQuizButton';
import FortuneQuizHeader from '@/components/fortune-quiz/FortuneQuizHeader';
import { useState } from 'react';

const FortuneQuizPage = () => {
  const [answer, setAnswer] = useState('');

  const onClickHandler = (value: string) => {
    setAnswer(value);
  };

  return (
    <div className='flex flex-col items-center pb-[23px]'>
      <div className='sticky w-[330px] top-[55px] pt-[7px] bg-[#1a1a1a] z-3'>
        <FortuneQuizHeader />
        <FortuneQuiz onClick={onClickHandler} />
        <FortuneQuizButton value={answer} />
      </div>
    </div>
  );
};

export default FortuneQuizPage;
