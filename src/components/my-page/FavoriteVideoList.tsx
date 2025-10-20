import { UserFavoriteVideos } from '@/types/userFavoriteVideos.type';
import Image from 'next/image';
import React from 'react';
import { FaPersonRunning } from 'react-icons/fa6';

type FavoriteVideoListProps = {
  list: UserFavoriteVideos;
};

const FavoriteVideoList = ({ list }: FavoriteVideoListProps) => {
  return (
    <>
      {list.slice(0, 3).map((video) => (
        <div
          key={video.id}
          className='flex flex-col items-center'
        >
          <div className='relative w-[100px] h-[65px]'>
            <Image
              src={video.info.thumbnail_url}
              alt={`${video.info.title} 이미지`}
              fill
              className='object-cover rounded-[5px]'
            />
          </div>
          {/* TODO: 추후에 좋아요 카운팅 */}
          <h3 className='flex items-center text-[12px] gap-[3px]'>
            <FaPersonRunning />
            {video.info.distance_category}km
          </h3>
        </div>
      ))}
    </>
  );
};

export default FavoriteVideoList;
