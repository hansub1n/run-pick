'use client';

import Menubar from './Menubar';
import { FiMenu } from 'react-icons/fi';
import { useMenuStore } from '@/stores/useMenuStore';

const Header = () => {
  const { isOpen, toggleMenu } = useMenuStore();

  return (
    <>
      <div className='z-5 fixed w-full h-[55px] bg-[#1a1a1a]'>
        <FiMenu
          onClick={toggleMenu}
          className='cursor-pointer w-[25px] h-[25px] absolute left-[15px] top-[15px]'
        />
        <Menubar
          isOpen={isOpen}
          toggleMenu={toggleMenu}
        />
      </div>
    </>
  );
};

export default Header;
