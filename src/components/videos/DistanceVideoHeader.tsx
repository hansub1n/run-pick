const DistanceVideoHeader = () => {
  return (
    <div className='flex justify-between items-end mb-[7px]'>
      <h1 className='font-semibold text-[20px]'> 거리별 영상</h1>
      <select className='font-regular text-[9px] h-[23px] px-[10px] rounded-[15px] border'>
        <option>기본 순</option>
        <option>인증 순</option>
        <option>즐겨찾기 순</option>
      </select>
    </div>
  );
};

export default DistanceVideoHeader;
