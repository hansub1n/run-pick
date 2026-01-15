import { useSearchParams } from 'next/navigation';

const RUNNING_FORTUNE_QUIZ = [
  {
    id: 1,
    question: '오늘 신발을 신으려는데, 운동화가 말을 겁니다. 뭐라고 하나요?',
    options: [
      { id: 'A', label: "👟 '주인님, 오늘 제 밑창 작살낼 준비 되셨나요?'", value: 'high_energy_ambitious' },
      { id: 'B', label: "💤 '5분만 더... 현관 바닥이 너무 시원해요...'", value: 'low_energy_lethargic' },
      { id: 'C', label: "🧼 '나 어제 똥 밟은 거 알지? 조심해라.'", value: 'caution_bad_luck' },
      { id: 'D', label: "🤫 '그냥 맨발로 나가는 건 어때? 힙하잖아.'", value: 'rebellious_free_spirit' },
    ],
  },
  {
    id: 2,
    question: "편의점에 물 사러 갔다가 '러닝 도사'를 만났습니다. 그가 건넨 비법 물약은?",
    options: [
      { id: 'A', label: "🌶️ 코에서 불이 나며 속도가 2배 되는 '캡사이신 에이드'", value: 'speed_boost' },
      { id: 'B', label: "🧘‍♂️ 내면의 평화가 찾아오는 '사무엘 잭슨의 침묵'", value: 'mental_focus' },
      { id: 'C', label: "🛡️ 무릎을 강철로 만들어주는 '구리스 로션'", value: 'joint_protection' },
      { id: 'D', label: "🍬 10km 뛴 기분만 내주는 '기만 젤리'", value: 'short_recovery_run' },
    ],
  },
  {
    id: 3,
    question: '달리는 중에 갑자기 멧돼지가 나타났습니다. 당신의 선택은?',
    options: [
      { id: 'A', label: '⚡️ 이때를 기다렸다! 멧돼지와 1:1 속도 배틀', value: 'high_intensity_interval' },
      { id: 'B', label: '🌳 잽싸게 나무 위로 올라가 멧돼지 갈 때까지 존버', value: 'rest_and_stretching' },
      { id: 'C', label: '🤝 멧돼지와 친구가 되어 나란히 달리기', value: 'steady_endurance' },
      { id: 'D', label: "💨 '엄마!!'를 외치며 왔던 길로 광속 유턴", value: 'sprint_and_finish' },
    ],
  },
  {
    id: 4,
    question: '오늘 당신의 플레이리스트에 딱 한 곡만 넣을 수 있다면?',
    options: [
      { id: 'A', label: '🔥 6시 내고향 오프닝 (활기찬 전통의 리듬)', value: 'upbeat_traditional' },
      { id: 'B', label: '🎸 메탈리카의 드럼 비트 (심장 터지는 베이스)', value: 'aggressive_hardcore' },
      { id: 'C', label: '🐦 숲속의 물소리와 산새 소리 (자연인 모드)', value: 'calm_nature' },
      { id: 'D', label: "🤐 아무 소리도 안 들리는 '진공 상태'", value: 'silent_meditation' },
    ],
  },
  {
    id: 5,
    question: "결승선에 도착했는데, 메달 대신 '이것'을 준다고 합니다. 당신의 픽은?",
    options: [
      { id: 'A', label: '🍗 갓 튀긴 치킨 다리 한 짝', value: 'reward_food' },
      { id: 'B', label: '❄️ 머리에 부어버릴 얼음물 한 양동이', value: 'cool_down' },
      { id: 'C', label: "🍑 '잘했다'라는 따뜻한 엉덩이 토닥임", value: 'emotional_support' },
      { id: 'D', label: '💸 1m당 10원씩 정산해주는 현금', value: 'tangible_achievement' },
    ],
  },
];

type FortuneQuizProps = {
  onClick: (value: string) => void;
};

const FortuneQuiz = ({ onClick }: FortuneQuizProps) => {
  const params = useSearchParams();
  const step = Number(params.get('step')) || 0;

  const getQuizByStep = (step: number) => {
    if (step === 0) return;

    return RUNNING_FORTUNE_QUIZ[step - 1];
  };

  const quiz = getQuizByStep(step);

  if (step === 0) {
    return (
      <div>
        <h1>오늘 당신의 러닝 운명을 확인해보세요.</h1>
        <p>과몰입 금지! 재미로만 가볍게 즐겨주세요</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{quiz?.question}</h1>
      <div>
        {quiz?.options.map((option) => (
          <button
            key={option.id}
            value={option.value}
            onClick={() => onClick(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FortuneQuiz;
