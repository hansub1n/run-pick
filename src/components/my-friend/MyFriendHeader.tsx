'use client';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa6';

const MyFriendHeader = () => {
  const router = useRouter();
  const onClickHanlder = () => router.back();

  return (
    <header className='fixed absolute top-0 z-10 w-full h-[55px] px-[13px] flex items-center bg-[#1a1a1a]'>
      <FaChevronLeft
        onClick={onClickHanlder}
        className='cursor-pointer w-[24px] h-[24px]'
      />
    </header>
  );
};

export default MyFriendHeader;
