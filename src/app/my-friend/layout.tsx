import MyFriendHeader from '@/components/my-friend/MyFriendHeader';

export default function MyFriendLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MyFriendHeader />
      {children}
    </>
  );
}
