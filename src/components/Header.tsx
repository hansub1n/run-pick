'use client';

import Menubar from './Menubar';
import { FiMenu } from 'react-icons/fi';
import { useMenuStore } from '@/stores/useMenuStore';
import { usePathname } from 'next/navigation';
import { useAuthStatus } from '@/hooks/queries/useAuthStatus';

const Header = () => {
  const { isOpen, toggleMenu } = useMenuStore();
  const { isSignedIn } = useAuthStatus();
  const pathname = usePathname();

  const shouldHideHeader = ['/login', '/auth/callback'].some((path) => pathname.startsWith(path));

  if (shouldHideHeader) return null;

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
          isSignedIn={!!isSignedIn}
        />
      </div>
    </>
  );
};

export default Header;
