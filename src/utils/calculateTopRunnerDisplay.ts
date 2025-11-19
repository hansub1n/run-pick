import { TopRunnerList } from '@/types/topRunners.types';
import MOCK_USER1_IMG from '/public/assets/images/mock-user1-img.webp';
import MOCK_USER2_IMG from '/public/assets/images/mock-user2-img.webp';
import MOCK_USER3_IMG from '/public/assets/images/mock-user3-img.webp';

export const MOCK_TOPRUNNERLIST: TopRunnerList = [
  ['MOCK_USER1', { nickname: '케로로 중사', profileImgUrl: MOCK_USER1_IMG, totalDistance: 102 }],
  ['MOCK_USER2', { nickname: '쿠루루 상사', profileImgUrl: MOCK_USER2_IMG, totalDistance: 81 }],
  ['MOCK_USER3', { nickname: '기로로 하사', profileImgUrl: MOCK_USER3_IMG, totalDistance: 3 }],
];

export const calculateTopRunnerDisplay = (topRunnerList: TopRunnerList | null, userId: string | null) => {
  let displayedRunners: TopRunnerList;

  if (!topRunnerList || topRunnerList?.length < 3) {
    return { displayedRunners: MOCK_TOPRUNNERLIST };
  }

  if (!userId) {
    return { displayedRunners: topRunnerList.slice(0, 10) };
  }

  const myRank = topRunnerList!.findIndex(([id]) => id === userId) + 1;

  if (myRank <= 10) {
    displayedRunners = topRunnerList!.slice(0, 11);
  } else {
    displayedRunners = [...topRunnerList!.slice(0, 10), topRunnerList![myRank - 1]];
  }

  return { displayedRunners, myRank };
};
