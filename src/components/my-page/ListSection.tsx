import { ProofPosts } from '@/types/proofPosts.types';
import { UserChallenges } from '@/types/userChallenges.type';
import { UserFavoriteVideos } from '@/types/userFavoriteVideos.type';
import PreviewCardSkeleton from '../skeletons/PreviewCardSkeleton';

type ListSectionProps = {
  list: UserChallenges | UserFavoriteVideos | ProofPosts;
  isLoading: boolean;
  emptyMessage: string;
  children: React.ReactNode;
};

const ListSection = ({ list, isLoading, emptyMessage, children }: ListSectionProps) => {
  if (isLoading || !list) {
    return (
      <div className='flex gap-[7px] pt-[8px]'>
        <PreviewCardSkeleton count={3} />
      </div>
    );
  }

  if (list.length === 0) {
    return (
      <div className='flex gap-[7px] pt-[8px]'>
        <p className='w-full h-[83px] text-[11px] text-[#5C5C5C]'>{emptyMessage}</p>
      </div>
    );
  }

  return <div className='flex gap-[7px] pt-[8px]'>{children}</div>;
};
export default ListSection;
