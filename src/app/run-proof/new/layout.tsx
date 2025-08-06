'use client';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa6';

export default function RunProofNewLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const onClickHanlder = () => router.back();

  return (
    <>
      <header className='fixed absolute top-0 z-20 w-full h-[55px] px-[13px] flex items-center bg-[#D9D9D9]'>
        <FaChevronLeft
          onClick={onClickHanlder}
          className='w-[24px] h-[24px]'
        />
        <h1 className='font-semibold text-[20px] flex-grow text-center'>러닝 기록 작성</h1>
      </header>
      {children}
    </>
  );
}
