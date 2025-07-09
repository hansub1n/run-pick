const MonthlyStatsSection = () => {
  return (
    <section>
      <section className='flex flex-col items-center mb-[6px]'>
        <h1 className='font-semibold mb-[17px]'>2025년 05월</h1>
        <div className='w-[313px] h-[181px] rounded-[10px] bg-[#D9D9D9]' />
      </section>
      <section className='font-semibold flex items-center justify-around text-center mb-[27px]'>
        <div className='w-[140px] h-[62px]'>
          <p className='text-[#B5B5B5] text-[12px] mb-[5px]'>이번 달 거리</p>
          <h3>
            <span className='text-[24px]'>24</span>
            <span className='text-[20px]'>km</span>
          </h3>
        </div>
        <div className='bg-[#D9D9D9] w-[1px] h-[30px]' />
        <div className='w-[140px] h-[62px]'>
          <p className='text-[#B5B5B5] text-[12px] mb-[5px]'>총 누적 횟수</p>
          <h3>
            <span className='text-[24px]'>9</span>
            <span className='text-[20px]'>Runs</span>
          </h3>
        </div>
      </section>
    </section>
  );
};

export default MonthlyStatsSection;
