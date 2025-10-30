type VideoActionButtonProps = {
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
};

const VideoActionButton = ({ onClick, label, icon }: VideoActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='cursor-pointer text-[15px] font-semibold 
             w-[135px] h-[38px] rounded-[10px]
             flex items-center justify-center gap-[7px]
             bg-[#1F1F1F] text-[#EDEDED] border border-[#2C2C2C]
             transition-all duration-300 
             hover:bg-[#2B2B2B] hover:border-[#007AFF] hover:text-[#007AFF]
             active:scale-[0.98]'
    >
      {icon}
      {label}
    </button>
  );
};

export default VideoActionButton;
