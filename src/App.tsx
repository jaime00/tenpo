import { Route, Switch } from 'wouter';
import { Toaster } from 'react-hot-toast';

import Home from '@/pages/Home.tsx';
import Login from '@/pages/Login.tsx';

import { UserContextProvider } from '@/base/context/UserContextProvider.tsx';

export default function App() {
  return (
    <UserContextProvider>
      <div className="h-screen w-screen animate-fade">
        <Switch>
          <Route path="/login" component={Login} />
          <Home />
        </Switch>
      </div>
      <Toaster position="bottom-left" />
    </UserContextProvider>
  );
}
