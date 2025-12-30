'use client';
import ChallengeList from '@/components/challenges/ChallengeList';
import ChallengesHeader from '@/components/challenges/ChallengesHeader';
import ChallengeTabs from '@/components/challenges/ChallengeTabs';
import { Level } from '@/types/challenges.types';
import { useState } from 'react';

const ChallengesPage = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level>('기본');

  const handleLevelChange = (level: Level) => setSelectedLevel(level);
  return (
    <div className='flex flex-col items-center pb-[23px]'>
      <div className='sticky w-[330px] top-[55px] pt-[7px] bg-[#1a1a1a] z-3'>
        <ChallengesHeader />
        <ChallengeTabs
          selectedLevel={selectedLevel}
          onLevelChange={handleLevelChange}
        />
      </div>
      <ChallengeList level={selectedLevel} />
    </div>
  );
};

export default ChallengesPage;
