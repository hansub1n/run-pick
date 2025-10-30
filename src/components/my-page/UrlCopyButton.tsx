import { RiKakaoTalkFill } from 'react-icons/ri';

type UrlCopyButtonProps = {
  userId: string;
};
const UrlCopyButton = ({ userId }: UrlCopyButtonProps) => {
  const onClickhandler = () => {
    const inviteUrl = `${window.location.origin}/add-friend/${userId}`;

    navigator.clipboard
      .writeText(inviteUrl)
      .then(() => {
        alert('친구에게 보낼 링크가 복사되었습니다.'); // TODO: alert or 토스트 or 모달 확인 필요
      })
      .catch((error) => console.error('링크 복사 실패: ', error));
  };

  return (
    <div
      onClick={onClickhandler}
      className='cursor-pointer absolute flex items-center gap-[8px] right-[23px] top-[-43px] 
             px-[12px] py-[7px] rounded-[10px] 
             bg-[#FEE500]/90 text-[#1A1A1A] font-medium
             shadow-sm hover:bg-[#FDDC00] transition-colors'
    >
      <p className='text-[13px]'>카카오톡으로 친구 초대</p>
      <RiKakaoTalkFill className='w-[22px] h-[22px]' />
    </div>
  );
};

export default UrlCopyButton;
