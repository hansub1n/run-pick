const EditProfile = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-[20px] mb-[5px]'>프로필 수정</h1>
      <div className='flex flex-col gap-[2px]'>
        <div className='w-[72px] h-[72px] rounded-full '></div>
        <h1 className='text-[20px] mb-[4px]'></h1>
      </div>
      <button>저장</button>
    </div>
  );
};

export default EditProfile;
