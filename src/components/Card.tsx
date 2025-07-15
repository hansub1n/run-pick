import Image from 'next/image';

type StatIcon = {
  icon: React.ReactNode;
  label: string | number;
  onClick?: () => void;
};

type Cardprops = {
  imageUrl: string;
  title: string;
  subtitle?: string | (() => string);
  statIcons: StatIcon[];
  onClick?: () => void;
  children?: React.ReactNode;
};

const Card = ({ imageUrl, title, subtitle, statIcons, onClick, children }: Cardprops) => {
  return (
    <div
      className='cursor-pointer min-h-[100px] py-[17px] border-b border-[#D9D9D9] flex gap-[16px]'
      onClick={onClick}
    >
      <div className='relative min-w-[104px] min-h-[65px]'>
        <Image
          src={imageUrl}
          alt={`${title} 이미지`}
          fill
          className='object-cover rounded-[10px]'
        />
      </div>
      <div className='min-w-[193px] h-[65px] flex flex-col justify-between'>
        <div>
          <h1 className='text-[12px] font-medium break-words line-clamp-2'>{title}</h1>
          <p className='font-medium text-[10px]'>{typeof subtitle === 'function' ? subtitle() : subtitle}</p>
        </div>
        <div className='font-semibold text-[10px] flex gap-[6px] justify-end'>
          {statIcons.map((statIcon, index) => (
            <h3
              key={`statIcon-${index}`}
              className='flex items-center gap-[2px]'
            >
              <span onClick={statIcon.onClick}>{statIcon.icon}</span>
              <span>{statIcon.label}</span>
            </h3>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Card;
