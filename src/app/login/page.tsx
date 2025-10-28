'use client';

import { handleGoogleSignIn, handleKakaoSignIn } from '@/utils/supabase/auth';

const authProviders = [
  {
    label: '구글',
    value: 'google',
    onClick: handleGoogleSignIn,
  },
  {
    label: '카카오',
    value: 'kakao',
    onClick: handleKakaoSignIn,
  },
];

const LoginPage = () => {
  return (
    <div className='font-semibold w-[313px] flex flex-col py-[23px] gap-[15px]'>
      <div className='h-[200px] bg-[#D9D9D9]' />
      <div className='w-full flex items-center'>
        <div className='flex-grow h-[1px] bg-[#A4A4A4]' />
        <p className='text-[10px] text-[#A4A4A4] px-[10px]'>간편 회원가입 및 로그인</p>
        <div className='flex-grow h-[1px] bg-[#A4A4A4]' />
      </div>
      {authProviders.map((provider) => (
        <button
          key={provider.value}
          onClick={provider.onClick}
          className='w-full h-[53px] rounded-[10px] bg-[#4F4F4F] text-[20px] text-[#ffffff]'
        >
          {provider.label}
        </button>
      ))}
    </div>
  );
};

export default LoginPage;
