import BackButton from '@/components/BackButton';

export default function RunProofNewLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className='fixed absolute top-0 z-10 w-full h-[55px] px-[13px] flex items-center bg-[#1a1a1a]'>
        <BackButton />
        <h1 className='font-semibold text-[20px] flex-grow text-center'>러닝 기록 작성</h1>
      </header>
      {children}
    </>
  );
}
