import { Duration } from '@/types/runProofForm.types';

type InputFieldprops = {
  content: string;
  distance_km: number;
  duration: Duration;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const InputField = ({ content, distance_km, duration, onChange }: InputFieldprops) => {
  return (
    <div className='flex flex-col gap-[6px]'>
      <label className='text-[13px] text-[#B5B5B5]'>러닝 거리</label>
      <div className='flex items-end'>
        <input
          type='number'
          name='distance_km'
          value={distance_km}
          onChange={onChange}
          className='h-[45px] rounded-[10px] bg-[#1A1A1A] border border-[#2C2C2C] 
                 px-[8px] w-[80px] text-[#EDEDED] focus:outline-none focus:border-[#007AFF]'
        />
        <span className='ml-[5px] text-[#B5B5B5]'>km</span>
      </div>
      <label className='text-[13px] text-[#B5B5B5]'>러닝 시간</label>
      <div className='flex items-center gap-2 text-[#787878]'>
        <input
          type='number'
          min={0}
          max={23}
          maxLength={2}
          name='hours'
          value={duration.hours}
          placeholder='시간'
          onChange={onChange}
          className='h-[45px] rounded-[10px] bg-[#1A1A1A] border border-[#2C2C2C] 
                     px-[8px] w-[80px] text-[#EDEDED] focus:border-[#007AFF]'
        />
        :
        <input
          type='number'
          min={0}
          max={59}
          maxLength={2}
          name='minutes'
          value={duration.minutes}
          placeholder='분'
          onChange={onChange}
          className='h-[45px] rounded-[10px] bg-[#1A1A1A] border border-[#2C2C2C] 
                     px-[8px] w-[80px] text-[#EDEDED] focus:border-[#007AFF]'
        />
        :
        <input
          type='number'
          min={0}
          max={59}
          maxLength={2}
          name='seconds'
          value={duration.seconds}
          placeholder='초'
          onChange={onChange}
          className='h-[45px] rounded-[10px] bg-[#1A1A1A] border border-[#2C2C2C] 
                     px-[8px] w-[80px] text-[#EDEDED] focus:border-[#007AFF]'
        />
      </div>
      <label className='text-[13px] text-[#B5B5B5]'>한줄 소감</label>
      <input
        type='text'
        name='content'
        value={content}
        onChange={onChange}
        className='h-[45px] rounded-[10px] bg-[#1A1A1A] border border-[#2C2C2C] 
               px-[8px] text-[#EDEDED] focus:border-[#007AFF]'
      />
    </div>
  );
};

export default InputField;
