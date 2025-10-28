export const formatDateShort = (createdAt: string) => {
  const createdDate = new Date(createdAt);
  const year = String(createdDate.getFullYear()).slice(-2);
  const month = String(createdDate.getMonth() + 1).padStart(2, '0');
  const date = String(createdDate.getDate()).padStart(2, '0');

  return `${year}.${month}.${date}`;
};
