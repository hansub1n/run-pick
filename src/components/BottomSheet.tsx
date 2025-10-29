import { useBottomSheetStore } from '@/stores/useBottomSheetStore';
import { useEffect } from 'react';

type BottomSheetProps = {
  children: React.ReactNode;
};

const BottomSheet = ({ children }: BottomSheetProps) => {
  const { isOpen, close } = useBottomSheetStore();

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
    <>
      {isOpen && (
        <>
          <div
            onClick={close}
            className='z-10 fixed inset-0 bg-black/50'
          />
          <div className='z-20 fixed bottom-0 bg-[#1a1a1a] w-full rounded-t-[23px] pb-[23px]'>
            <div className='flex w-[94px] h-[4px] bg-[#4F4F4F] mt-[3px] mb-[30px] mx-auto' />
            <div className='w-[375px] mx-auto'>{children}</div>
          </div>
        </>
      )}
    </>
  );
};

export default BottomSheet;
