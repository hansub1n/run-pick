import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import QueryProvider from '@/components/providers/QueryProvider';
import Header from '@/components/Header';
import UserInit from '@/components/UserInit';
import { ToastContainer } from 'react-toastify';

const pretendard = localFont({
  src: './fonts/PretendardVariable.ttf',
  variable: '--font-pretendard',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '런픽(run-pick)',
  description: 'Pick하고 Run해! 매주 새로운 러닝 루틴',
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN as string),
  openGraph: {
    images: [
      {
        url: '/opengraph-image',
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
          <main className='flex flex-col items-center pt-[55px]'>
            {children}
            <ToastContainer
              position='bottom-right'
              theme='dark'
              limit={3}
            />
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}
