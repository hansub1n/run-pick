export type RunProofFormType = {
  content: string;
  distance_km: number;
  duration: Duration;
  image_url: string;
  condition: Condition;
};

export type Duration = {
  hours: number;
  minutes: number;
  seconds: number;
};

export type Condition = '상쾌' | '무난' | '피곤' | '녹초';
