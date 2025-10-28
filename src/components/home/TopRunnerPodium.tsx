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

  return (
    <section className='flex gap-[10px] text-[#141414]'>
      {ORDER.map((idx, i) => {
        const [, info] = topRunnerList[idx];
        const { nickname, profileImgUrl, totalDistance } = info;

        return (
          <div
            key={`${i + 1}-${nickname}`}
            className={`w-[84px] ${HEIGHT_CLASSES[i]} flex flex-col items-center justify-end`}
          >
            <h3 className='flex items-center font-semibold text-[12px] gap-[3px]'>
              <FaMedal />
              {totalDistance}km
            </h3>
            <div className='relative w-[38px] h-[38px]'>
              <Image
                src={profileImgUrl}
                alt={`${i + 1}위-${nickname}프로필`}
                fill
                className='object-cover rounded-full'
              />
            </div>
            <h1 className='mt-[3px] text-[11px] font-medium'>{nickname}</h1>
          </div>
        );
      })}
    </section>
  );
};

export default TopRunnerPodium;
