import { Behavior, Category } from '@/types/videos.types';

export const getPreferredCategory = (behaviorStore: Record<string, Behavior>): Category | null => {
  const behaviors = Object.values(behaviorStore);

  if (behaviors.length === 0) {
    return null;
  }

  const categoryStats = behaviors.reduce(
    (acc, behavior) => {
      const { category, viewTime, clicked } = behavior;
      if (!acc[category]) {
        acc[category] = { watchTime: 0, clickCount: 0 };
      }
      acc[category].watchTime += viewTime;
      if (clicked) {
        acc[category].clickCount += 1;
      }
      return acc;
    },
    {} as Record<Category, { watchTime: number; clickCount: number }>,
  );

  const validCategories = Object.entries(categoryStats).filter(([, stats]) => stats.watchTime > 0);

  if (validCategories.length === 0) {
    return null;
  }

  let preferredCategory: Category | null = null;
  let maxWatchTime = 0;
  let maxClickCount = -1;

  for (const [category, stats] of validCategories) {
    if (stats.watchTime > maxWatchTime || (stats.watchTime === maxWatchTime && stats.clickCount > maxClickCount)) {
      preferredCategory = category as Category;
      maxWatchTime = stats.watchTime;
      maxClickCount = stats.clickCount;
    }
  }

  return preferredCategory;
};
