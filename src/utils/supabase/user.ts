import { createClient } from './client';

const client = createClient();

export const getAuthUserInfo = async () => {
  const { data, error } = await client.auth.getUser();

  if (error) {
    console.error('Failed to fetch user: ', error);
  }

  return data?.user ?? null;
};

export const getPublicUserInfo = async () => {
  const authUser = await getAuthUserInfo();

  const { data, error } = await client.from('users').select('*').eq('id', authUser?.id).single();
  if (error) {
    console.error('Failed to fetch user: ', error);
  }

  return data ?? null;
};
