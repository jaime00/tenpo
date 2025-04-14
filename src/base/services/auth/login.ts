import enviroment from '@/base/constants/enviroment';
import { Md5 } from 'ts-md5';
import type { LoginProps, LoginServiceResponse } from '@/base/types/login';

const { FAKE_USERNAME, FAKE_PASSWORD, FAKE_EMAIL } = enviroment;

export default function loginService({
  username,
  password,
}: LoginProps): Promise<LoginServiceResponse> {
  const token = Md5.hashStr(password);

  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === FAKE_USERNAME && password === FAKE_PASSWORD) {
        resolve({
          errorMessage: '',
          token,
          userName: username,
          userEmail: FAKE_EMAIL,
        });
      } else {
        resolve({
          errorMessage: 'Nombre de usuario o contraseña inválidos',
        });
      }
    }, 1000);
  });
}
