export const formatRunDuration = ({ hours, minutes, seconds }: { hours: number; minutes: number; seconds: number }) => {
  const h = hours || 0;
  const m = minutes || 0;
  const s = seconds || 0;

  if (h > 0) {
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  } else {
    return `${m}:${s.toString().padStart(2, '0')}`;
  }
};
