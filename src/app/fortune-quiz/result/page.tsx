'use client';
import ResultButtons from '@/components/fortune-quiz/ResultButtons';
import { useEffect, useState } from 'react';

type QuizResult = Record<number, string>;

export type FortuneProfile = {
  id: string;
  title: string;
  description: string;
  luckyItems: string[];
};

const FORTUNE_PROFILES: Record<string, FortuneProfile> = {
  'rebellious_free_spirit%sprint_and_finish%full_speed_mode%high_calorie_reward': {
    id: 'rebellious_free_spirit%sprint_and_finish%full_speed_mode%high_calorie_reward',
    title: '자유로운 질주의 반항아',
    description:
      '규칙을 깨고 자유롭게 달리는 당신! 오늘은 맨발로 공원을 달리며 새로운 자극을 받아보세요. 마지막 스퍼트로 마무리하는 당신의 스타일이 빛날 거예요.',
    luckyItems: [
      '🎧 노이즈 캔슬링 이어폰 - 외부 소음 차단으로 나만의 세계 집중',
      '⚡ 에너지젤 - 마지막 스퍼트를 위한 즉각적 에너지',
      '📸 즉흥 사진 촬영 - 러닝 중 마주치는 풍경을 사진으로 남겨보세요',
    ],
  },

  'silent_focus%mental_focus%steady_endurance%efficiency_freedom': {
    id: 'silent_focus%mental_focus%steady_endurance%efficiency_freedom',
    title: '고요한 균형의 달인',
    description:
      '외부 소음을 차단하고 내면에 집중하는 당신. 오늘은 호흡과 발소리에만 귀를 기울이며 꾸준한 페이스를 유지해보세요. 명상의 시간으로 변할 거예요.',
    luckyItems: [
      '🧘 호흡 앱 - 심호흡을 돕는 명상 가이드',
      '🎧 노이즈 캔슬링 이어폰 - 외부 소음을 완벽하게 차단',
      '📊 페이스 메이커 - 일정한 속도를 유지하는 도구',
    ],
  },

  'caution_bad_luck%joint_protection%harsh_analyst': {
    id: 'caution_bad_luck%joint_protection%harsh_analyst',
    title: '신중한 데이터 분석가',
    description:
      '안전과 데이터를 중시하는 당신. 오늘은 철저한 준비와 함께 심박수, 페이스, 칼로리를 세심하게 체크하며 효율적인 운동을 즐겨보세요.',
    luckyItems: [
      '📊 스마트워치 - 실시간 데이터 모니터링',
      '🦵 무릎 보호대 - 관절 보호를 위한 서포트 기어',
      '📱 러닝 트래킹 앱 - 상세한 분석과 인사이트 제공',
    ],
  },

  'low_energy_lethargic%short_recovery_run%rest_and_stretching': {
    id: 'low_energy_lethargic%short_recovery_run%rest_and_stretching',
    title: '부드러운 회복의 수호자',
    description:
      '몸과 마음의 균형을 중시하는 당신. 오늘은 가벼운 스트레칭과 함께 천천히 걷는 것도 좋은 선택일 수 있어요. 몸이 보내는 신호에 귀를 기울여보세요.',
    luckyItems: [
      '🧘 요가 매트 - 스트레칭과 휴식을 위한 전용 매트',
      '💧 수분 보충제 - 운동 중 탈수를 예방하는 전해질 드링크',
      '😴 숙면 보조제 - 컨디션 회복을 위한 자연 성분 보충제',
    ],
  },

  'high_energy_ambitious%speed_boost%high_intensity_interval': {
    id: 'high_energy_ambitious%speed_boost%high_intensity_interval',
    title: '열정의 스피드 데몬',
    description:
      '에너지가 넘치는 당신! 오늘은 인터벌 트레이닝에 도전하거나 새로운 기록에 도전해보세요. 빠른 페이스로 심폐 지구력을 키워보아요.',
    luckyItems: [
      '💪 프로틴 쉐이크 - 근력 강화와 회복을 위한 단백질 보충',
      '🔄 인터벌 타이머 - 정확한 인터벌 트레이닝을 위한 앱',
      '💨 속도 측정 앱 - 정확한 페이스 체크와 기록',
    ],
  },

  'gradual_boost%chill_vibes%social_butterfly': {
    id: 'gradual_boost%chill_vibes%social_butterfly',
    title: '편안한 소셜 러너',
    description:
      '함께 달리는 즐거움을 아는 당신. 오늘은 친구들과 함께하거나 SNS에 인증하며 동기부여를 얻어보세요. 편안한 페이스로 즐거운 시간을 보내요.',
    luckyItems: [
      '👥 러닝 모임 앱 - 함께 달릴 수 있는 커뮤니티',
      '📷 인스타그램 필터 - 멋진 인증샷을 위한 필터',
      '☕ 커피 테이크아웃 - 러닝 후 즐기는 여유로운 시간',
    ],
  },

  'high_calorie_reward%efficiency_freedom': {
    id: 'high_calorie_reward%efficiency_freedom',
    title: '달콤한 보상의 러너',
    description:
      '운동의 즐거움과 보상을 아는 당신. 오늘은 짧지만 강렬한 러닝으로 만족감을 얻고, 맛있는 보상으로 마무리해보세요.',
    luckyItems: [
      '🍰 건강 간식 - 운동 후 즐기는 영양 균형 간식',
      '🥤 프로틴 스무디 - 회복과 즐거움을 동시에 주는 음료',
      '⏰ 스마트 타이머 - 효율적인 시간 관리를 위한 도구',
    ],
  },

  default: {
    id: 'default',
    title: '오늘의 러닝 모험가',
    description:
      '독특한 조합의 당신! 오늘은 평소와 다르게 새로운 시도를 해보세요. 예상치 못한 재미를 발견할 수 있는 날이에요.',
    luckyItems: [
      '🎲 랜덤 러닝 코스 생성기 - 새로운 길을 탐험하는 앱',
      '🎁 미스터리 간식 - 오늘의 기분에 따라 골라보는 간식',
      '📝 오늘의 발견 일기 - 러닝 중 마주친 특별한 순간들을 기록',
    ],
  },
};

