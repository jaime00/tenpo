import { useState, createContext } from 'react';
import { getPropFromLocalStorage } from '../utils/storage/localStorage';

const Context = createContext({});

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [jwt, setJWT] = useState(() => getPropFromLocalStorage('jwt'));
  return (
    <Context.Provider value={{ jwt, setJWT }}>{children}</Context.Provider>
  );
}

export default Context;
