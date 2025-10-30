import { Condition } from '@/types/runProofForm.types';
import React from 'react';

type CondtionButtonsProps = {
  selected: Condition;
  onSelect: (condition: Condition) => void;
};

export const CONDITONS = [
  {
    id: 0,
    value: '상쾌',
    label: '😊 상쾌',
  },
  {
    id: 1,
    value: '무난',
    label: '🙂 무난',
  },
  {
    id: 2,
    value: '피곤',
    label: '😵‍💫 피곤',
  },
  {
    id: 3,
    value: '녹초',
    label: '😫 녹초',
  },
];

export const ConditionButtons = React.memo(({ selected, onSelect }: CondtionButtonsProps) => {
  return (
    <div className='flex flex-col gap-[8px]'>
      <h1 className='text-[13px] text-[#B5B5B5]'>상태 체크</h1>
      <div className='flex gap-[10px]'>
        {CONDITONS.map((condition) => (
          <button
            key={condition.id}
            type='button'
            value={condition.value}
            onClick={() => onSelect(condition.value as Condition)}
            className={`cursor-pointer w-1/4 py-[7px] rounded-[12px] border 
                   text-[13px] transition-colors duration-300 ${
                     selected === condition.value
                       ? 'bg-[#007AFF] text-[#FAFAFA] border-[#007AFF]'
                       : 'bg-[#1A1A1A] text-[#B5B5B5] border-[#2C2C2C] hover:border-[#007AFF]'
                   }`}
          >
            {condition.label}
          </button>
        ))}
      </div>
    </div>
  );
});

ConditionButtons.displayName = 'ConditionButtons';
export default ConditionButtons;
