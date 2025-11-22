import VideoDetailHeader from '@/components/videos/[videoId]/VideoDetailHeader';

export default async function VideoDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ videoId: string }>;
}) {
  const { videoId } = await params;

  return (
    <>
      <VideoDetailHeader videoId={videoId} />
      {children}
    </>
  );
}
