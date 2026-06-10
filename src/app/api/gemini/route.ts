import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const client = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [{ text: question }],
        },
      ],
    });

    const rawAnswer = response.candidates?.[0]?.content?.parts?.[0]?.text ?? '답변을 생성하지 못했어요.';

    const answer = rawAnswer
      .replace(/^```json\s*/i, '')
      .replace(/\s*```$/, '')
      .trim();

    return NextResponse.json({ answer });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Gemini 호출 실패' }, { status: 500 });
  }
}
