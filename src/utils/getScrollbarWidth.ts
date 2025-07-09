const DEFAULT_SCROLLBAR_WIDTH = 15;

export const getScrollbarWidth = () => {
  if (typeof window === 'undefined') return 0;
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  return scrollbarWidth > 0 ? scrollbarWidth : DEFAULT_SCROLLBAR_WIDTH;
};
