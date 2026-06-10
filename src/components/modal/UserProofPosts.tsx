import { ProofPosts } from '@/types/proofPosts.types';
import defaultRunProofImg from '/public/assets/images/default-run-proof-img.webp';
import React from 'react';
import Card from '../Card';
import { formatDateShort } from '@/utils/formatDateShort';
import { formatConditionLabel } from '@/utils/formatConditionLabel';
import { formatRunDuration } from '@/utils/formatRunDuration';

type UserProofPostsPros = {
  list: ProofPosts;
};
const UserProofPosts = ({ list }: UserProofPostsPros) => {
  return (
    <div className='relative flex flex-col items-center'>
      <h1 className='font-semibold top-[-1px] sticky bg-[#1a1a1a] w-full text-center text-[20px] z-10 pb-[5px]'>
        내가 작성한 글
      </h1>
      <section className='w-full pt-[5px]'>
        {list.map((post) => (
          <Card
            key={post.id}
            imageUrl={post.image_url || defaultRunProofImg}
            title={post.content}
            subtitle={`${post.distance_km}km | ${formatRunDuration(post.duration)}`}
            statIcons={[{ label: `${formatConditionLabel(post.condition)} · ${formatDateShort(post.created_at)}` }]}
            isOpenModal={true}
          />
        ))}
      </section>
    </div>
  );
};

export default UserProofPosts;
