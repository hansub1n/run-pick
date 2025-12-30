import { QUERY_KEYS } from '@/hooks/queries/queryKeys';
import { fetchChallenges } from '@/services/challenges/fetchChallenges';
import { Level } from '@/types/challenges.types';
import { useQueryClient } from '@tanstack/react-query';

type ChallengeTabsProps = {
  selectedLevel: Level;
  onLevelChange: (level: Level) => void;
};

const ChallengeOptions: { label: Level }[] = [{ label: '기본' }, { label: '도전' }, { label: '열정' }];

const ChallengeTabs = ({ selectedLevel, onLevelChange }: ChallengeTabsProps) => {
  const queryClient = useQueryClient();

  const prefetchLevel = (level: Level) => {
    const queryKey = QUERY_KEYS.challenges(level);
    const hasCache = !!queryClient.getQueryData(queryKey);
    const isFetching = queryClient.isFetching({ queryKey }) > 0;

    if (hasCache || isFetching) return;

    queryClient.prefetchQuery({
      queryKey: QUERY_KEYS.challenges(level),
      queryFn: () => fetchChallenges(level),
    });
  };

  return (
    <div className='font-semibold text-[18px] flex'>
      {ChallengeOptions.map(({ label }) => (
        <button
          key={label}
          onMouseEnter={() => prefetchLevel(label)}
          onClick={() => onLevelChange(label)}
          className={`cursor-pointer flex-1/3 h-[61px] flex items-center justify-center box-border border-b-[5px] transition-colors
            ${selectedLevel === label ? 'border-[#007AFF] text-[#007AFF]' : 'border-[#1a1a1a] text-[#414141]'}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default ChallengeTabs;
