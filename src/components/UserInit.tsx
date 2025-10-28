'use client';
import { useUserStore } from '@/stores/useUserStore';
import { getPublicUserInfo } from '@/utils/supabase/client';
import { useEffect } from 'react';

const UserInit = () => {
  const { setId, setNickname, setProfileImgUrl } = useUserStore();

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await getPublicUserInfo();
      if (!userInfo) return;
      setId(userInfo.id);
      setNickname(userInfo.nickname);
      setProfileImgUrl(userInfo.profile_img_url);
    };

    fetchUser();
  }, []);
  return null;
};

export default UserInit;
