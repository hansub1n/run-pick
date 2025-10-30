'use client';

import { handleGoogleSignIn, handleKakaoSignIn } from '@/utils/supabase/auth';
import KakaoIconImg from '/public/assets/icons/icon-kakao.webp';
import GoogleIconImg from '/public/assets/icons/icon-google.webp';
import NaverIconImg from '/public/assets/icons/icon-naver.webp';
import LogoImg from '/public/assets/images/branding/logo.webp';
import Image from 'next/image';

const AUTH_PROVIDERS = [
  {
    label: 'Kakao 로그인',
    iconSrc: KakaoIconImg,
    provider: 'kakao',
    onClick: handleKakaoSignIn,
    className: 'bg-[#FAE100]',
  },
  {
    label: 'Google 로그인',
    iconSrc: GoogleIconImg,
    provider: 'google',
    onClick: handleGoogleSignIn,
    className: 'bg-white',
  },
  {
    label: 'Naver 로그인',
    iconSrc: NaverIconImg,
    provider: 'naver',
    onClick: () => alert('준비중인 서비스입니다.'),
    className: 'bg-[#03CF5C]',
  },
];

const LoginPage = () => {
  return (
    <div className='font-semibold w-[313px] flex flex-col py-[23px] gap-[15px]'>
      <div className='flex flex-col items-center gap-[10px] h-[200px] bg-[#141414] rounded-[30px] p-[20px]'>
        <Image
          src={LogoImg}
          alt='런픽 로고'
          height={95}
          width={90}
        />
        <h3 className='text-[20px] text-center whitespace-pre-line text-center leading-[135%]'>
          <span className='text-[#007aff] font-black'>Pick</span>
          <span className='text-[#787878] font-medium'>하고 </span>
          <span className='font-black'>Run</span>
          <span className='text-[#787878] font-medium'>해!</span>
          <br />
          <span className='text-[#d9d9d9] font-medium'> 매주 새로운 러닝 루틴</span>
        </h3>
      </div>
      <div className='w-full flex items-center'>
        <div className='flex-grow h-[1px] bg-[#A4A4A4]' />
        <p className='text-[11px] text-[#A4A4A4] px-[10px]'>간편 회원가입 및 로그인</p>
        <div className='flex-grow h-[1px] bg-[#A4A4A4]' />
      </div>
      <div className='flex gap-[24px] justify-center'>
        {AUTH_PROVIDERS.map(({ label, iconSrc, provider, onClick, className }) => (
          <button
            key={provider}
            className={`${className} cursor-pointer w-[48px] h-[48px] rounded-full flex flex-col justify-center items-center gap-[10px]`}
            onClick={onClick}
          >
            <div className='relative w-[24px] h-[24px]'>
              <Image
                src={iconSrc}
                alt={label}
                fill
                className='object-cover'
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LoginPage;
