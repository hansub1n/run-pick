'use client';
import { ParamValue } from 'next/dist/server/request/params';
import { useRelatedPostList } from '@/hooks/queries/useRelatedPostList';
import Card from '@/components/Card';
import { BiSolidLike } from 'react-icons/bi';
import DefaultProfileImg from '/public/assets/images/default-profile-img.webp';
import { formatDateShort } from '@/utils/formatDateShort';
import { formatRunDuration } from '@/utils/formatRunDuration';
import { formatConditionLabel } from '@/utils/formatConditionLabel';

type RelatedPostListsProps = {
  videoId: ParamValue;
};
const RelatedPostList = ({ videoId }: RelatedPostListsProps) => {
  const realatedPostList = useRelatedPostList(videoId);

  return (
    <>
      {realatedPostList.map((realatedPost) => (
        <Card
          key={realatedPost.id}
          imageUrl={realatedPost.image_url || DefaultProfileImg}
          title={realatedPost.content}
          subtitle={`${realatedPost.distance_km}km | ${formatRunDuration(realatedPost.duration)}`}
          statIcons={[
            { label: `${formatConditionLabel(realatedPost.condition)} · ${formatDateShort(realatedPost.created_at)}` },
          ]}
          isOpenModal={false}
        />
      ))}
    </>
  );
};

export default RelatedPostList;
