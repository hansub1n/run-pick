export const convertDistanceToNumber = (distance: string) => {
  return parseInt(distance.replace('km', ''), 10);
};
