'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LoginWithGoogle from '@/components/Buttons/LoginWithGoogle';
import { useSession } from 'next-auth/react';

const LoginPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [status]);

  return (
    <div className="h-full flex flex-col justify-center items-center pt-40">
      <LoginWithGoogle />
    </div>
  );
};

export default LoginPage;

