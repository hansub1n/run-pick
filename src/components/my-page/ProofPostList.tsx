import { ProofPosts } from '@/types/proofPosts.types';
import { formatDateShort } from '@/utils/formatDateShort';
import Image from 'next/image';
import defaultRunProofImg from '/public/assets/images/default-run-proof-img.webp';

type ProofPostListProps = {
  list: ProofPosts;
};
const ProofPostList = ({ list }: ProofPostListProps) => {
  return (
    <>
      {list.slice(0, 3).map((post) => (
        <div
          key={post.id}
          className='flex flex-col items-center'
        >
          <div className='relative w-[100px] h-[65px]'>
            <Image
              src={post.image_url || defaultRunProofImg}
              alt={`${post.content} 이미지`}
              fill
              className='object-cover rounded-[5px]'
            />
          </div>
          <h3 className='flex items-center text-[12px] gap-[3px]'>{formatDateShort(post.created_at)}</h3>
        </div>
      ))}
    </>
  );
};

export default ProofPostList;
