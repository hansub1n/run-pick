import { Condition } from '@/types/runProofForm.types';
import React from 'react';

type CondtionButtonsProps = {
  selected: Condition;
  onSelect: (condition: Condition) => void;
};
export const ConditionButtons = React.memo(({ selected, onSelect }: CondtionButtonsProps) => {
  const conditions = [
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
  return (
    <div className='flex flex-col gap-[6px]'>
      <h1>상태 체크</h1>
      <div className='flex gap-[10px]'>
        {conditions.map((condition) => (
          <button
            key={condition.id}
            type='button'
            value={condition.value}
            onClick={() => {
              if (selected !== condition.value) {
                onSelect(condition.value as Condition);
              }
            }}
            className={`w-1/4 rounded-[15px] border py-[5px] text-[14px] ${selected === condition.value ? 'text-[#ffffff] bg-[#171717]' : 'text-[#000000] bg-[#ffffff]'}`}
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
