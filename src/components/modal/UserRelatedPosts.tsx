import { RelatedPosts } from '@/types/relatedPosts.types';
import DefaultChallengeImg from '/public/assets/images/default-challenge-img.webp';
import React from 'react';
import Card from '../Card';

type UserRelatedPostsPros = {
  userRelatedPostList: RelatedPosts;
};
const UserRelatedPosts = ({ userRelatedPostList }: UserRelatedPostsPros) => {
  return (
    <div className='relative flex flex-col items-center'>
      <h1 className='top-[-1px] sticky bg-white w-full text-center text-[20px] z-10 pb-[5px]'>내가 작성한 글</h1>
      <section className='w-full pt-[5px]'>
        {userRelatedPostList.map((relatedPost) => (
          <Card
            key={relatedPost.id}
            imageUrl={relatedPost.image_url || DefaultChallengeImg}
            title={relatedPost.content}
            subtitle={relatedPost.condition}
            statIcons={[]}
            isOpenModal={true}
          />
        ))}
      </section>
    </div>
  );
};

export default UserRelatedPosts;
