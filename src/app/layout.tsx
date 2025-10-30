import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import QueryProvider from '@/components/providers/QueryProvider';
import Header from '@/components/Header';
import UserInit from '@/components/UserInit';

const pretendard = localFont({
  src: './fonts/PretendardVariable.ttf',
  variable: '--font-pretendard',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '런픽(run-pick)',
  description: 'Pick하고 Run해! 매주 새로운 러닝 루틴',
  openGraph: {
    images: [
      {
        url: '/assets/images/branding/banner.webp',
        width: 313,
        height: 200,
        alt: '런픽 로고',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${pretendard.variable} antialiased`}>
        <QueryProvider>
          <UserInit />
          <Header />
          <main className='flex flex-col items-center pt-[55px]'>{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}
