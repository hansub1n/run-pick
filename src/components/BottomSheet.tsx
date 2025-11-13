import { useBottomSheetStore } from '@/stores/useBottomSheetStore';
import { useEffect } from 'react';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';

type BottomSheetProps = {
  children: React.ReactNode;
};

const BottomSheet = ({ children }: BottomSheetProps) => {
  const { isOpen, close } = useBottomSheetStore();

  const variants = {
    open: {
      y: 0,
      transition: { duration: 0.4, ease: easeInOut },
    },
    closed: {
      y: '100%',
      transition: { duration: 0.4, ease: easeInOut },
    },
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div
            onClick={close}
            className='z-10 fixed inset-0 bg-black/50'
          />
          <motion.div
            initial='closed'
            animate='open'
            exit='closed'
            variants={variants}
            className='z-20 fixed bottom-0 bg-[#1a1a1a] w-full rounded-t-[23px] pb-[23px]'
          >
            <div className='flex w-[94px] h-[4px] bg-[#4F4F4F] mt-[3px] mb-[30px] mx-auto' />
            <div className='w-[375px] mx-auto'>{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BottomSheet;
