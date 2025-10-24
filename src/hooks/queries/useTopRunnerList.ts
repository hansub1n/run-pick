import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { fetchTopRunners } from '@/services/home/fetchTopRunners';
import MOCK_USER1_IMG from '/public/assets/images/mock-user1-img.webp';
import MOCK_USER2_IMG from '/public/assets/images/mock-user2-img.webp';
import MOCK_USER3_IMG from '/public/assets/images/mock-user3-img.webp';
import { StaticImageData } from 'next/image';

const MOCK_TOPRUNNERLIST: [string, { nickname: string; profileImgUrl: StaticImageData; totalDistance: number }][] = [
  ['MOCK_USER1', { nickname: '케로로 중사', profileImgUrl: MOCK_USER1_IMG, totalDistance: 102 }],
  ['MOCK_USER2', { nickname: '쿠루루 상사', profileImgUrl: MOCK_USER2_IMG, totalDistance: 81 }],
  ['MOCK_USER3', { nickname: '기로로 하사', profileImgUrl: MOCK_USER3_IMG, totalDistance: 3 }],
  ['MOCK_USER4', { nickname: '미야옹', profileImgUrl: MOCK_USER3_IMG, totalDistance: 3 }],
  ['MOCK_USER5', { nickname: '미야옹', profileImgUrl: MOCK_USER3_IMG, totalDistance: 3 }],
  ['MOCK_USER6', { nickname: '미야옹', profileImgUrl: MOCK_USER3_IMG, totalDistance: 3 }],
  ['MOCK_USER7', { nickname: '미야옹', profileImgUrl: MOCK_USER3_IMG, totalDistance: 3 }],
  ['MOCK_USER8', { nickname: '미야옹', profileImgUrl: MOCK_USER3_IMG, totalDistance: 3 }],
  ['MOCK_USER9', { nickname: '미야옹', profileImgUrl: MOCK_USER3_IMG, totalDistance: 3 }],
  ['MOCK_USER10', { nickname: '미야옹', profileImgUrl: MOCK_USER3_IMG, totalDistance: 3 }],
  ['MOCK_USER11', { nickname: '미야옹', profileImgUrl: MOCK_USER3_IMG, totalDistance: 3 }],
];

export const useTopRunnerList = (userId: string) => {
  const { data: topRunnerList } = useQuery({
    queryKey: QUERY_KEYS.topRunners(),
    queryFn: () => fetchTopRunners(),
  });

  if (!topRunnerList || topRunnerList?.length < 3) {
    return { topRunnerList: MOCK_TOPRUNNERLIST };
  }

  let displayedRunners;

  if (!userId) {
    return { topRunnerList: topRunnerList.slice(0, 10) };
  }

  const myRank = topRunnerList!.findIndex(([id]) => id === userId) + 1;

  if (myRank <= 10) {
    displayedRunners = topRunnerList!.slice(0, 11);
  } else {
    displayedRunners = [...topRunnerList!.slice(0, 10), topRunnerList![myRank - 1]];
  }

  return { topRunnerList: displayedRunners, myRank };
};
