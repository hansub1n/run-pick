import { TopRunnerList } from '@/types/topRunners.types';
import Image from 'next/image';

type TopRunnersProps = {
  topRunnerList: TopRunnerList;
  myRank?: number;
};

const TopRunners = ({ topRunnerList, myRank }: TopRunnersProps) => {
  return (
    <div className='relative flex flex-col items-center'>
      <h1 className='font-semibold top-[-1px] sticky w-full bg-[#1a1a1a] text-center text-[20px] z-10 pb-[5px]'>
        이달의 러너
      </h1>
      <div className='flex flex-col gap-[2px]'>
        {topRunnerList.map((runner, idx) => {
          const [, info] = runner;
          const { nickname, profileImgUrl, totalDistance } = info;

          return (
            <div
              key={`${idx + 1}-${nickname}`}
              className={`font-medium flex w-[293px] pr-[10px] py-[3px] items-center gap-[10px] justify-between rounded-md transition-colors
    ${idx + 1 === myRank ? 'bg-[#007AFF]' : 'bg-[#2a2a2a] text-[#787878] hover:bg-[#333]'}`}
            >
              <h1 className='flex justify-center w-1/6 text-[13px]'>{idx + 1}</h1>
              <div className='flex flex-grow items-center gap-[10px]'>
                <div className='relative w-[27px] h-[27px]'>
                  <Image
                    src={profileImgUrl}
                    alt={`${idx + 1}위-${nickname}프로필`}
                    fill
                    className='object-cover rounded-full'
                  />
                </div>
                <p className='text-[13px]'>{nickname}</p>
              </div>

              <p className='flex justify-end w-1/4 text-[13px]'>{totalDistance}km</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRunners;
