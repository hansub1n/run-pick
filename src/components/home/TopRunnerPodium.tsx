import Image, { StaticImageData } from 'next/image';
import { FaMedal } from 'react-icons/fa6';

type TopRunnerPodiumProps = {
  topRunnerList: [
    string,
    {
      nickname: string;
      profileImgUrl: string | StaticImageData;
      totalDistance: number;
    },
  ][];
};

const TopRunnerPodium = ({ topRunnerList }: TopRunnerPodiumProps) => {
  const ORDER = [1, 0, 2];
  const HEIGHT_CLASSES = ['h-[126px]', 'h-[89px]', 'h-[142px]'];
  const MEDAL_COLORS = ['#C0C0C0', '#FFD60A', '#CD7F32'];
  const TEXT_COLORS = ['#E5E5E7', '#FFFFFF', '#CFCFCF'];

  return (
    <section className='flex gap-[10px] text-[#FAFAFA]'>
      {ORDER.map((idx, i) => {
        const [, info] = topRunnerList[idx];
        const { nickname, profileImgUrl, totalDistance } = info;

        return (
          <div
            key={`${i + 1}-${nickname}`}
            className={`${HEIGHT_CLASSES[i]} w-[84px] flex flex-col items-center justify-end`}
          >
            <h3
              className={'flex items-center font-semibold text-[12px] gap-[3px]'}
              style={{ color: TEXT_COLORS[i] }}
            >
              <FaMedal
                color={MEDAL_COLORS[i]}
                className='drop-shadow-sm'
              />
              {totalDistance}km
            </h3>
            <Image
              src={profileImgUrl}
              alt={`${i + 1}위-${nickname}프로필`}
              height={42}
              width={42}
              className='object-cover rounded-full border border-[#2C2C2E] shadow-md shadow-black/40 mt-[3px]'
            />
            <h1 className='mt-[4px] text-[11px] font-medium text-[#FAFAFA]'>{nickname}</h1>
          </div>
        );
      })}
    </section>
  );
};

export default TopRunnerPodium;
