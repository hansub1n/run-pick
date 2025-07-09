import ConditionButtons from '@/components/run-proof/form/ConditionButtons';
import InputField from '@/components/run-proof/form/InputField';
import PhotoUploadField from '@/components/run-proof/form/PhotoUploadField';

// TODO: 편집 시 초기 데이터 삽입
const RunProofForm = () => {
  return (
    <form className='font-semibold pt-[23px] w-[313px] h-[calc(100vh-55px)]'>
      <section className='flex flex-col gap-[13px]'>
        <PhotoUploadField />
        <InputField />
        <ConditionButtons />
      </section>
      <button className='mt-[60px] w-full h-[53px] rounded-[10px] bg-[#4F4F4F] text-[20px] text-[#ffffff]'>완료</button>
    </form>
  );
};

export default RunProofForm;
