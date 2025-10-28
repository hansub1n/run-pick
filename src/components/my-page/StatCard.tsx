type StateCardProps = {
  title: string;
  value: number;
  unit: string;
};

const StatCard = ({ title, value, unit }: StateCardProps) => {
  return (
    <div className='w-[140px] h-[62px]'>
      <p className='text-[#B5B5B5] text-[12px] mb-[5px]'>{title}</p>
      <h3>
        <span className='text-[24px]'>{value}</span>
        <span className='text-[20px]'>{unit}</span>
      </h3>
    </div>
  );
};

export default StatCard;
