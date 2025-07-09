import React from 'react';

const InputField = () => {
  return (
    <>
      <div className='flex flex-col gap-[6px]'>
        <h1>러닝 시간</h1>
        <input className='h-[45px] rounded-[10px] border px-[5px]' />
      </div>
      <div className='flex flex-col gap-[6px]'>
        <h1>한줄 소감</h1>
        <input className='h-[45px] rounded-[10px] border px-[5px]' />
      </div>
    </>
  );
};

export default InputField;
