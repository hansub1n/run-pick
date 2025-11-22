'use client';
import { useUserStore } from '@/stores/useUserStore';
import { getPublicUserInfo } from '@/utils/supabase/client';
import { useEffect } from 'react';

const UserInit = ({ isSignedIn }: { isSignedIn: boolean }) => {
  const { setId, setNickname, setProfileImgUrl } = useUserStore();

  useEffect(() => {
    const fetchUser = async () => {
      if (isSignedIn) {
        const userInfo = await getPublicUserInfo();
        setId(userInfo.id);
        setNickname(userInfo.nickname);
        setProfileImgUrl(userInfo.profile_img_url);
      }
    };

    fetchUser();
  }, []);

  return null;
};

export default UserInit;
