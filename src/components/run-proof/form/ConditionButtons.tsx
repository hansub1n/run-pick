const ConditionButtons = () => {
  return (
    <div className='flex flex-col gap-[6px]'>
      <h1>상태 체크</h1>
      <div className='flex gap-[10px]'>
        <button className='w-1/4 rounded-[15px] border py-[5px] text-[14px]'>😊 상쾌</button>
        <button className='w-1/4 rounded-[15px] border py-[5px] text-[14px]'>🙂 무난</button>
        <button className='w-1/4 rounded-[15px] border py-[5px] text-[14px]'>😵‍💫 피곤</button>
        <button className='w-1/4 rounded-[15px] border py-[5px] text-[14px]'>😫 녹초</button>
      </div>
    </div>
  );
};

export default ConditionButtons;
