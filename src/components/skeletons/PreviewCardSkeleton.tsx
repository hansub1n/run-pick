type PreviewCardSkeletonProps = {
  count?: number;
};

const PreviewCardSkeleton = ({ count = 3 }: PreviewCardSkeletonProps) => {
  return (
    <div className='flex gap-[7px]'>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className='flex flex-col items-center animate-pulse'
        >
          <div className='relative w-[100px] h-[65px] rounded-[5px] bg-[#2e2e2e]' />

          <div className='h-[12px] w-[80px] bg-[#2e2e2e] rounded-md my-[3px]' />
        </div>
      ))}
    </div>
  );
};

export default PreviewCardSkeleton;
