import { useCallback, useContext, useState } from 'react';
import Context from '../../context/UserContextProvider';
import loginService from '@/base/services/auth/login';
import type { LoginProps, LoginServiceResponse } from '@/base/types/login';
import type { JWT } from '@/base/types/jwt';
import {
  dropValueFromSessionStorage,
  setValueInSessionStorage,
} from '@/base/utils/storage/sessionStorage';
import { LOGIN_PROPS } from '@/base/constants/login';
import { LOGIN_RESPONSE_BY_DEFAULT } from '@/base/constants/response';

export default function useUser() {
  const { jwt, setJWT } = useContext(Context) as JWT;
  const [loginStatus, setLoginStatus] = useState<LoginServiceResponse>(
    LOGIN_RESPONSE_BY_DEFAULT,
  );

  const login = useCallback(
    async ({ username, password }: LoginProps) => {
      setLoginStatus({ isLoading: true, error: false, errorMessage: '' });
      await loginService({ username, password })
        .then((response) => {
          const {
            userEmail = '',
            userName = '',
            errorMessage = '',
            token = '',
          } = response || {};
          if (errorMessage || !token) {
            dropValueFromSessionStorage(LOGIN_PROPS.JWT);
            setLoginStatus({
              isLoading: false,
              error: true,
              errorMessage: errorMessage || '',
            });
            setJWT('');
          } else {
            setValueInSessionStorage(LOGIN_PROPS.JWT, token);
            setValueInSessionStorage(LOGIN_PROPS.USER_EMAIL, userEmail);
            setValueInSessionStorage(LOGIN_PROPS.USERNAME, userName);
            setLoginStatus({
              isLoading: false,
              error: false,
              errorMessage: '',
            });
            setJWT(token);
          }
        })
        .catch((err) => {
          dropValueFromSessionStorage(LOGIN_PROPS.JWT);
          setLoginStatus({
            isLoading: false,
            error: true,
            errorMessage: err.message,
          });
          console.log(err);
        });
    },
    [setJWT],
  );

  const logout = useCallback(() => {
    Object.values(LOGIN_PROPS).forEach((key) =>
      dropValueFromSessionStorage(key),
    );
    setJWT(null);
  }, [setJWT]);

  return {
    isLogged: Boolean(jwt),
    isLoading: loginStatus.isLoading,
    hasLoginError: loginStatus.error,
    errorMessage: loginStatus.errorMessage,
    actions: {
      login,
      logout,
    },
  };
}
