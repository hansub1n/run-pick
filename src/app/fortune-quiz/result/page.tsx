'use client';
import ResultButtons from '@/components/fortune-quiz/ResultButtons';
import { fetchSharedFortune } from '@/services/fortune-quiz/fetchSharedFortune';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type LuckyItem = {
  model: string;
  reason: string;
};

export type FortuneProfile = {
  id?: string;
  title: string;
  description: string;
  luckyItems: LuckyItem[];
};

const PROMPT = `
당신은 전문적인 러닝 코치이자 데이터 분석가입니다. 
제공된 5가지 키워드 조합을 분석하여 사용자의 오늘 '러닝 운세'를 예측해 주세요.

응답 규칙:
JSON 객체 형식으로만 응답하세요. id, title, description, luckyItems:{model, reason}[] 키를 포함해야 합니다.

luckyItems는 반드시 현재 시장에서 실제로 판매 중인 구체적인 브랜드와 모델명을 포함해야 하며,
왜 이 제품이 오늘 운세와 어울리는지 짧은 이유를 덧붙여주세요.

주의:
제공된 키워드는 내부 분석용 참고 자료일 뿐이며,
응답의 title, description, luckyItems.reason 어디에도
키워드 문자열(high_energy_ambitious, speed_boost 등)을 그대로 노출하거나 인용하지 마세요.
키워드의 의미만 자연스러운 한국어 표현으로 해석하여 반영하세요.

다음 키워드 조합을 바탕으로 러닝 운세를 생성해줘:
`;

const FortuneQuizResultPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [answer, setAnswer] = useState<FortuneProfile | null>(null);
  const params = useSearchParams();
  const shareId = params.get('shareId');

  useEffect(() => {
    const runningKeywords = JSON.parse(sessionStorage.getItem('fortune-quiz') || 'null');
    const cachedResult = JSON.parse(sessionStorage.getItem('fortune-result') || 'null');

    const loadFortune = async () => {
      if (shareId) {
        setIsLoading(true);
        const sharedFortune = await fetchSharedFortune(shareId);
        if (sharedFortune) {
          setIsLoading(false);
          setAnswer(sharedFortune);
        }
        return;
      }

      if (cachedResult) {
        setAnswer(cachedResult);
        return;
      }

      if (!runningKeywords) return;

      const question = PROMPT + JSON.stringify(runningKeywords);

      setIsLoading(true);
      setAnswer(null);

      try {
        const response = await fetch('/api/gemini', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question }),
        });

        const data = await response.json();

        setAnswer(JSON.parse(data.answer));
        sessionStorage.setItem('fortune-result', JSON.stringify(JSON.parse(data.answer)));
      } catch (error) {
        console.error('Gemini failed: ', error);
      }

      setIsLoading(false);
    };

    loadFortune();
  }, [shareId]);

  return (
    <div className='flex flex-col items-center pb-[23px]'>
      <div className='sticky w-[330px] top-[55px] pt-[7px] bg-[#1a1a1a] z-3'>
        <header className='flex flex-col items-center justify-center min-h-[8vh] text-center px-4'>
          <h1 className='text-xl font-bold mb-2'>오늘의 러닝 운세 결과</h1>
          <p className='text-[#787878] text-xs mb-4'>과몰입은 금물! 재미로만 가볍게 즐겨주세요</p>
        </header>

        <div className='px-4 pb-6'>
          {isLoading ? (
            <div className='text-center text-gray-300'>온다.. 와..</div>
          ) : answer ? (
            <>
              <div className='bg-gradient-to-br from-[#1F1F1F] to-[#111] rounded-2xl p-4 mb-5 border border-[#2C2C2C]'>
                <div className='text-center mb-3'>
                  <h2 className='text-base font-bold text-[#007AFF] mb-1'>{answer.title}</h2>
                  <div className='w-12 h-[3px] bg-[#007AFF] rounded-full mx-auto'></div>
                </div>
                <p className='text-gray-300 leading-relaxed text-justify text-[14px]'>{answer.description}</p>
              </div>

              <div className='bg-gradient-to-br from-[#1F1F1F] to-[#111] rounded-2xl p-4 border border-[#2C2C2C]'>
                <h3 className='text-sm font-semibold text-[#007AFF] mb-3 text-center'>오늘의 러닝 행운템</h3>
                <div className='space-y-2'>
                  {answer.luckyItems.map((item, index) => (
                    <div
                      key={index}
                      className='bg-[#2C2C2C] rounded-lg p-2.5 border border-[#3C3C3C]'
                    >
                      <h3 className='text-sm font-medium mb-1 text-left'>{item.model}</h3>
                      <p className='text-gray-300 text-xs text-justify leading-relaxed'>{item.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : null}
        </div>
        {answer && !isLoading && (
          <ResultButtons
            fortune={answer}
            isShared={!!shareId}
          />
        )}
      </div>
    </div>
  );
};

export default FortuneQuizResultPage;
