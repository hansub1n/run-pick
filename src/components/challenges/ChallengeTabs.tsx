import { Level } from '@/types/challenges.types';

type ChallengeTabsProps = {
  level: Level;
  onLevelChange: (level: Level) => void;
};

const ChallengeOptions: { label: Level }[] = [{ label: '기본' }, { label: '도전' }, { label: '열정' }];
const ChallengeTabs = ({ level, onLevelChange }: ChallengeTabsProps) => {
  return (
    <div className='font-semibold text-[18px] flex'>
      {ChallengeOptions.map(({ label }) => (
        <h1
          key={label}
          onClick={() => onLevelChange(label)}
          className={`cursor-pointer flex-1/3 h-[61px] flex items-center justify-center box-border border-b-[5px] transition-colors
            ${level === label ? 'border-[#007AFF] text-[#007AFF]' : 'border-[#1a1a1a] text-[#414141]'}`}
        >
          {label}
        </h1>
      ))}
    </div>
  );
};

export default ChallengeTabs;
