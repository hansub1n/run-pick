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
          className={`cursor-pointer flex-1/3 h-[61px] flex items-center justify-center box-border border-b-[5px] ${level === label ? 'border-black' : 'border-white'}`}
        >
          {label}
        </h1>
      ))}
    </div>
  );
};

export default ChallengeTabs;
{
  /* <div className='font-semibold text-[18px] flex'>
<h1 className='flex-1/3 h-[61px] flex items-center justify-center border-b-[5px]'>기본</h1>
<h1 className='flex-1/3 h-[61px] flex items-center justify-center border-b border-[#D9D9D9]'>도전</h1>
<h1 className='flex-1/3 h-[61px] flex items-center justify-center border-b border-[#D9D9D9]'>열정</h1>
</div> */
}
