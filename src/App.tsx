import { Route, Switch } from 'wouter';
import { Toaster } from 'react-hot-toast';

import Main from './pages/Main.tsx';
import Login from './pages/Login.tsx';

import { UserContextProvider } from './context/UserContext.tsx';

export default function App() {
  return (
    <UserContextProvider>
      <div className="h-screen w-screen">
        <Switch>
          <Route path="/login" component={Login} />
          <Main />
        </Switch>
      </div>
      <Toaster position="bottom-left" />
    </UserContextProvider>
  );
}
