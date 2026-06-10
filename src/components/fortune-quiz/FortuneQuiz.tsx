import { useSearchParams } from 'next/navigation';
import QuizProgress from './QuizProgress';

const RUNNING_FORTUNE_QUIZ = [
  {
    id: 1,
    question: '오늘 신발을 신으려는데, 운동화가 말을 겁니다. 뭐라고 하나요?',
    options: [
      { id: 'A', label: '주인님, 오늘 제 밑창 작살낼 준비 되셨나요?', value: 'high_energy_ambitious' },
      { id: 'B', label: '5분만 더... 현관 바닥이 너무 시원해요...', value: 'low_energy_lethargic' },
      { id: 'C', label: '킁킁… 이 냄새 맡고도 뛰겠다고? 용감하네', value: 'caution_bad_luck' },
      { id: 'D', label: '힙하게 그냥 맨발로 나가는 건 어때?', value: 'rebellious_free_spirit' },
    ],
  },
  {
    id: 2,
    question: "편의점에 물 사러 갔다가 '러닝 도사'를 만났습니다. 그가 건넨 비법 물약은?",
    options: [
      { id: 'A', label: "속도 업 '러닝 부스터'", value: 'speed_boost' },
      { id: 'B', label: "생각이 줄어드는 '잡생각 제로수'", value: 'mental_focus' },
      { id: 'C', label: "무릎 보호 '관절 보호수'", value: 'joint_protection' },
      { id: 'D', label: "운동했다고 믿게 되는 '자기암시수'", value: 'short_recovery_run' },
    ],
  },
  {
    id: 3,
    question: '페이스가 최고조, 저 맞은편에서 아는 사람이 뛰어옵니다. 당신의 선택은?',
    options: [
      { id: 'A', label: '더 전력 질주하며 스쳐 지나가기', value: 'high_intensity_interval' },
      { id: 'B', label: '못 본 척 슬쩍 다른 길로 빠져나가기', value: 'rest_and_stretching' },
      { id: 'C', label: '가벼운 목례 후 페이스 유지', value: 'steady_endurance' },
      { id: 'D', label: '마주치기 싫다! 왔던 길로 광속 유턴해', value: 'sprint_and_finish' },
    ],
  },
  {
    id: 4,
    question: '오늘 당신의 플레이리스트에 딱 한 곡만 넣을 수 있다면?',
    options: [
      { id: 'A', label: 'TWICE - What is Love?', value: 'gradual_boost' },
      { id: 'B', label: '블랙핑크 - 뛰어(JUMP)', value: 'full_speed_mode' },
      { id: 'C', label: '검정치마 - Hollywood', value: 'chill_vibes' },
      { id: 'D', label: '노래 없이 호흡과 발소리에 집중', value: 'silent_focus' },
    ],
  },
  {
    id: 5,
    question: '드디어 목표 거리 완주! 정지 버튼을 누른 당신의 머릿속은?',
    options: [
      { id: 'A', label: '지금 배달 시키면 씻고 나왔을 때 도착하겠지?', value: 'high_calorie_reward' },
      { id: 'B', label: '러닝 앱 캡쳐... 오운완 인증 완료!', value: 'social_butterfly' },
      { id: 'C', label: '드디어 끝..! 이번 주 러닝 끝!', value: 'efficiency_freedom' },
      { id: 'D', label: '심박수, 평균 페이스... 아, 이때 말렸네.', value: 'harsh_analyst' },
    ],
  },
];

type FortuneQuizProps = {
  onClick: (value: string) => void;
  selected: string;
};

const FortuneQuiz = ({ onClick, selected }: FortuneQuizProps) => {
  const params = useSearchParams();
  const step = Number(params.get('step')) || 0;

  const getQuizByStep = (step: number) => {
    if (step === 0) return;

    return RUNNING_FORTUNE_QUIZ[step - 1];
  };

  const quiz = getQuizByStep(step);

  if (step === 0) {
    return (
      <div className='flex flex-col items-center justify-center min-h-[60vh] text-center px-6'>
        <h1 className='text-3xl font-bold mb-4'>오늘 당신의 러닝 운명을 확인해보세요</h1>
        <p className='text-[#787878] mb-6'>과몰입은 금물! 재미로만 가볍게 즐겨주세요</p>
        <div className='px-4 py-2 rounded-full bg-[#1F1F1F] text-sm text-[#787878] border border-[#2C2C2C]'>
          ⏱ 약 30초 소요
        </div>
      </div>
    );
  }

  return (
    <div className='max-w-md mx-auto px-4 py-8'>
      <QuizProgress
        step={step}
        quize={RUNNING_FORTUNE_QUIZ}
      />

      <div className='rounded-2xl bg-gradient-to-br from-[#1F1F1F] to-[#111] shadow-lg p-6 mb-6 border border-[#2C2C2C]'>
        <h1 className='text-[17px] font-semibold leading-relaxed text-gray-100'>{quiz?.question}</h1>
      </div>

      <div className='flex flex-col gap-3'>
        {quiz?.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onClick(option.value)}
            className={`text-[14px] w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 ${
              selected === option.value
                ? 'bg-[#007AFF] text-white border-[#007AFF] scale-[1.01] shadow-md'
                : 'bg-[#1A1A1A] text-gray-300 border-[#2C2C2C] hover:border-[#007AFF] hover:bg-[#222]'
            }`}
          >
            <span className='font-medium'>{option.id}.</span> {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FortuneQuiz;
