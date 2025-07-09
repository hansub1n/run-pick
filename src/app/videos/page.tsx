'use client';
import DistanceTabs from '@/components/videos/DistanceTabs';
import DistanceVideoHeader from '@/components/videos/DistanceVideoHeader';
import VideoList from '@/components/videos/VideoList';
import { Distance } from '@/types/videos.types';
import { useState } from 'react';

const VideosPage = () => {
  const [selectedDistance, setSelectedDistance] = useState<Distance>('3km');
  const handleDistanceChange = (distnace: Distance) => setSelectedDistance(distnace);

  return (
    <div className='w-[313px] pb-[23px]'>
      <div className='sticky top-[55px] pt-[23px] bg-white z-3'>
        <DistanceVideoHeader />
        <DistanceTabs
          distance={selectedDistance}
          onDistanceChange={handleDistanceChange}
        />
      </div>

      <VideoList distance={selectedDistance} />
    </div>
  );
};

export default VideosPage;
