import type { Metadata } from 'next';
import './globals.css';
import QueryProvider from '@/components/providers/QueryProvider';
import Header from '@/components/Header';
import UserInit from '@/components/UserInit';
import { ToastContainer } from 'react-toastify';
import { getIsSignIn } from '@/utils/supabase/server';

// const pretendard = localFont({
//   src: './fonts/pretendard/PretendardVariable.woff2',
//   display: 'swap',
//   variable: '--font-pretendard',
//   weight: '100 900',
// });

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isSignedIn = await getIsSignIn();

  return (
    <html lang='ko'>
      <body>
        <QueryProvider>
          <UserInit isSignedIn={isSignedIn} />
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
