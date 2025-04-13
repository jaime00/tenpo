import LoginForm from '../components/login/LoginForm';
// import { Carrousel } from 'components/common/Carrousel';
import useUser from '../hooks/Auth/useUser';
import { useEffect } from 'react';
import { useLocation } from 'wouter';
// import { Transition } from '@headlessui/react';
// import { transition } from 'utils/helper/classnames';

export default function Login() {
  const { isLogged } = useUser();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (isLogged) navigate('/');
  }, [isLogged, navigate]);

  // const transitionProps = transition();

  return (
    // <Transition appear={true} as={Fragment} {...transitionProps} show={true}>
    <main className="mx-auto flex h-screen w-full flex-row p-0 align-middle">
      <LoginForm />
      <h1 className="text-4xl font-bold text-purple">Hola</h1>
      {/* <Carrousel /> */}
    </main>
    // </Transition>
  );
}
