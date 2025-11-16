import { refreshVideos } from '@/utils/refreshVideos';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const totalCount = await refreshVideos();
    return NextResponse.json({ message: 'YouTube data refreshed', totalVideos: totalCount });
  } catch (error) {
    console.error('Failed to refresh videos: ', error);
    return NextResponse.json({ message: 'Failed to refresh videos' }, { status: 500 });
  }
}
