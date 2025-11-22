import Image, { StaticImageData } from 'next/image';

type StatIcon = {
  icon?: React.ReactNode;
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
  const IMG_WIDTH = isOpenModal ? 84 : 104;

  return (
    <div
      className={`${statIcons[0]?.onClick ? '' : 'cursor-pointer'} flex gap-[16px]  min-h-[100px] py-[17px] px-[10px] rounded-lg shadow-md transition-all hover:bg-[#2e2e2e] hover:scale-[1.01]`}
      onClick={onClick}
    >
      <Image
        src={imageUrl}
        alt={`${title} 이미지`}
        height={65}
        width={IMG_WIDTH}
        priority
        quality={60}
        className='object-cover rounded-[10px]'
      />
      <div className='w-[193px] h-[65px] flex flex-col justify-between'>
        <div>
          <h3 className='text-[12px] font-semibold break-words line-clamp-2'>{title}</h3>
          <p className='font-medium text-[#787878] text-[10px]'>
            {typeof subtitle === 'function' ? subtitle() : subtitle}
          </p>
        </div>
        <div className='flex justify-end gap-[6px]'>
          {statIcons.map((icon, idx) => (
            <button
              key={idx}
              onClick={icon.onClick}
              className={`flex items-center gap-[3px] px-3 py-1 rounded-md text-[10px] font-semibold transition-colors
        ${icon.onClick ? 'bg-[#007AFF] text-[#141414] hover:bg-[#339EFF] cursor-pointer' : 'bg-[#141414] text-[#bbbbbb]'}`}
            >
              {icon.icon} {icon.label}
            </button>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Card;
