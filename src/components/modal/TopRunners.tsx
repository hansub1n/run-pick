import React from 'react';

const TopRunners = () => {
  // TODO: 10위 안에 들으면 11등까지, 못들으면 10위까지 + 내 등수

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-[20px] mb-[5px]'>이달의 러너</h1>
      <div className='flex flex-col gap-[2px]'>
        <div>등수, 이름, 거리, 횟수</div>
        <div>등수, 이름, 거리, 횟수</div>
        <div>등수, 이름, 거리, 횟수</div>
        <div>등수, 이름, 거리, 횟수</div>
        <div>등수, 이름, 거리, 횟수</div>
        <div>등수, 이름, 거리, 횟수</div>
        <div>등수, 이름, 거리, 횟수</div>
        <div>등수, 이름, 거리, 횟수</div>
        <div>등수, 이름, 거리, 횟수</div>
        <div>등수, 이름, 거리, 횟수</div>
        <div>등수, 이름, 거리, 횟수</div>
      </div>
    </div>
  );
};

export default TopRunners;
