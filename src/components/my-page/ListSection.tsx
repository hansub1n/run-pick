import { RelatedPosts } from '@/types/relatedPosts.types';
import { UserChallenges } from '@/types/userChallenges.type';
import { UserFavoriteVideos } from '@/types/userFavoriteVideos.type';

type ListSectionProps = {
  list: UserChallenges | UserFavoriteVideos | RelatedPosts;
  emptyMessage: string;
  children: React.ReactNode;
};

const ListSection = ({ list, emptyMessage, children }: ListSectionProps) => {
  return (
    <div className='flex gap-[7px] pt-[8px]'>
      {list.length === 0 ? (
        <p className='w-full h-[83px] text-[11px] text-[#5C5C5C]'>{emptyMessage}</p>
      ) : (
        <> {children}</>
      )}
    </div>
  );
};

export default ListSection;
