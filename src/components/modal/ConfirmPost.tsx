import { useAuthStatus } from '@/hooks/queries/useAuthStatus';
import { useModalStore } from '@/stores/useModalStore';
import { useRouter } from 'next/navigation';
import React from 'react';

export type ConfirmPostProps = {
  onConfirm: () => void;
};

const ConfirmPost = ({ onConfirm }: ConfirmPostProps) => {
  const { close } = useModalStore();
  const { isSignedIn } = useAuthStatus();
  const router = useRouter();

  if (!isSignedIn) {
    router.replace('/login');
    return;
  }

  return (
    <div className='flex flex-col items-center font-semibold text-center'>
      <h1 className='text-[20px]'>확인 안내</h1>
      <p className='text-[14px] mt-2 leading-[1.5] text-[#787878]'>
        작성한 기록은 등록 후 수정할 수 없습니다.
        <br />
        이대로 등록하시겠습니까?
      </p>
      <div className='mt-[20px] flex gap-[18px] text-[14px]'>
        <button
          onClick={close}
          className='px-[35px] py-[7px] bg-[#414141] rounded-[10px]'
        >
          취소
        </button>
        <button
          onClick={onConfirm}
          className='px-[35px] py-[7px] bg-[#007aff] rounded-[10px]'
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default ConfirmPost;
