import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import NotFound from './NotFound';
import Main from './Main';
import Menu from '@/components/layout/Menu';
import Users from './Users';
import useUser from '@/base/hooks/Auth/useUser';

export default function Home() {
  const { isLogged } = useUser();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (!isLogged) navigate('/login');
  }, [isLogged, navigate]);

  return (
    <div className="flex">
      <Menu />
      <main className="h-screen w-11/12 overflow-x-hidden px-4 pt-2 2xl:w-full">
        <Switch>
          <Route path="/" component={Main}></Route>
          <Route path="/users" component={Users}></Route>
          <NotFound />
        </Switch>
      </main>
    </div>
  );
}
