'use client';
import DistanceTabs from '@/components/videos/DistanceTabs';
import DistanceVideoHeader from '@/components/videos/DistanceVideoHeader';
import VideoList from '@/components/videos/VideoList';
import { Distance, SortOption } from '@/types/videos.types';
import { useState } from 'react';

const VideosPage = () => {
  const [selectedDistance, setSelectedDistance] = useState<Distance>('3km');
  const [sortOption, setSortOption] = useState<SortOption>('default');

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSortOption(e.target.value as SortOption);

  const handleDistanceChange = (distnace: Distance) => setSelectedDistance(distnace);

  return (
    <div className='flex flex-col items-center pb-[23px]'>
      <div className='sticky w-[330px] top-[55px] pt-[23px] bg-[#1a1a1a] z-3'>
        <DistanceVideoHeader
          sortOption={sortOption}
          onSortOptionChange={handleSortChange}
        />
        <DistanceTabs
          distance={selectedDistance}
          onDistanceChange={handleDistanceChange}
        />
      </div>

      <VideoList
        distance={selectedDistance}
        sortOption={sortOption}
      />
    </div>
  );
};

export default VideosPage;
