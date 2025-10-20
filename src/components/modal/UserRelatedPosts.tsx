import { RelatedPosts } from '@/types/relatedPosts.types';
import DefaultChallengeImg from '/public/assets/images/default-challenge-img.webp';
import React from 'react';
import Card from '../Card';

type UserRelatedPostsPros = {
  list: RelatedPosts;
};
const UserRelatedPosts = ({ list }: UserRelatedPostsPros) => {
  return (
    <div className='relative flex flex-col items-center'>
      <h1 className='top-[-1px] sticky bg-white w-full text-center text-[20px] z-10 pb-[5px]'>내가 작성한 글</h1>
      <section className='w-full pt-[5px]'>
        {list.map((post) => (
          <Card
            key={post.id}
            imageUrl={post.image_url || DefaultChallengeImg}
            title={post.content}
            subtitle={post.condition}
            statIcons={[]}
            isOpenModal={true}
          />
        ))}
      </section>
    </div>
  );
};

export default UserRelatedPosts;
