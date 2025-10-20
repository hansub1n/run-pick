import Image, { StaticImageData } from 'next/image';

type StatIcon = {
  icon: React.ReactNode;
  label: string | number;
  onClick?: () => void;
};

type CardProps = {
  imageUrl: string | StaticImageData;
  title: string | undefined;
  subtitle?: string | (() => string);
  statIcons: StatIcon[];
  onClick?: () => void;
  children?: React.ReactNode;
  isOpenModal: boolean;
};

const Card = ({ imageUrl, title, subtitle, statIcons, onClick, children, isOpenModal }: CardProps) => {
  return (
    <div
      className='cursor-pointer min-h-[100px] py-[17px] border-b border-[#D9D9D9] flex gap-[16px]'
      onClick={onClick}
    >
      <div className={`relative min-h-[65px] ${isOpenModal ? 'min-w-[84px]' : 'min-w-[104px]'}`}>
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
              onClick={statIcon.onClick}
              className='flex items-center gap-[2px]'
            >
              <span>{statIcon.icon}</span>
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
