import BackButton from '../BackButton';

const MyFriendHeader = () => {
  return (
    <header className='fixed absolute top-0 z-10 w-full h-[55px] px-[13px] flex items-center bg-[#1a1a1a]'>
      <BackButton />
    </header>
  );
};

export default MyFriendHeader;
