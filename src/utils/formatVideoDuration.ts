export const formatVideoDuration = (duration: string) => {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

  if (!match) return '0:00';

  const [, hours, minutes, seconds] = match.map(Number);

  const h = hours || 0;
  const m = minutes || 0;
  const s = seconds || 0;

  if (h > 0) {
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  } else {
    return `${m}:${s.toString().padStart(2, '0')}`;
  }
};
