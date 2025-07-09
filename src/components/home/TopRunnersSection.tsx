'use client';
import { CgProfile } from 'react-icons/cg';
import { FaChevronRight, FaMedal } from 'react-icons/fa6';
import Modal from '../Modal';
import { useModalStore } from '@/stores/useModalStore';
import TopRunners from '../modal/TopRunners';

const TopRunnersSection = () => {
  const { open } = useModalStore();
  return (
    <>
      <section>
        <div>
          <h1 className='flex items-center'>
            <button
              onClick={open}
              className='cursor-pointer flex items-center gap-[2px]'
            >
              이달의 러너 TOP 3
              <FaChevronRight />
            </button>
          </h1>
          <p className='text-[7px] text-[#787878]'>Top 3는 통과점! 목표는 내가 도달할 곳!</p>
        </div>
        <div className='relative mt-[8px] h-[193px] rounded-[10px] bg-[#D9D9D9] flex flex-col items-center justify-between'>
          <section className='flex'>
            <div className='w-[84px] h-[121px] pb-[10px] flex flex-col items-center justify-end'>
              <h3 className='flex items-center text-[12px] gap-[3px]'>
                <FaMedal />
                50km
              </h3>
              <CgProfile className='w-[33px] h-[33px]' />
              <h1 className='text-[7px]'>휴즈 중령</h1>
            </div>
            <div className='w-[84px] h-[84px] pb-[10px] flex flex-col items-center justify-end'>
              <h3 className='flex items-center text-[12px] gap-[3px]'>
                <FaMedal />
                50km
              </h3>
              <CgProfile className='w-[33px] h-[33px]' />
              <h1 className='text-[7px]'>휴즈 중령</h1>
            </div>
            <div className='w-[84px] h-[138px] pb-[10px] flex flex-col items-center justify-end'>
              <h3 className='flex items-center text-[12px] gap-[3px]'>
                <FaMedal />
                50km
              </h3>
              <CgProfile className='w-[33px] h-[33px]' />
              <h1 className='text-[7px]'>휴즈 중령</h1>
            </div>
          </section>
          <section className='flex items-end absolute bottom-0'>
            <div className='w-[84px] h-[72px] bg-[#787878]' />
            <div className='w-[84px] h-[109px] bg-[#787878]' />
            <div className='w-[84px] h-[55px] bg-[#787878]' />
          </section>
        </div>
      </section>
      <Modal>
        <TopRunners />
      </Modal>
    </>
  );
};

export default TopRunnersSection;
