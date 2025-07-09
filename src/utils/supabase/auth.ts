import { createClient } from '@/utils/supabase/client';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const client = createClient();

export const handleGoogleSignIn = async () => {
  try {
    await client.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.origin + '/auth/callback',
      },
    });
  } catch (error) {
    console.error('Google login failed: ', error);
  }
};

export const handleKakaoSignIn = async () => {
  try {
    await client.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: window.origin + '/auth/callback',
      },
    });
  } catch (error) {
    console.error('Google login failed: ', error);
  }
};

export const handleSignOut = async (router: AppRouterInstance) => {
  // TODO: 유저 관련 쿼리데이터 삭제
  const { error } = await client.auth.signOut();
  if (error) return console.error('Signout failed: ', error);

  router.refresh();
  router.push('/');
};
