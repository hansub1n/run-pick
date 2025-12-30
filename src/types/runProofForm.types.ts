import { StaticImageData } from 'next/image';

export type RunProofFormType = {
  content: string;
  distance_km: number;
  duration: Duration;
  image_url: string | StaticImageData;
  condition: Condition;
};

export type Duration = {
  hours: number;
  minutes: number;
  seconds: number;
};

export type Condition = '상쾌' | '무난' | '피곤' | '녹초';
