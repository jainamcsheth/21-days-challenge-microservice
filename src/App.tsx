/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import styles from './app.module.scss';
import { Status } from './components/user-cognito/status';
import { baseRoutes, loginRoutes } from './routes';

interface AppViewProps {
  routes: any;
}

const AppView: React.FC<AppViewProps> = ({ routes }: AppViewProps) => {
  const routedComponent = useRoutes(Object.values(routes));
  // eslint-disable-next-line no-console
  console.log('Dum', routes);

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

  const onLoggedIn = () => setIsLoggedIn(true);

  const onLoggedOut = () => setIsLoggedIn(false);

  if (!isLoggedIn) {
    return <AppView routes={loginRoutes(onLoggedIn)} />;
  }

  return (
    <>
      <Status onLoggedOut={onLoggedOut} />
      <AppView routes={baseRoutes()} />
    </>
  );
};

export default App;
