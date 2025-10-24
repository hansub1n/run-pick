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
  const HEIGHT_CLASSES = ['h-[121px]', 'h-[84px]', 'h-[138px]'];

  return (
    <section className='flex'>
      {ORDER.map((idx, i) => {
        const [, info] = topRunnerList[idx];
        const { nickname, profileImgUrl, totalDistance } = info;

        return (
          <div
            key={`${i + 1}-${nickname}`}
            className={`w-[84px] ${HEIGHT_CLASSES[i]} pb-[10px] flex flex-col items-center justify-end`}
          >
            <h3 className='flex items-center text-[12px] gap-[3px]'>
              <FaMedal />
              {totalDistance}km
            </h3>
            <div className='relative w-[33px] h-[33px]'>
              <Image
                src={profileImgUrl}
                alt={`${i + 1}위-${nickname}프로필`}
                fill
                className='object-cover rounded-full'
              />
            </div>
            <h1 className='text-[10px]'>{nickname}</h1>
          </div>
        );
      })}
    </section>
  );
};

export default TopRunnerPodium;
