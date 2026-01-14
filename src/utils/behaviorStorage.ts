import { Behavior } from '@/types/videos.types';
import { RefObject } from 'react';

const key = 'video_behavior';

export const saveBehaviorStore = (ref: RefObject<Record<string, Behavior>>) => {
  sessionStorage.setItem(key, JSON.stringify(ref.current));
};
