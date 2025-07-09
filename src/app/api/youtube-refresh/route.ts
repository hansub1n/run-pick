import { fetchVideosFromYoutube } from '@/services/videos/fetchVideosFromYoutube';
import { upsertVideos } from '@/services/videos/upsertVideos';
import { Distance } from '@/types/videos.types';
import { NextRequest, NextResponse } from 'next/server';

const distances: Distance[] = ['3km', '5km', '10km'];
export async function GET() {
  let totalCount = 0;

  for (const distance of distances) {
    const videos = await fetchVideosFromYoutube(distance);
    await upsertVideos(videos, distance);
    totalCount += videos.length;
  }

  return NextResponse.json({ message: 'Videos refreshed', totalVideos: totalCount });
}
