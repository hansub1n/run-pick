export const durationToSeconds = (duration: string) => {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;

  const [, h, m, s] = match.map(Number);
  return (h || 0) * 3600 + (m || 0) * 60 + (s || 0);
};
