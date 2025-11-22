import MotivationHeader from './motivation/MotivationHeader';
import ChallengeProgressSection from './motivation/ChallengeProgressSection';
import NoChallengeCTA from './motivation/NoChallengeCTA';
import { getPublicUserInfo } from '@/utils/supabase/server';
import { checkAndUpdateChallengeStatus } from '@/services/challenges/checkAndUpdateChallengeStatus';

const MotivationSection = async () => {
  const userInfo = await getPublicUserInfo();
  const isSignIn = !!userInfo;
  const activeChallenge = isSignIn ? await checkAndUpdateChallengeStatus(userInfo.id) : null;

  const hasChallenge = Boolean(activeChallenge);

  return (
    <div className='h-[135px] px-[17px] py-[15px] rounded-[12px] flex flex-col justify-between shadow-md transition-colors bg-[#2C2C2E]'>
      <MotivationHeader
        isSignIn={isSignIn}
        userInfo={userInfo}
      />

      {isSignIn && hasChallenge ? <ChallengeProgressSection userId={userInfo.id} /> : <NoChallengeCTA />}
    </div>
  );
};

export default MotivationSection;
