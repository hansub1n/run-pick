type CardSkeletonProps = {
  isOpenModal: boolean;
  statIconsCount?: number;
  count: number;
};

const CardSkeleton = ({ isOpenModal, statIconsCount = 2, count = 3 }: CardSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={`skeleton-${idx}`}
          aria-hidden='true'
          className='flex gap-[16px] min-h-[100px] py-[17px] px-[10px] rounded-lg shadow-md animate-pulse bg-[#1e1e1e]'
        >
          <div
            className={`min-h-[65px] ${isOpenModal ? 'min-w-[84px]' : 'min-w-[104px]'} bg-[#2e2e2e] rounded-[10px]`}
          />

          <div className='w-[193px] h-[65px] flex flex-col justify-between'>
            <div className='space-y-2'>
              <div className='h-[12px] w-[80%] bg-[#2e2e2e] rounded-md' />
              <div className='h-[10px] w-[60%] bg-[#2e2e2e] rounded-md' />
            </div>

            <div className='flex justify-end gap-[6px]'>
              {Array.from({ length: statIconsCount }).map((_, idx) => (
                <div
                  key={idx}
                  className='h-[22px] w-[50px] bg-[#2e2e2e] rounded-md'
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardSkeleton;
