import { useCallback, useContext, useState } from 'react';
import Context from '../../context/UserContextProvider';
import loginService from '@/services/auth/login';
import type { LoginProps, LoginServiceResponse } from '@/types/login';
import type { JWT } from '@/types/jwt';
import {
  dropValueFromSessionStorage,
  setValueInSessionStorage,
} from '@/utils/storage/localStorage';
import { LOGIN_PROPS } from '@/constants/login';

export default function useUser() {
  const { jwt, setJWT } = useContext(Context) as JWT;
  const [state, setState] = useState<LoginServiceResponse>({
    loading: false,
    error: false,
    errorMessage: '',
  });

  const login = useCallback(
    async ({ username, password }: LoginProps) => {
      setState({ loading: true, error: false, errorMessage: '' });
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
            setState({
              loading: false,
              error: true,
              errorMessage: errorMessage || '',
            });
            setJWT('');
          } else {
            setValueInSessionStorage(LOGIN_PROPS.JWT, token);
            setValueInSessionStorage(LOGIN_PROPS.USER_EMAIL, userEmail);
            setValueInSessionStorage(LOGIN_PROPS.USERNAME, userName);
            setState({ loading: false, error: false, errorMessage: '' });
            setJWT(token);
          }
        })
        .catch((err) => {
          dropValueFromSessionStorage(LOGIN_PROPS.JWT);
          setState({ loading: false, error: true, errorMessage: err.message });
          console.log(err);
        });
    },
    [setJWT],
  );

  const logout = useCallback(() => {
    dropValueFromSessionStorage(LOGIN_PROPS.JWT);
    dropValueFromSessionStorage(LOGIN_PROPS.USER_EMAIL);
    dropValueFromSessionStorage(LOGIN_PROPS.USERNAME);
    setJWT(null);
  }, [setJWT]);

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    errorMessage: state.errorMessage,
    login,
    logout,
  };
}
