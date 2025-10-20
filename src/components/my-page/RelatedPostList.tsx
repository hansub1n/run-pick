import { RelatedPosts } from '@/types/relatedPosts.types';
import Image from 'next/image';
import { FaPersonRunning } from 'react-icons/fa6';

type RelatedPostListProps = {
  list: RelatedPosts;
};
const RelatedPostList = ({ list }: RelatedPostListProps) => {
  return (
    <>
      {list.slice(0, 3).map((relatedPost) => (
        <div
          key={relatedPost.id}
          className='flex flex-col items-center'
        >
          <div className='relative w-[100px] h-[65px]'>
            <Image
              src={relatedPost.image_url}
              alt={`${relatedPost.content} 이미지`}
              fill
              className='object-cover rounded-[5px]'
            />
          </div>
          {/* TODO: 추후에 좋아요 카운팅 */}
          <h3 className='flex items-center text-[12px] gap-[3px]'>
            <FaPersonRunning />
            {relatedPost.distance_km}km
          </h3>
        </div>
      ))}
    </>
  );
};

export default RelatedPostList;
