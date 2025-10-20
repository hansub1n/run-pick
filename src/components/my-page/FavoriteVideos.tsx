import { formatVideoDuration } from '@/utils/formatVideoDuration';
import Card from '../Card';
import { FaPersonRunning } from 'react-icons/fa6';
import { useVideoDetailStore } from '@/stores/useVideoDetailStore';
import { useRouter } from 'next/navigation';
import { UserFavoriteVideos } from '@/types/userFavoriteVideos.type';
import { DBVideo } from '@/types/videos.types';

type FavoriteVideosProps = {
  list: UserFavoriteVideos;
};

const FavoriteVideos = ({ list }: FavoriteVideosProps) => {
  const { setVideoDetail } = useVideoDetailStore();
  const router = useRouter();

  const onClickHandler = (video: DBVideo) => {
    setVideoDetail(video);
    router.push(`/videos/${video.youtube_video_id}`);
  };

  return (
    <div className='relative flex flex-col items-center'>
      <h1 className='font-semibold top-[-1px] sticky bg-white w-full text-center text-[20px] z-10 pb-[5px]'>
        즐겨찾기한 영상
      </h1>
      <section className='w-[full] pt-[5px]'>
        {list.map((video) => (
          <Card
            key={video.id}
            imageUrl={video.info.thumbnail_url}
            title={video.info.title}
            subtitle={() => formatVideoDuration(video.info.duration)}
            statIcons={[{ icon: <FaPersonRunning />, label: `${video.info.distance_category}km` }]}
            onClick={() => onClickHandler(video.info)}
            isOpenModal={true}
          />
        ))}
      </section>
    </div>
  );
};

export default FavoriteVideos;
