import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
}

export const getIsSignIn = async () => {
  const client = await createClient();

  const {
    data: { session },
  } = await client.auth.getSession();
  return !!session;
};

export const getAuthUserInfo = async () => {
  const client = await createClient();

  const { data, error } = await client.auth.getUser();

  if (error) {
    console.error('Failed to fetch user: ', error);
  }

  return data?.user ?? null;
};

export const getPublicUserInfo = async () => {
  const client = await createClient();

  const authUser = await getAuthUserInfo();

  const { data, error } = await client.from('users').select('*').eq('id', authUser?.id).single();
  if (error) {
    console.error('Failed to fetch user: ', error);
  }

  return data ?? null;
};
