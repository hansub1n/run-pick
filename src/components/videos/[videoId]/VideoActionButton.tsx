type VideoActionButtonProps = {
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
};

const VideoActionButton = ({ onClick, label, icon }: VideoActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='cursor-pointer text-[15px] font-semibold w-[135px] h-[35px] bg-[#141414] border hover:border-[#007aff] hover:bg-[#007aff] transition-colors duration-300 rounded-[10px] flex items-center justify-center gap-[7px]'
    >
      {icon}
      {label}
    </button>
  );
};

export default VideoActionButton;
