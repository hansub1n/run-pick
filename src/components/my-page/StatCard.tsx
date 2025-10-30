type StateCardProps = {
  title: string;
  value: number;
  unit: string;
};

const StatCard = ({ title, value, unit }: StateCardProps) => {
  return (
    <div className='w-[140px] h-[70px] rounded-[12px] bg-[#1f1f1f] flex flex-col items-center justify-center'>
      <p className='text-[#b5b5b5] text-[12px] mb-[4px]'>{title}</p>
      <h3 className='font-semibold'>
        <span className='text-[24px] text-[#007AFF]'>{value}</span>
        <span className='text-[16px] text-[#c5c5c5] ml-[2px]'>{unit}</span>
      </h3>
    </div>
  );
};

export default StatCard;
