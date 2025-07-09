import { FaUserFriends } from 'react-icons/fa';

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className='absolute right-[15px] top-[15px]'>
        <FaUserFriends className='w-[25px] h-[25px]' />
      </header>
      {children}
    </>
  );
}
