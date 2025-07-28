import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'yxidgnwdpxfizivnsqwy.supabase.co',
        pathname: '/storage/v1/object/sign/challenge/**',
      },
    ],
  },
};

export default nextConfig;
