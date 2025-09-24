import { NextApiRequest, NextApiResponse } from 'next';
import { refreshVideos } from '@/utils/refreshVideos';

export const config = {
  scheduler: '0 3 * * *',
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string; totalVideos?: number }>,
) {
  try {
    const totalCount = await refreshVideos();
    res.status(200).json({ message: 'YouTube data refreshed', totalVideos: totalCount });
  } catch (error) {
    console.error('Video refresh failed:', error);
    res.status(500).json({ message: 'Failed to refresh videos' });
  }
}
