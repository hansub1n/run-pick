import { Distance } from '@/types/videos.types';

type DistnaceTabsProps = {
  distance: Distance;
  onDistanceChange: (distance: Distance) => void;
};

const distanceOptions = [{ label: '3km' }, { label: '5km' }, { label: '10km' }];
const DistanceTabs = ({ distance, onDistanceChange }: DistnaceTabsProps) => {
  return (
    <div className='font-semibold text-[18px] flex'>
      {distanceOptions.map((option) => (
        <h1
          key={option.label}
          onClick={() => onDistanceChange(option.label as Distance)}
          className={`cursor-pointer flex-1/3 h-[61px] flex items-center justify-center box-border border-b-[5px] ${distance === option.label ? 'border-[#007aff] text-[#007aff]' : 'border-[#1a1a1a] text-[#414141]'}`}
        >
          {option.label}
        </h1>
      ))}
    </div>
  );
};

export default DistanceTabs;
