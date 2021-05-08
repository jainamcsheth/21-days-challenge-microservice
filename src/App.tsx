import React, { Suspense, useState } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import styles from './app.module.scss';
import { Login } from './components/login/login';
import { baseRoutes } from './routes';

const AppView: React.FC = () => {
  const routedComponent = useRoutes(Object.values(baseRoutes));

  return (
    <Suspense fallback={<div>Loading view...</div>}>
      <div className={styles.outerBg}>
        <div className={styles.innerBg}>

          {/* <NavBar /> */}
          {routedComponent}

        </div>
      </div>
    </Suspense>
  );
};

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  if (isLoggedIn) {
    return <Login onLoggedIn={() => setIsLoggedIn(true)} />;
  }

  return (
    <BrowserRouter>
      <AppView />
    </BrowserRouter>
  );
};

export default App;
