const TopVideoSkeleton = ({ count }: { count: number }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={`skeleton-${idx}`}
          aria-hidden='true'
          className='flex flex-col items-center animate-pulse'
        >
          <div className='relative min-w-[100px] min-h-[56px] bg-[#2C2C2E] rounded-[10px]' />

          <div className='flex items-center gap-[3px] mt-[3px]'>
            <div className='w-[14px] h-[14px] rounded-full bg-[#2C2C2E]' />
            <div className='w-[28px] h-[12px] bg-[#2C2C2E] rounded-[4px]' />
          </div>
        </div>
      ))}
    </>
  );
};

export default TopVideoSkeleton;
