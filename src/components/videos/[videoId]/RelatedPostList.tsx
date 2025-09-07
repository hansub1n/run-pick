'use client';
import { ParamValue } from 'next/dist/server/request/params';
import { useRelatedPostList } from '@/hooks/queries/useRelatedPostList';
import Card from '@/components/Card';
import { BiSolidLike } from 'react-icons/bi';
import DefaultProfileImg from '/public/assets/images/default-profile-img.webp';

type RelatedPostListsProps = {
  videoId: ParamValue;
};
const RelatedPostList = ({ videoId }: RelatedPostListsProps) => {
  const realatedPostList = useRelatedPostList(videoId);

  console.log(realatedPostList);

  return (
    <>
      {realatedPostList.map((realatedPost) => (
        <Card
          key={realatedPost.id}
          imageUrl={realatedPost.image_url || DefaultProfileImg}
          title={realatedPost.content}
          subtitle={`${realatedPost.duration.hours}시간 ${realatedPost.duration.minutes}분 ${realatedPost.duration.seconds}초`}
          statIcons={[{ icon: <BiSolidLike />, label: 0 }]}
          isOpenModal={false}
        />
      ))}
    </>
  );
};

export default RelatedPostList;
