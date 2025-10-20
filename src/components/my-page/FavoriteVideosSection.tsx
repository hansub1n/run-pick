import SectionHeader from './SectionHeader';
import { useModalStore } from '@/stores/useModalStore';
import ListSection from './ListSection';
import Modal from '../Modal';
import FavoriteVideoList from './FavoriteVideoList';
import { useUserStore } from '@/stores/useUserStore';
import { useUserFavoriteVideoList } from '@/hooks/queries/useUserFavoriteVideoList';
import { UserFavoriteVideos } from '@/types/userFavoriteVideos.type';
import FavoriteVideos from './FavoriteVideos';

const FavoriteVideosSection = () => {
  const { activeModal, open } = useModalStore();
  const { id } = useUserStore();
  const userFavoriteVideoList = useUserFavoriteVideoList(id) as unknown as UserFavoriteVideos;

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
