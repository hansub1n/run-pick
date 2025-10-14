'use client';
import { useBottomSheetStore } from '@/stores/useBottomSheetStore';
import { FaUserFriends } from 'react-icons/fa';

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  const { open } = useBottomSheetStore();

  return (
    <>
      <header className='z-5 fixed absolute right-[15px] top-[15px]'>
        <FaUserFriends
          onClick={open}
          className='w-[25px] h-[25px]'
        />
      </header>
      {children}
    </>
  );
}
