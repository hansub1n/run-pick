import { FaChevronRight } from 'react-icons/fa6';

const TopRunnersSkeleton = () => {
  const HEIGHT_CLASSES = ['h-[126px]', 'h-[89px]', 'h-[142px]'];

  return (
    <div>
      <div>
        <h1 className='flex items-center font-semibold text-[#FAFAFA] text-[16px] leading-[22px]'>
          <div className='cursor-pointer flex items-center gap-[4px] hover:text-[#007AFF] transition-colors'>
            이달의 러너 TOP 3
            <FaChevronRight className='text-[#007AFF]' />
          </div>
        </h1>
        <p className='text-[10px] text-[#787878] font-medium mt-[2px]'>Top 3는 통과점! 목표는 내가 도달할 곳!</p>
      </div>
      <div className='relative mt-[8px] h-[203px] rounded-[12px] bg-[#2C2C2E] flex flex-col items-center justify-between shadow-md'>
        <section className='flex gap-[10px] text-[#FAFAFA]'>
          {Array.from({ length: 3 }).map((_, idx) => {
            return (
              <div
                key={`skeleton-${idx}`}
                className={`${HEIGHT_CLASSES[idx]} w-[84px] flex flex-col items-center justify-end`}
              >
                <div className='flex items-center gap-[3px] mt-[3px]'>
                  <div className='w-[14px] h-[14px] rounded-full bg-[#1a1a1a]' />
                  <div className='w-[28px] h-[12px] bg-[#1a1a1a] rounded-[4px]' />
                </div>

                <div className='w-[42px] h-[42px] rounded-full bg-[#1a1a1a] border border-[#1a1a1a] shadow-md shadow-black/40 mt-[3px]' />

                <div className='w-[40px]  h-[12px] rounded-[4px] mt-[4px] bg-[#1a1a1a]' />
              </div>
            );
          })}
        </section>

        <div className='flex items-end absolute bottom-0 gap-[10px]'>
          <div className='w-[84px] h-[72px] bg-[#007AFF] rounded-t-[6px] shadow-sm shadow-[#007AFF]/30' />
          <div className='w-[84px] h-[109px] bg-[#FFD60A] rounded-t-[6px] shadow-sm shadow-[#FFD60A]/30' />
          <div className='w-[84px] h-[55px] bg-[#9C9C9C] rounded-t-[6px] shadow-sm shadow-[#9C9C9C]/30' />
        </div>
      </div>
    </div>
  );
};

export default TopRunnersSkeleton;
