'use client'

import { useRouter } from 'next/navigation';

// 컴포넌트 내부
const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // 로그아웃 API 호출
      const response = await fetch('/api/logout', { method: 'POST' });
      if (response.ok) {
        // 로그아웃 성공 시 홈페이지로 리다이렉트
        router.push('/');
      } else {
        // 에러 처리
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <p onClick={handleLogout} className='mb-3 ml-5 cursor-pointer text-red-600 font-bold'>
      로그아웃
    </p>
  );
};

export default LogoutButton;
