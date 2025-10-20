import VideoDetailHeader from '@/components/videos/[videoId]/VideoDetailHeader';

export default function VideoDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VideoDetailHeader />
      {children}
    </>
  );
}
