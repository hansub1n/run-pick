'use client';
import Card from '@/components/Card';
import DefaultProfileImg from '/public/assets/images/default-profile-img.webp';
import { formatDateShort } from '@/utils/formatDateShort';
import { formatRunDuration } from '@/utils/formatRunDuration';
import { formatConditionLabel } from '@/utils/formatConditionLabel';
import { RelatedPosts } from '@/types/relatedPosts.types';

type RelatedPostListsProps = {
  list: RelatedPosts;
};
const RelatedPostList = ({ list }: RelatedPostListsProps) => {
  return (
    <>
      {list.map((post) => (
        <Card
          key={post.id}
          imageUrl={post.image_url || DefaultProfileImg}
          title={post.content}
          subtitle={`${post.distance_km}km | ${formatRunDuration(post.duration)}`}
          statIcons={[{ label: `${formatConditionLabel(post.condition)} · ${formatDateShort(post.created_at)}` }]}
          isOpenModal={false}
        />
      ))}
    </>
  );
};

export default RelatedPostList;
