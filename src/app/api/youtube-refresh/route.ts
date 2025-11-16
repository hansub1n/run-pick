import { refreshVideos } from '@/utils/refreshVideos';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const totalCount = await refreshVideos();
    return NextResponse.json({ message: 'YouTube data refreshed', totalVideos: totalCount });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to refresh videos' }, { status: 500 });
  }
}
