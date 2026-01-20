'use client';

import { useState } from 'react';

export default function FortunePage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const getFortune = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer('');

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer);
    } catch (e) {
      setAnswer('에러가 발생했어요 😢');
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <h2>🔮 오늘의 운세</h2>

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder='예: 오늘 연애운 어때?'
        style={{ width: '100%', padding: 10 }}
      />

      <button
        onClick={getFortune}
        disabled={loading}
        style={{ marginTop: 10 }}
      >
        {loading ? '생성중...' : '운세 보기'}
      </button>

      {answer && <div style={{ marginTop: 20, whiteSpace: 'pre-line' }}>{answer}</div>}
    </div>
  );
}
