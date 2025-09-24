'use client';
import { useUserRelatedPostList } from '@/hooks/queries/useUserRelatedPostList';
import { useUserStore } from '@/stores/useUserStore';
import { FaChevronRight, FaPersonRunning } from 'react-icons/fa6';
import Modal from '../Modal';
import UserRelatedPosts from '../modal/UserRelatedPosts';
import { useModalStore } from '@/stores/useModalStore';
import Image from 'next/image';

const MyPostsSection = () => {
  const { open, activeModal } = useModalStore();
  const { id } = useUserStore();
  const userRelatedPostList = useUserRelatedPostList(id);

  return (
    <>
      <section>
        <div className='flex items-center gap-[2px]'>
          <h1 className='font-[19px]'>내가 작성한 글</h1>
          <button
            onClick={() => open('user-related-posts')}
            className='cursor-pointer'
          >
            <FaChevronRight />
          </button>
        </div>
        <section className='flex gap-[7px] pt-[8px]'>
          {userRelatedPostList.slice(0, 3).map((relatedPost) => (
            <div
              key={relatedPost.id}
              className='flex flex-col items-center'
            >
              <div className='relative w-[100px] h-[65px] rounded-[5px]'>
                <Image
                  src={relatedPost.image_url}
                  alt={`${relatedPost.title} 이미지`}
                  fill
                  className='object-cover'
                />
              </div>
              {/* TODO: 추후에 좋아요 카운팅 */}
              <h3 className='flex items-center text-[12px] gap-[3px]'>
                <FaPersonRunning />
                {relatedPost.distance_km}km
              </h3>
            </div>
          ))}
        </section>
      </section>
      <Modal id={'user-related-posts'}>
        {activeModal === 'user-related-posts' && <UserRelatedPosts userRelatedPostList={userRelatedPostList} />}
      </Modal>
    </>
  );
};

export default MyPostsSection;
