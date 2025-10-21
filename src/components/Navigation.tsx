'use client';
import { useAuthStatus } from '@/hooks/queries/useAuthStatus';
import { handleSignOut } from '@/utils/supabase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const baseLinks = [
  { href: '/', label: '홈' },
  { href: '/challenges', label: '챌린지' },
  { href: '/videos', label: '런픽' },
];

const Navigation = () => {
  const router = useRouter();
  const { isSignedIn } = useAuthStatus();

  const authLinks = isSignedIn ? [{ href: '/my-page', label: '마이페이지' }] : [{ href: '/login', label: '로그인' }];

  const links = [...baseLinks, ...authLinks];

  return (
    <>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className='cursor-pointer text-[18px] pl-[23px] flex items-center h-[52px]'
        >
          {label}
        </Link>
      ))}
      {isSignedIn && (
        <button
          onClick={() => handleSignOut(router)}
          className='cursor-pointer text-[18px] pl-[23px] flex items-center h-[52px]'
        >
          로그아웃
        </button>
      )}
    </>
  );
};

export default Navigation;
