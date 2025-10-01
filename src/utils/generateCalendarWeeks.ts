export const generateCalendarWeeks = (year: number, month: number) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const startDate = new Date(firstDayOfMonth);
  startDate.setDate(1 - firstDayOfMonth.getDay());

  const endDate = new Date(lastDayOfMonth);
  endDate.setDate(lastDayOfMonth.getDate() + (6 - lastDayOfMonth.getDay()));

  const weeks = [];
  let currentWeek = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    currentWeek.push(new Date(currentDate));
    if (currentWeek.length === 7 || currentDate.getDay() === 6) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  if (currentWeek.length < 7) {
    weeks.push(currentWeek);
  }
  return weeks;
};
