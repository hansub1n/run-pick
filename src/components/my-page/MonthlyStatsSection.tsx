import { useMonthlyStats } from '@/hooks/queries/useMonthlyRunStats';
import StatCard from './StatCard';
import { useUserStore } from '@/stores/useUserStore';
import CalendarGrid from './CalendarGrid';
import { useCalendar } from '@/hooks/useCalendar';

const MonthlyStatsSection = () => {
  const { id } = useUserStore();
  const { totalDistance, totalRuns, posts } = useMonthlyStats(id);
  const { year, month, weeks, goToPrevMonth, goToNextMonth, setCurrentDate } = useCalendar();
  console.log(weeks);

  const formattedMonth = String(month).padStart(2, '0');
  return (
    <section>
      <section className='flex flex-col items-center mb-[6px]'>
        <h1 className='font-semibold mb-[17px]'>
          {year}년 {formattedMonth}월
        </h1>
        <CalendarGrid
          weeks={weeks}
          posts={posts}
        />
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
