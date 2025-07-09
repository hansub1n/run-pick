import { IoCloseOutline } from 'react-icons/io5';
import Navigation from './Navigation';
import { useEffect } from 'react';

type MenubarProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const Menubar = ({ isMenuOpen, toggleMenu }: MenubarProps) => {
  useEffect(() => {
    // TODO: 데스크탑에서 모달 오픈했을 시 스크롤바 너비 생각해야 됨
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }, [isMenuOpen]);

  return (
    <>
      {isMenuOpen && (
        <>
          <div
            onClick={toggleMenu}
            className='z-10 fixed inset-0 bg-black/50'
          />
          <div className='z-20 fixed left-0 top-0 pt-[5px] w-[240px] h-full bg-white flex flex-col font-semibold'>
            <div className='pr-[12px] w-[full] h-[48px] flex justify-end items-center'>
              <IoCloseOutline
                onClick={toggleMenu}
                className='cursor-pointer w-[30px] h-[30px]'
              />
            </div>
            <nav
              onClick={toggleMenu}
              className='py-[20px]'
            >
              <Navigation />
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Menubar;
