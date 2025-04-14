import useUser from '@/hooks/Auth/useUser';
import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import NotFound from './NotFound';
import Main from './Main';

export default function Home() {
  const { isLogged } = useUser();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (!isLogged) navigate('login');
  }, [isLogged, navigate]);

  return (
    <Switch>
      <Route path="/" component={Main}></Route>
      <NotFound />
    </Switch>
  );
}
