import { User } from '@/types/users.types';

type MotivationHeaderProps = {
  isSignedIn: boolean;
  userInfo: User | null;
};
const MotivationHeader = ({ isSignedIn, userInfo }: MotivationHeaderProps) => {
  return (
    <div className='flex flex-col'>
      <h1 className='leading-[23px] font-semibold text-[#FAFAFA]'>
        {isSignedIn && userInfo ? (
          <>
            <span className='text-[#007AFF]'>{userInfo.nickname}</span>
            <span>님,</span>
          </>
        ) : (
          '로그인을 하고'
        )}
        <br />
        오늘도 힘차게 달려봐요!
      </h1>
      <p className='text-[10px] font-medium  text-[#BDBDBD]'>이번 주도 달린다! 목표까지 GO! 🏃‍♂️</p>
    </div>
  );
};

export default MotivationHeader;
