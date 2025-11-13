import { IoCloseOutline } from 'react-icons/io5';
import Navigation from './Navigation';
import { useEffect } from 'react';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';

type MenubarProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const Menubar = ({ isOpen, toggleMenu }: MenubarProps) => {
  const variants = {
    open: { x: 0, transition: { duration: 0.4, ease: easeInOut } },
    closed: { x: '-100%', transition: { duration: 0.4, ease: easeInOut } },
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div
            onClick={toggleMenu}
            className='fixed inset-0 bg-black/70 backdrop-blur-sm z-10'
          />
          <motion.div
            initial='closed'
            animate='open'
            exit='closed'
            variants={variants}
            className='fixed left-0 top-0 pt-[5px] w-[240px] h-full bg-[#1a1a1a] flex flex-col font-semibold z-20'
          >
            <div className='pr-[12px] w-full h-[48px] flex justify-end items-center'>
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Menubar;
