'use client';

import { useState } from 'react';
import Menubar from './Menubar';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className='z-5 fixed w-full h-[55px] bg-[#1a1a1a]'>
        <FiMenu
          onClick={toggleMenu}
          className='cursor-pointer w-[25px] h-[25px] absolute left-[15px] top-[15px]'
        />
        <Menubar
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />
      </div>
    </>
  );
};

export default Header;
