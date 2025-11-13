'use client';
import ConditionButtons from '@/components/run-proof/form/ConditionButtons';
import InputField from '@/components/run-proof/form/InputField';
import PhotoUploadField from '@/components/run-proof/form/PhotoUploadField';
import { insertRunProofForm } from '@/services/run-proof/insertRunProofForm';
import { useVideoDetailStore } from '@/stores/useVideoDetailStore';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import Modal from '../Modal';
import ConfirmPost from '../modal/ConfirmPost';
import { useModalStore } from '@/stores/useModalStore';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/hooks/queries/queryKeys';
import { useUserStore } from '@/stores/useUserStore';
import { Condition, RunProofFormType } from '@/types/runProofForm.types';

// TODO: 편집 시 초기 데이터 삽입
const RunProofForm = () => {
  const { id } = useUserStore();
  const queryClient = useQueryClient();
  const { activeModal, open, close } = useModalStore();
  const router = useRouter();
  const { videoDetail } = useVideoDetailStore();

  const initialForm: RunProofFormType = {
    content: '',
    distance_km: 0,
    duration: { hours: 0, minutes: 0, seconds: 0 },
    image_url: '',
    condition: '상쾌',
  };

  const [runProofForm, setRunProofFrom] = useState<RunProofFormType>(initialForm);

  const onConfirmHandler = async () => {
    await insertRunProofForm({ videoDetail, runProofForm });

    await queryClient.invalidateQueries({ queryKey: QUERY_KEYS.activeChallenge(id) });
    await queryClient.invalidateQueries({ queryKey: QUERY_KEYS.userChallenges(id) });
    await queryClient.invalidateQueries({ queryKey: QUERY_KEYS.userProofPosts(id) });
    await queryClient.invalidateQueries({ queryKey: QUERY_KEYS.monthlyStats(id) });

    router.replace('/');
    close();
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    open('confirm-post');
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'hours' || name === 'minutes' || name === 'seconds') {
      setRunProofFrom((prev) => ({
        ...prev,
        duration: {
          ...prev.duration,
          [name]: Number(value),
        },
      }));
    } else {
      setRunProofFrom((prev) => ({
        ...prev,
        [name]: name === 'distance_km' ? Number(value) : value,
      }));
    }
  };

  const onSelectHandler = useCallback((condition: Condition) => {
    setRunProofFrom((prev) => ({
      ...prev,
      condition,
    }));
  }, []);

  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className='font-semibold pt-[23px] w-[313px] h-[calc(100vh-55px)] text-[#EDEDED] gap-[15px]'
      >
        <section className='flex flex-col gap-[7px]'>
          <PhotoUploadField
            videoDetail={videoDetail}
            onChange={onChangeHandler}
          />
          <InputField
            content={runProofForm.content}
            distance_km={runProofForm.distance_km}
            duration={runProofForm.duration}
            onChange={onChangeHandler}
          />
          <ConditionButtons
            selected={runProofForm.condition}
            onSelect={onSelectHandler}
          />
        </section>
        <button
          type='submit'
          className='cursor-pointer my-[25px] w-full h-[53px] 
               text-[20px] font-semibold rounded-[10px] 
               bg-[#007AFF] text-[#FAFAFA] 
               transition-all duration-300
               hover:bg-[#0066CC] active:scale-[0.98]'
        >
          완료
        </button>
      </form>
      <Modal id={'confirm-post'}>
        {activeModal === 'confirm-post' && <ConfirmPost onConfirm={onConfirmHandler} />}
      </Modal>
    </>
  );
};

export default RunProofForm;
