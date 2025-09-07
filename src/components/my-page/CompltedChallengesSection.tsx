'use client';

import { useUserChallengeList } from '@/hooks/queries/useUserChallengeList';
import { useModalStore } from '@/stores/useModalStore';
import { useUserStore } from '@/stores/useUserStore';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa6';
import Modal from '../Modal';
import CompletedChallenges from '../modal/CompletedChallenges';
import { UserChallenge } from '@/types/userChallenge.type';

const CompltedChallengesSection = () => {
  const { activeModal, open } = useModalStore();
  const { id } = useUserStore();
  const userChallengeList = useUserChallengeList(id) as UserChallenge[];

  return (
    <>
      <section>
        <div>
          <h1 className='flex items-center font-[19px]'>
            <button
              onClick={() => open('completed-challenges')}
              className='cursor-pointer flex items-center gap-[2px]'
            >
              완료한 챌린지
              <FaChevronRight />
            </button>
          </h1>
        </div>
        <section className='flex gap-[7px] pt-[8px]'>
          {!userChallengeList ? (
            <h1>아직 완료한 챌린지가 없습니다</h1>
          ) : (
            userChallengeList.slice(0, 3).map((userChallenge) => (
              <div
                key={userChallenge.id}
                className='flex flex-col items-center'
              >
                <div className='relative w-[100px] h-[65px] rounded-[5px]'>
                  <Image
                    src={userChallenge.challenges.image_url}
                    alt={`${userChallenge.challenges.title} 이미지`}
                    fill
                    className='object-cover'
                  />
                </div>

                <h3 className='flex items-center text-[12px] gap-[3px]'>{userChallenge.challenges.title}</h3>
              </div>
            ))
          )}
        </section>
      </section>
      <Modal id={'completed-challenges'}>
        {activeModal === 'completed-challenges' && <CompletedChallenges userChallengeList={userChallengeList} />}
      </Modal>
    </>
  );
};

export default CompltedChallengesSection;
