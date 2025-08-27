'use client';
import ConditionButtons from '@/components/run-proof/form/ConditionButtons';
import InputField from '@/components/run-proof/form/InputField';
import PhotoUploadField from '@/components/run-proof/form/PhotoUploadField';
import { insertRunProofForm } from '@/services/run-proof/insertRunProofForm';
import { useVideoDetailStore } from '@/stores/useVideoDetailStore';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

export type RunProofForm = {
  content: string;
  distance_km: number;
  duration: Duration;
  image_url: string;
  condition: Condition;
};

export type Duration = {
  hours: number;
  minutes: number;
  seconds: number;
};

export type Condition = '상쾌' | '무난' | '피곤' | '녹초';

// TODO: 편집 시 초기 데이터 삽입
const RunProofForm = () => {
  const router = useRouter();
  const { videoDetail } = useVideoDetailStore();
  const initialForm: RunProofForm = {
    content: '',
    distance_km: 0,
    duration: { hours: 0, minutes: 0, seconds: 0 },
    image_url: '',
    condition: '상쾌',
  };

  const [runProofForm, setRunProofFrom] = useState<RunProofForm>(initialForm);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(runProofForm);

    insertRunProofForm({ videoDetail, runProofForm });

    router.refresh();
    router.push('/');
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
    <form
      onSubmit={onSubmitHandler}
      className='font-semibold pt-[23px] w-[313px] h-[calc(100vh-55px)]'
    >
      <section className='flex flex-col gap-[13px]'>
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
        className='my-[30px] w-full h-[53px] rounded-[10px] bg-[#4F4F4F] text-[20px] text-[#ffffff]'
      >
        완료
      </button>
    </form>
  );
};

export default RunProofForm;
