import { fetchVideosFromDB } from '@/services/videos/fetchVideosFromDB';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const distance = searchParams.get('distance') ?? '3km';

  const videos = await fetchVideosFromDB(distance);

  return NextResponse.json(videos);
}
