export const getStartAndEndDate = (offsetDays: number = 7) => {
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(startDate.getDate() + offsetDays);

  return { startDate, endDate };
};
