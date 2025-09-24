import { refreshVideos } from '@/utils/refreshVideos';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const totalCount = await refreshVideos();
    return NextResponse.json({ message: 'Videos refreshed', totalVideos: totalCount });
  } catch (error) {
    console.error('Video refresh failed:', error);
    return NextResponse.json({ message: 'Failed to refresh videos' }, { status: 500 });
  }
}
