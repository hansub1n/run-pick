'use client';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

const CHALLENGE_PROMPTS = [
  { label: '7일이면 충분해. 도전해볼래?' },
  { label: '부담 없이 한 걸음, 챌린지로 시작해봐요' },
  { label: '당신의 페이스로 달려보세요' },
];
const ChallengePromptSection = () => {
  return (
    <div className='h-[86px] rounded-[10px] bg-[#414141] '>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        speed={500}
        pagination={{
          clickable: true,
        }}
      >
        {CHALLENGE_PROMPTS.map((prompt, idx) => (
          <SwiperSlide key={idx}>
            <div className='px-[17px] py-[14px] flex flex-col justify-between h-full'>
              <h1 className='font-semibold text-[#FAFAFA]'>{prompt.label}</h1>
              <Link
                href={'/challenges'}
                className='cursor-pointer w-fit mt-[8px] px-[10px] py-[5px] rounded-[6px] bg-[#007AFF] hover:bg-[#339CFF] active:scale-95 text-[12px] font-medium text-white transition-all duration-200'
              >
                챌린지 보러가기
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ChallengePromptSection;
