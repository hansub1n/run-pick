'use client';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys';
import { useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';

export const useAuthStatus = () => {
  const client = createClient();
  const queryClient = useQueryClient();

  const { data: isSignedIn } = useQuery({
    queryKey: QUERY_KEYS.authStatus(),
    queryFn: async () => {
      const res = await fetch('/api/auth');
      const { initAuthenticated } = await res.json();
      return initAuthenticated;
    },
    staleTime: 60 * 1000,
  });

  useEffect(() => {
    const { data: authListener } = client.auth.onAuthStateChange(() => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.authStatus() });
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return { isSignedIn };
};
