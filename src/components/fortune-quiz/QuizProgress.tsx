type QuizProgressProps = {
  step: number;
  quize: {
    id: number;
    question: string;
    options: {
      id: string;
      label: string;
      value: string;
    }[];
  }[];
};

const QuizProgress = ({ step, quize }: QuizProgressProps) => {
  return (
    <div className='mb-4'>
      <div className='flex justify-between text-xs text-gray-400 mb-1'>
        <span>
          {step} / {quize.length}
        </span>
        <span>{Math.round((step / quize.length) * 100)}%</span>
      </div>
      <div className='w-full h-2 bg-[#2C2C2C] rounded-full overflow-hidden'>
        <div
          className='h-full bg-[#007AFF] transition-all duration-500'
          style={{ width: `${(step / quize.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default QuizProgress;
