export type CalendarGridProps = {
  weeks: Date[][];
  posts: { id: number; created_at: string; distance_km: number }[];
};

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

const CalendarGrid = ({ weeks, posts }: CalendarGridProps) => {
  const today = new Date();

  return (
    <div className='w-[313px] p-3 rounded-[10px] bg-[#D9D9D9]'>
      <div className='grid grid-cols-7 text-center font-semibold text-sm'>
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
              key={`${date.toISOString()}`}
              className={
                `relative aspect-square flex items-center justify-center text-sm ` +
                (isOtherMonth ? 'text-gray-400' : '') +
                (isToday ? 'text-white' : '')
              }
            >
              <span className='z-1'>{date.getDate()}</span>
              {isToday && !isOtherMonth && <div className='z-0 absolute w-7 h-7 bg-gray-500 rounded-full' />}
              {isRunOnDate && <div className='z-2 absolute bottom-0 w-2 h-2 bg-white rounded-full translate-y-2' />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
{
  /* <div key={`week-${idx}`}>
{week.map((day) => (
  <div
    key={`${day.getMonth()}-${day.getDate()}`}
    className='flex m-auto'
  >{`${day.getDate()}`}</div>
))}
</div> */
}
