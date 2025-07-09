import React from 'react';
import { FaChevronRight, FaStar } from 'react-icons/fa6';

const FavoriteVideosSection = () => {
  return (
    <section>
      <div>
        <h1 className='flex items-center font-[19px]'>
          즐겨찾기한 영상
          <FaChevronRight />
        </h1>
      </div>
      <section className='flex gap-[7px] pt-[8px]'>
        <div className='flex flex-col items-center'>
          <div className='w-[100px] h-[65px] rounded-[5px] bg-[#B5B5B5]' />
          <h3 className='flex items-center text-[12px] gap-[3px]'>
            <FaStar />
            1004
          </h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-[100px] h-[65px] rounded-[5px] bg-[#B5B5B5]' />
          <h3 className='flex items-center text-[12px] gap-[3px]'>
            <FaStar />
            1004
          </h3>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-[100px] h-[65px] rounded-[5px] bg-[#B5B5B5]' />
          <h3 className='flex items-center text-[12px] gap-[3px]'>
            <FaStar />
            1004
          </h3>
        </div>
      </section>
    </section>
  );
};

export default FavoriteVideosSection;
