import LoginForm from '../components/login/LoginForm';
// import { Carrousel } from 'components/common/Carrousel';
import useUser from '../hooks/Auth/useUser';
import { useEffect } from 'react';
import { useLocation } from 'wouter';

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
