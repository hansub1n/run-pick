import { FaPersonRunning, FaStar } from 'react-icons/fa6';

const VideoCard = () => {
  return (
    <div className='h-[100px] py-[17px] border-b border-[#D9D9D9] flex gap-[16px]'>
      <div className='w-[104px] rounded-[10px] bg-[#A4A2A2]' />
      <div className='flex-grow'>
        <div>
          <h1 className='font-semibold text-[13px]'>가보자고 5km!!!</h1>
          <p className='font-medium text-[10px]'>40:00</p>
        </div>
        <div className='font-semibold text-[10px] flex gap-[6px] justify-end mt-[16px]'>
          <h3 className='flex items-center gap-[2px]'>
            <FaStar />
            1004
          </h3>
          <h3 className='flex items-center gap-[2px]'>
            <FaPersonRunning />
            1004
          </h3>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
