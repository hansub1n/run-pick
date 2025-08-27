import { Duration } from '../RunProofForm';

type InputFieldprops = {
  content: string;
  distance_km: number;
  duration: Duration;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const InputField = ({ content, distance_km, duration, onChange }: InputFieldprops) => {
  return (
    <>
      <div className='flex flex-col gap-[6px]'>
        <div className='flex flex-col gap-[6px]'>
          <h1>러닝 거리</h1>
          <div className='flex items-end'>
            <input
              type='number'
              min={0}
              max={100}
              maxLength={3}
              name='distance_km'
              value={distance_km}
              onChange={onChange}
              className='h-[45px] rounded-[10px] border px-[5px] w-[80px] mr-[3px]'
            />
            km
          </div>
        </div>
        <h1>러닝 시간</h1>
        <div className='flex items-center gap-2'>
          <input
            type='number'
            min={0}
            max={23}
            maxLength={2}
            name='hours'
            value={duration.hours}
            placeholder='시간'
            onChange={onChange}
            className='h-[45px] rounded-[10px] border px-[5px] w-[80px]'
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
            className='h-[45px] rounded-[10px] border px-[5px] w-[80px]'
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
            className='h-[45px] rounded-[10px] border px-[5px] w-[80px]'
          />
        </div>
      </div>
      <div className='flex flex-col gap-[6px]'>
        <h1>한줄 소감</h1>
        <input
          type='text'
          maxLength={30}
          name='content'
          value={content}
          onChange={onChange}
          className='h-[45px] rounded-[10px] border px-[5px]'
        />
      </div>
    </>
  );
};

export default InputField;
