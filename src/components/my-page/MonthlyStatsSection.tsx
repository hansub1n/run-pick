import { useMonthlyStats } from '@/hooks/queries/useMonthlyRunStats';
import StatCard from './StatCard';
import { useUserStore } from '@/stores/useUserStore';

const MonthlyStatsSection = () => {
  const { id } = useUserStore();
  const { totalDistance, totalRuns } = useMonthlyStats(id);
  return (
    <section>
      <section className='flex flex-col items-center mb-[6px]'>
        <h1 className='font-semibold mb-[17px]'>2025년 05월</h1>
        <div className='w-[313px] h-[181px] rounded-[10px] bg-[#D9D9D9]' />
      </section>
      <section className='font-semibold flex items-center justify-around text-center mb-[27px]'>
        <StatCard
          title='이번 달 거리'
          value={totalDistance}
          unit='km'
        />
        <div className='bg-[#D9D9D9] w-[1px] h-[30px]' />
        <StatCard
          title='총 누적 횟수'
          value={totalRuns}
          unit='Runs'
        />
      </section>
    </section>
  );
};

export default MonthlyStatsSection;