const getFortuneResult = (result: QuizResult): FortuneProfile => {
  const answers = Object.values(result);

  const scores = {
    rebellious: answers.filter((answer) => ['rebellious_free_spirit'].includes(answer)).length,
    focus: answers.filter((answer) =>
      ['silent_focus', 'mental_focus', 'steady_endurance', 'efficiency_freedom'].includes(answer),
    ).length,
    analyst: answers.filter((answer) => ['harsh_analyst', 'joint_protection', 'caution_bad_luck'].includes(answer))
      .length,
    recovery: answers.filter((answer) =>
      ['short_recovery_run', 'rest_and_stretching', 'low_energy_lethargic'].includes(answer),
    ).length,
    speed: answers.filter((answer) =>
      [
        'full_speed_mode',
        'sprint_and_finish',
        'speed_boost',
        'high_intensity_interval',
        'high_energy_ambitious',
      ].includes(answer),
    ).length,
    social: answers.filter((answer) => ['social_butterfly', 'chill_vibes', 'gradual_boost'].includes(answer)).length,
    reward: answers.filter((answer) => ['high_calorie_reward'].includes(answer)).length,
  };

  const winner = (Object.keys(scores) as Array<keyof typeof scores>).reduce((a, b) => (scores[a] >= scores[b] ? a : b));

  switch (winner) {
    case 'rebellious':
      return FORTUNE_PROFILES['rebellious_free_spirit%sprint_and_finish%full_speed_mode%high_calorie_reward'];
    case 'focus':
      return FORTUNE_PROFILES['silent_focus%mental_focus%steady_endurance%efficiency_freedom'];
    case 'analyst':
      return FORTUNE_PROFILES['caution_bad_luck%joint_protection%harsh_analyst'];
    case 'recovery':
      return FORTUNE_PROFILES['low_energy_lethargic%short_recovery_run%rest_and_stretching'];
    case 'speed':
      return FORTUNE_PROFILES['high_energy_ambitious%speed_boost%high_intensity_interval'];
    case 'social':
      return FORTUNE_PROFILES['gradual_boost%chill_vibes%social_butterfly'];
    case 'reward':
      return FORTUNE_PROFILES['high_calorie_reward%efficiency_freedom'];
    default:
      return FORTUNE_PROFILES.default;
  }
};
// TODO: 동점일 경우

const FortuneQuizResultPage = () => {
  const [result, setResult] = useState<QuizResult>({});

  useEffect(() => {
    const stored = sessionStorage.getItem('fortune-quiz');

    if (stored) {
      setResult(JSON.parse(stored));
    }
  }, []);

  const getSharedFortune = (): FortuneProfile | null => {
    if (typeof window === 'undefined') return null;

    const urlParams = new URLSearchParams(window.location.search);
    const sharedType = urlParams.get('type');

    if (sharedType && FORTUNE_PROFILES[sharedType]) {
      return FORTUNE_PROFILES[sharedType];
    }

    return null;
  };

  const sharedFortune = getSharedFortune();
  const fortune = sharedFortune || getFortuneResult(result);

  return (
    <div className='flex flex-col items-center pb-[23px]'>
      <div className='sticky w-[330px] top-[55px] pt-[7px] bg-[#1a1a1a] z-3'>
        <header className='flex flex-col items-center justify-center min-h-[10vh] text-center px-6'>
          <h1 className='text-3xl font-bold mb-4'>오늘의 러닝 운세 결과</h1>
          <p className='text-[#787878] mb-6'>과몰입은 금물! 재미로만 가볍게 즐겨주세요</p>
        </header>

        <div className='px-6 pb-8'>
          <div className='bg-gradient-to-br from-[#1F1F1F] to-[#111] rounded-2xl p-6 mb-6 border border-[#2C2C2C]'>
            <div className='text-center mb-4'>
              <h2 className='text-xl font-bold text-[#007AFF] mb-2'>🎯 {fortune.title}</h2>
              <div className='w-16 h-1 bg-[#007AFF] rounded-full mx-auto'></div>
            </div>
            <p className='text-gray-300 leading-relaxed text-center text-[15px]'>{fortune.description}</p>
          </div>

          <div className='bg-gradient-to-br from-[#1F1F1F] to-[#111] rounded-2xl p-6 border border-[#2C2C2C]'>
            <h3 className='text-lg font-semibold text-[#007AFF] mb-4 text-center'>💫 오늘의 러닝 행운템</h3>
            <div className='space-y-3'>
              {fortune.luckyItems.map((item, index) => (
                <div
                  key={index}
                  className='bg-[#2C2C2C] rounded-lg p-3 border border-[#3C3C3C]'
                >
                  <p className='text-gray-200 text-sm leading-relaxed'>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ResultButtons
          fortune={fortune}
          isShared={!!sharedFortune}
        />
      </div>
    </div>
  );
};

export default FortuneQuizResultPage;
