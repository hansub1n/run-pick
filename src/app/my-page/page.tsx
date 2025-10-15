import MyPageClient from '@/components/my-page/MyPageClient';
import { getAuthUserInfo } from '@/utils/supabase/server';

const MyPage = async () => {
  const userInfo = await getAuthUserInfo();

  return <MyPageClient userId={userInfo!.id} />;
};

export default MyPage;
