import { useEffect } from 'react';
import { useLocation } from 'wouter';

import LoginForm from '../components/login/LoginForm';
import useUser from '@/base/hooks/Auth/useUser';

export default function Login() {
  const { isLogged } = useUser();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (isLogged) navigate('/');
  }, [isLogged, navigate]);

  return (
    <main className="mx-auto flex h-screen w-full flex-row p-0 align-middle">
      <LoginForm />
      {/* <Carrousel /> */}
    </main>
  );
}
