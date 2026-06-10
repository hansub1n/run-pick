import { FortuneProfile } from '@/app/fortune-quiz/result/page';
import { upsertSharedFortune } from '@/services/fortune-quiz/upsertSharedFortune';
import { useRouter } from 'next/navigation';
import { FiShare2 } from 'react-icons/fi';

const BUTTON_STYLES = {
  retryOrStart:
    'cursor-pointer flex-1 py-3.5 rounded-2xl font-semibold text-[15px] text-[#38BDF8] bg-[#007AFF15] border border-[#007AFF30] transition-all duration-200 active:scale-[0.96] hover:bg-[#007AFF25] hover:border-[#007AFF60]',
  share:
    'cursor-pointer px-5 rounded-2xl bg-[#1E293B] border border-[#334155] text-[#38BDF8] shadow-lg transition-all duration-200 active:scale-[0.95] hover:bg-[#334155] flex items-center justify-center',
  home: 'cursor-pointer flex-1 py-4 rounded-2xl font-semibold text-[15px] text-[#94A3B8] bg-[#1A1A1A] border border-[#2D2D2D] transition-all duration-200 active:scale-[0.95] hover:bg-[#252525] hover:text-white',
};

const BUTTON_LABELS = {
  start: '내 운세 보기',
  retry: '다시하기',
  share: <FiShare2 className='w-[22px] h-[22px]' />,
  home: '홈으로 가기',
};

type ResultButtonsProps = {
  fortune: FortuneProfile;
  isShared: boolean;
};

const ResultButtons = ({ fortune, isShared }: ResultButtonsProps) => {
  const router = useRouter();

  const onClickHandler = async (type: string) => {
    switch (type) {
      case 'retryOrStart':
        if (!isShared) {
          sessionStorage.removeItem('fortune-quiz');
          sessionStorage.removeItem('fortune-result');
        }
        router.replace('/fortune-quiz');
        return;

      case 'share':
        const shareId = await upsertSharedFortune(fortune);
        const shareUrl = `${location.origin}/fortune-quiz/result?shareId=${shareId}`;

        if (navigator.share) {
          try {
            await navigator.share({
              title: '오늘의 러닝 운세 결과',
              text: `${fortune.title} - ${fortune.description.slice(0, 100)}...`,
              url: shareUrl!,
            });
          } catch (error) {
            console.error(error);
            return;
          }
        } else {
          await navigator.clipboard.writeText(shareUrl!);
          alert('운세 결과 링크가 클립보드에 복사되었습니다!');
        }
        return;

      case 'home':
        return router.push('/');
    }
  };

  return (
    <div className='flex gap-[12px] w-full px-6'>
      <button
        className={BUTTON_STYLES['retryOrStart']}
        onClick={() => onClickHandler('retryOrStart')}
      >
        {isShared ? BUTTON_LABELS['start'] : BUTTON_LABELS['retry']}
      </button>
      {!isShared && (
        <button
          className={BUTTON_STYLES['share']}
          onClick={() => onClickHandler('share')}
        >
          {BUTTON_LABELS['share']}
        </button>
      )}
      <button
        className={BUTTON_STYLES['home']}
        onClick={() => onClickHandler('home')}
      >
        {BUTTON_LABELS['home']}
      </button>
    </div>
  );
};

export default ResultButtons;
