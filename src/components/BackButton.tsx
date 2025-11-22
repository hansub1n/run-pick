'use client';
import { useRouter } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa6';

const BackButton = () => {
  const router = useRouter();

  const onClickHanlder = () => {
    router.back();
  };

  return (
    <FaChevronLeft
      onClick={onClickHanlder}
      className='cursor-pointer min-w-[24px] min-h-[24px]'
    />
  );
};

export default BackButton;
