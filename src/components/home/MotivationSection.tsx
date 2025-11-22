import MotivationHeader from './motivation/MotivationHeader';
import ChallengeProgressSection from './motivation/ChallengeProgressSection';
import NoChallengeCTA from './motivation/NoChallengeCTA';
import { checkAndUpdateChallengeStatus } from '@/services/challenges/checkAndUpdateChallengeStatus';
import { User } from '@/types/users.types';

const MotivationSection = async ({ userInfo }: { userInfo: User }) => {
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
