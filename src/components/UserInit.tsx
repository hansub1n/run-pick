'use client';
import { useUserStore } from '@/stores/useUserStore';
import { getPublicUserInfo } from '@/utils/supabase/user';
import { useEffect } from 'react';

const UserInit = () => {
  const { setNickname, setProfileImgUrl } = useUserStore();

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await getPublicUserInfo();
      if (!userInfo) return;
      setNickname(userInfo.nickname);
      setProfileImgUrl(userInfo.profile_img_url);
    };

    fetchUser();
  }, []);
  return null;
};

export default UserInit;
