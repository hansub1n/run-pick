import { fetchVideosFromDB } from '@/services/videos/fetchVideosFromDB';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const distance = searchParams.get('distance') ?? '3km';
  const page = Number(searchParams.get('page')) ?? 1;
  const limit = Number(searchParams.get('limit'));

  const data = await fetchVideosFromDB(distance, page, limit);

  return NextResponse.json(data);
}
