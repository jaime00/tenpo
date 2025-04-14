import { useState, createContext } from 'react';
import { getValueFromSessionStorage } from '../utils/storage/localStorage';

const Context = createContext({});

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [jwt, setJWT] = useState(() => getValueFromSessionStorage('jwt'));
  return (
    <Context.Provider value={{ jwt, setJWT }}>{children}</Context.Provider>
  );
}

export default Context;
