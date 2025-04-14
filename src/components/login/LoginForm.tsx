import { useEffect } from 'react';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useLocation } from 'wouter';
import Input from '../../components/common/Input';
import useUser from '../../hooks/Auth/useUser';
import useAlert from '../../hooks/Auth/useAlert';
import { Button } from 'flowbite-react';
import { getValueFromSessionStorage } from '@/utils/storage/localStorage';
import { RESPONSE_TYPE } from '@/constants/response';
import { LOGIN_PROPS } from '@/constants/login';

export default function LoginForm() {
  const { register, handleSubmit } = useForm();
  const [, navigate] = useLocation();
  const { isLoginLoading, hasLoginError, errorMessage, login, isLogged } =
    useUser();
  const { alert } = useAlert();

  useEffect(() => {
    if (isLogged) {
      const message = `Bienvenido ${getValueFromSessionStorage(
        LOGIN_PROPS.USERNAME,
      )} a Tenpo 💜`;
      navigate('/');
      alert({
        type: 'icon',
        message,
      });
    }
  }, [isLogged, navigate, alert]);

  useEffect(() => {
    if (hasLoginError === true)
      alert({ type: RESPONSE_TYPE.ERROR, message: errorMessage || '' });
  }, [hasLoginError, alert, errorMessage]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { username, password } = data;
    await login({ username, password });
  };

  return (
    <div className="ssm:basis-full ssm:w-full flex h-full basis-1/2 items-center justify-center bg-[#FAFAFA] p-0 sm:w-full sm:basis-full md:w-full md:basis-1/2 lg:basis-1/2 2xl:basis-1/2">
      <div>
        <div className="mb-6 flex">
          <h3 className="russo-one pointer-events-none select-none text-xl text-mainPurple">
            Tenpo
          </h3>
        </div>
        <div className="my-6 py-5">
          <p className="text-3xl font-bold">Inicio de sesión</p>
          <p className="mt-2 text-gray-500">
            Ingrese los siguientes datos para entrar
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Input
              errorMessage="Por favor verifique el usuario ingresado"
              hasError={hasLoginError}
              name="username"
              otherProps={{
                type: 'text',
                ...register('username'),
                required: true,
                disabled: isLoginLoading,
                autoComplete: 'current-username',
                autoFocus: true,
              }}
              title="Nombre de usuario"
            />
          </div>
          <div className="mb-4">
            <Input
              errorMessage="Por favor verifique la contraseña ingresada"
              hasError={hasLoginError}
              name="password"
              otherProps={{
                type: 'password',
                ...register('password'),
                required: true,
                disabled: isLoginLoading,
                autoComplete: 'current-password',
              }}
              title="Contraseña"
            />
          </div>
          <div className="mb-6 flex items-start">
            <div className="flex h-5 items-center">
              {/* <a>Olvidé mi contraseña</a> */}
            </div>
          </div>
          <Button
            type="submit"
            disabled={isLoginLoading}
            color="purple"
            className="w-full"
            size="md"
            gradientMonochrome="purple"
            pill
          >
            {isLoginLoading ? 'Iniciando...' : 'Iniciar sesión'}
          </Button>
        </form>
      </div>
    </div>
  );
}
