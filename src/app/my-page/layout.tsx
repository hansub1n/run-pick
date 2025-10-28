import MyPageHeader from '@/components/my-page/MyPageHeader';

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MyPageHeader />
      {children}
    </>
  );
}
