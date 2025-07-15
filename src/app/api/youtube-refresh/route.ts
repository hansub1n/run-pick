import { fetchVideosFromYoutube } from '@/services/videos/fetchVideosFromYoutube';
import { upsertVideos } from '@/services/videos/upsertVideos';
import { Distance } from '@/types/videos.types';
import { NextResponse } from 'next/server';

const distances: Distance[] = ['3km', '5km', '10km'];

export async function GET() {
  try {
    const results = await Promise.all(
      distances.map(async (distance) => {
        const videos = await fetchVideosFromYoutube(distance);
        await upsertVideos(videos, distance);
        return videos.length;
      }),
    );

    const totalCount = results.reduce((sum, count) => sum + count, 0);
    return NextResponse.json({ message: 'Videos refreshed', totalVideos: totalCount });
  } catch (error) {
    console.error('Video refresh failed:', error);
    return NextResponse.json({ message: 'Failed to refresh videos' }, { status: 500 });
  }
}
