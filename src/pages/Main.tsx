import { Route, Switch, useLocation } from 'wouter';
import { useEffect, useState } from 'react';

import Panel from '../pages/Panel';

// import Navbar from 'components/layout/Header';
import Menu from '../components/layout/SidebarMenu';

import useUser from '../hooks/Auth/useUser';
import NotFound from './NotFound';
// import Profile from 'pages/Profile';

export default function Main() {
  const { isLogged } = useUser();
  const [, navigate] = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    if (!isLogged) navigate('login');
  }, [isLogged, navigate]);

  const expandedState = { isExpanded, setIsExpanded };
  return (
    <div className="flex">
      <Menu {...expandedState} />
      <main className="h-screen w-11/12 overflow-x-hidden px-4 pt-2 2xl:w-full">
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" component={Panel}></Route>
          <Route path="/users">
            <h1 className="text-2xl font-semibold">Users</h1>
          </Route>
          <NotFound />
        </Switch>
      </main>
    </div>
  );
}
