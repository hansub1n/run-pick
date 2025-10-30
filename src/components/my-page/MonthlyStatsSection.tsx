'use client';
import { useMonthlyStats } from '@/hooks/queries/useMonthlyRunStats';
import StatCard from './StatCard';
import { useUserStore } from '@/stores/useUserStore';
import CalendarGrid from './CalendarGrid';
import { useCalendar } from '@/hooks/useCalendar';

type MonthlyStatsSectionProps = {
  friendId?: string;
};
const MonthlyStatsSection = ({ friendId }: MonthlyStatsSectionProps) => {
  const { id: myId } = useUserStore();
  const userId = friendId ?? myId;
  const { totalDistance, totalRuns, posts } = useMonthlyStats(userId);
  const { year, month, weeks } = useCalendar();

  const formattedMonth = String(month).padStart(2, '0');
  return (
    <div className='flex flex-col items-center mb-[35px]'>
      <h1 className='font-semibold text-[17px] mb-[10px]'>
        {year}년 {formattedMonth}월
      </h1>
      <div className='font-semibold flex items-center justify-around text-center mb-[13px]'>
        <StatCard
          title='이번 달 거리'
          value={totalDistance}
          unit='km'
        />
        <div className='bg-[#787878] w-[1px] h-[30px]' />
        <StatCard
          title='총 누적 횟수'
          value={totalRuns}
          unit='Runs'
        />
      </div>

      <CalendarGrid
        weeks={weeks}
        posts={posts}
      />
    </div>
  );
};

export default MonthlyStatsSection;
