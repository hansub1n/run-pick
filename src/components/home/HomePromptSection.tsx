'use client';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

const HOME_PROMPT_SLIDES = [
  { type: 'fortune-quiz', label: '오늘 달릴까? 운세가 알려줘요', url: '/fortune-quiz' },
  { type: 'challenge', label: '7일이면 충분해. 도전해볼래?', url: '/challenges' },
  { type: 'fortune-quiz', label: '러닝도 타이밍이 중요해', url: '/fortune-quiz' },
  { type: 'challenge', label: '부담 없이 한 걸음, 챌린지로 시작해봐요', url: '/challenges' },
  { type: 'fortune-quiz', label: '오늘 러닝… 해도 될까?', url: '/fortune-quiz' },
  { type: 'challenge', label: '당신의 페이스로 달려보세요', url: '/challenges' },
];

const HomePromptSection = () => {
  return (
    <div className='relative h-[86px] px-[17px] py-[14px] rounded-[10px] bg-[#414141] '>
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
        {HOME_PROMPT_SLIDES.map((prompt, idx) => (
          <SwiperSlide key={idx}>
            <h1 className='h-[58px] font-semibold text-[#FAFAFA]'>{prompt.label}</h1>
            <Link
              href={prompt.url}
              className='z-10 absolute bottom-0 cursor-pointer px-[10px] py-[5px] rounded-[6px] bg-[#007AFF] hover:bg-[#339CFF] active:scale-95 text-[12px] font-medium text-white transition-all duration-200'
            >
              {prompt.type === 'fortune-quiz' ? '테스트 하러가기' : '챌린지 보러가기'}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePromptSection;
