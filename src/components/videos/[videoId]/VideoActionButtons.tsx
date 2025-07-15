'use client';
import { useRouter } from 'next/navigation';
import { FaPersonRunning, FaStar } from 'react-icons/fa6';
import { ParamValue } from 'next/dist/server/request/params';

type videoActionButtonsProps = {
  videoId: ParamValue;
};

const VideoActionButtons = ({ videoId }: videoActionButtonsProps) => {
  const router = useRouter();

  const onClickHandler = (videoId: ParamValue) => {
    router.push(`/run-proof/new?videoId=${videoId}`);
  };
  return (
    <div className='mt-[14px] flex gap-[24px] justify-center'>
      <button
        onClick={() => alert('즐찾')}
        className='cursor-pointer text-[14px] font-semibold w-[127px] h-[32px] border border-[#D9D9D9] rounded-[10px] flex items-center justify-center gap-[4px]'
      >
        <FaStar className='w-[15px] h-[15px]' />
        즐겨찾기
      </button>
      <button
        onClick={() => onClickHandler(videoId)}
        className='cursor-pointer text-[14px] font-semibold w-[127px] h-[32px] border border-[#D9D9D9] rounded-[10px] flex items-center justify-center gap-[4px]'
      >
        <FaPersonRunning className='w-[15px] h-[15px]' />
        인증하기
      </button>
    </div>
  );
};

export default VideoActionButtons;
