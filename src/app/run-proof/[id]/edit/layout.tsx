import { FaChevronLeft } from 'react-icons/fa6';

export default function RunProofEditLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className='w-full h-[55px] px-[13px] flex items-center bg-[#D9D9D9]'>
        <FaChevronLeft className='w-[24px] h-[24px]' />
        <h1 className='font-semibold text-[20px] flex-grow text-center'>러닝 기록 수정</h1>
      </header>
      {children}
    </>
  );
}
