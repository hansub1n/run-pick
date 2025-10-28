import { createClient } from '@/utils/supabase/client';
import { QueryClient } from '@tanstack/react-query';
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
    console.error('Kakao login failed: ', error);
  }
};

export const handleSignOut = async (router: AppRouterInstance, queryClient: QueryClient) => {
  const userQueryKeys = [
    'userChallenges',
    'userProofPosts',
    'userFavoriteVideos',
    'monthlyStats',
    'friends',
    'activeChallenge',
  ];

  userQueryKeys.forEach((key) => {
    queryClient.removeQueries({ queryKey: [key] });
  });

  const { error } = await client.auth.signOut();
  if (error) return console.error('Signout failed: ', error);

  router.replace('/');
};
