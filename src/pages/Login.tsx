import { useEffect } from 'react';
import { useLocation } from 'wouter';

import LoginForm from '../components/login/LoginForm';
import useUser from '@/base/hooks/Auth/useUser';

import RickAndMortySpace from '@/assets/ilustrations/rick-and-morty-space3.png';

export default function Login() {
  const { isLogged } = useUser();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (isLogged) navigate('/');
  }, [isLogged, navigate]);

  return (
    <main className="mx-auto flex h-screen w-full flex-row p-0 align-middle">
      <LoginForm />
      <img
        loading="lazy"
        src={RickAndMortySpace}
        alt="Fondo espacial de Rick and Morty"
        className="pointer-events-none hidden w-full max-w-[50vw] select-none object-cover shadow-lg md:block"
      />
    </main>
  );
}
