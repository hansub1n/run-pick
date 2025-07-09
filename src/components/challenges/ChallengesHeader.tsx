'use client';
import { useState } from 'react';
import { FaQuestion } from 'react-icons/fa6';

const ChallengesHeader = () => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const onClickhandler = () => setIsInfoVisible(!isInfoVisible);
  return (
    <header className='flex items-end gap-[4px] mb-[7px]'>
      <h1 className='font-semibold text-[20px] leading-[24px] '>주간 챌린지</h1>
      <div className='flex items-end gap-[2px]'>
        <FaQuestion
          onClick={onClickhandler}
          className='text-[12px] bg-[#D9D9D9] p-[3px] rounded-full'
        />
        <p
          className={`font-medium text-[8px] px-[8px] py-[5px] rounded-[10px] bg-[#D9D9D9] transition-opacity duration-300 ${
            isInfoVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          기본 : 처음 시작하는 사람도 부담 없이 참여할 수 있는 챌린지
          <br />
          도전 : 약간의 꾸준함이 필요한 챌린지
          <br />
          열정 : 습관을 이미 만든 러너를 위한 강도 높은 챌린지
        </p>
      </div>
    </header>
  );
};

export default ChallengesHeader;
