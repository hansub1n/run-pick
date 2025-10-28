// 'use client';

// import { useQuery } from '@tanstack/react-query';
// import { QUERY_KEYS } from './queryKeys';
// import { fetchVideoDetail } from '@/services/videos/fetchVideoDetail';
// import { ParamValue } from 'next/dist/server/request/params';

// export const useVideoDetail = (videoId: ParamValue) => {
//   const { data: videoDetail } = useQuery({
//     queryKey: QUERY_KEYS.videoDetail(videoId),
//     queryFn: () => fetchVideoDetail(videoId),
//   });
//   return videoDetail;
// };
