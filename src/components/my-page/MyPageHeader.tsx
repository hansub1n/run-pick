'use client';
import { useBottomSheetStore } from '@/stores/useBottomSheetStore';
import { useMenuStore } from '@/stores/useMenuStore';
import { FaUserFriends } from 'react-icons/fa';

const MyPageHeader = () => {
  const { isOpen: isMenuOpen } = useMenuStore();
  const { open } = useBottomSheetStore();

  return (
    <header className={`${isMenuOpen ? 'z-4' : 'z-5'} fixed right-[15px] top-[15px]`}>
      <FaUserFriends
        onClick={open}
        className='w-[25px] h-[25px]'
      />
    </header>
  );
};

export default MyPageHeader;
