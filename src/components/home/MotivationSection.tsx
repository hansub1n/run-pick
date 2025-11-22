import MotivationHeader from './motivation/MotivationHeader';
import ChallengeProgressSection from './motivation/ChallengeProgressSection';
import NoChallengeCTA from './motivation/NoChallengeCTA';
import { getIsSignIn, getPublicUserInfo } from '@/utils/supabase/server';
import { checkAndUpdateChallengeStatus } from '@/services/challenges/checkAndUpdateChallengeStatus';

const MotivationSection = async () => {
  const isSignedIn = await getIsSignIn();
  const userInfo = isSignedIn ? await getPublicUserInfo() : null;
  const activeChallenge = isSignedIn ? await checkAndUpdateChallengeStatus(userInfo.id) : null;

  const hasChallenge = Boolean(activeChallenge);

  return (
    <div className='h-[135px] px-[17px] py-[15px] rounded-[12px] flex flex-col justify-between shadow-md transition-colors bg-[#2C2C2E]'>
      <MotivationHeader
        isSignedIn={isSignedIn}
        userInfo={userInfo}
      />

      {isSignedIn && hasChallenge ? <ChallengeProgressSection userId={userInfo.id} /> : <NoChallengeCTA />}
    </div>
  );
};

export default MotivationSection;
