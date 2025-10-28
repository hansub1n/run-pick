'use client';
import { useRouter } from 'next/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ChallengePrompts = [
  { label: '7일이면 충분해. 도전해볼래?' },
  { label: '부담 없이 한 걸음, 챌린지로 시작해봐요' },
  { label: '당신의 페이스로 달려보세요' },
];
const ChallengePromptSection = () => {
  const router = useRouter();

  return (
    <div className='h-[86px] rounded-[10px] bg-[#D9D9D9] '>
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
        {ChallengePrompts.map((prompt, idx) => (
          <SwiperSlide key={idx}>
            <div className='px-[17px] py-[14px] font-semibold'>
              <h1>{prompt.label}</h1>
              <button
                onClick={() => router.push('/challenges')}
                className='cursor-pointer mt-[8px] px-[8px] py-[4px] rounded-[5px] bg-[#B5B5B5] text-[12px] text-white'
              >
                챌린지 보러가기
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ChallengePromptSection;
