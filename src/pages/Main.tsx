import useUser from '@/hooks/Auth/useUser';
import { useEffect } from 'react';
import { useLocation } from 'wouter';

export default function Main() {
  const { isLogged } = useUser();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (!isLogged) navigate('login');
  }, [isLogged, navigate]);

  return <div>Main</div>;
}
