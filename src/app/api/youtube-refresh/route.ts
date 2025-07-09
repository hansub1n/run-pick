import { fetchVideosFromYoutube } from '@/services/videos/fetchVideosFromYoutube';
import { upsertVideos } from '@/services/videos/upsertVideos';
import { Distance } from '@/types/videos.types';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const distance = searchParams.get('distance') ?? ('3km' as Distance);

  const videos = await fetchVideosFromYoutube(distance);

  await upsertVideos(videos, distance);

  return NextResponse.json({ message: 'Videos refreshed', count: videos.length });
}
