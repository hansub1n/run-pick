export type CalendarGridProps = {
  weeks: Date[][];
  posts: { id: number; created_at: string; distance_km: number }[];
};

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

const CalendarGrid = ({ weeks, posts }: CalendarGridProps) => {
  const today = new Date();

  return (
    <div className='w-[313px] p-3 rounded-[10px] bg-[#141414] shadow-md'>
      <div className='grid grid-cols-7 text-center font-semibold text-[13px] text-[#787878] mb-2'>
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className='grid grid-cols-7 gap-y-2 text-center text-sm'>
        {weeks.flat().map((date) => {
          const isToday =
            date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate();

          const isOtherMonth = date.getMonth() !== today.getMonth();

          const isRunOnDate = posts.some((post) => {
            const postDate = new Date(post.created_at);
            return (
              postDate.getFullYear() === date.getFullYear() &&
              postDate.getMonth() === date.getMonth() &&
              postDate.getDate() === date.getDate()
            );
          });

          return (
            <div
              key={date.toISOString()}
              className={`relative aspect-square flex items-center justify-center transition-all duration-300 rounded-[10px]
                ${
                  isToday
                    ? 'bg-[#007aff]/30 text-white font-bold'
                    : isOtherMonth
                      ? 'text-[#787878]'
                      : 'text-[#e0e0e0] hover:bg-[#414141] cursor-pointer'
                }
              `}
            >
              <span>{date.getDate()}</span>

              {isRunOnDate && !isToday && (
                <div className='absolute bottom-1 w-[6px] h-[6px] bg-[#007aff] rounded-full' />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
