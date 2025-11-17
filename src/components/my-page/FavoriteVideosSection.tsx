import SectionHeader from './SectionHeader';
import { useModalStore } from '@/stores/useModalStore';
import ListSection from './ListSection';
import Modal from '../Modal';
import FavoriteVideoList from './FavoriteVideoList';
import { useUserStore } from '@/stores/useUserStore';
import { useUserFavoriteVideoList } from '@/hooks/queries/useUserFavoriteVideoList';
import FavoriteVideos from './FavoriteVideos';

const FavoriteVideosSection = () => {
  const { activeModal, open } = useModalStore();
  const { id } = useUserStore();
  const { userFavoriteVideoList, isLoading } = useUserFavoriteVideoList(id);

  const onClickHandler = () => {
    if (userFavoriteVideoList.length > 0) {
      open('favorite-videos');
    }
  };

  return (
    <>
      <div>
        <SectionHeader
          title={'즐겨찾기한 영상'}
          onClick={onClickHandler}
        />
        <ListSection
          list={userFavoriteVideoList}
          isLoading={isLoading}
          emptyMessage='즐겨찾기한 영상이 없어요. 마음에 드는 영상을 추가해보세요!'
        >
          <FavoriteVideoList list={userFavoriteVideoList} />
        </ListSection>
      </div>

      <Modal id={'favorite-videos'}>
        {activeModal === 'favorite-videos' && <FavoriteVideos list={userFavoriteVideoList} />}
      </Modal>
    </>
  );
};

export default FavoriteVideosSection;
