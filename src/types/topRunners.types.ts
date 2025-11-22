import { StaticImageData } from 'next/image';

export type TopRunnerList = TopRunnerById[];
export type TopRunnerById = [string, RunnerInfo];
export type RunnerInfo = { nickname: string; profileImgUrl: string | StaticImageData; totalDistance: number };
