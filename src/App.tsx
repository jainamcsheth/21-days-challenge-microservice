import React, { Suspense, useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import styles from './app.module.scss';
import { Status } from './components/user-cognito/status';
import { baseRoutes, CustomRouteProps, loginRoutes } from './routes';
import { Loader } from './widgets/loader/loader';

interface AppViewProps {
  /**
   * Desired routes to be loaded.
   */
  routes: CustomRouteProps;
}

const AppView: React.FC<AppViewProps> = ({ routes }) => {
  const routedComponent = useRoutes(Object.values(routes));
  // TODO Aditi: Remove console.log once done
  // eslint-disable-next-line no-console
  console.log('Dum', routes);

  return (
    <Suspense fallback={<div>Loading view...</div>}>
      <div className={styles.outerBg}>

          {/* <NavBar /> */}
          {routedComponent}
        </div>

    </Suspense>
  );
};

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  const onLoggedIn = () => setIsLoggedIn(true);
  const onLoggedOut = () => setIsLoggedIn(false);

  useEffect(() => {
    // check if already logged in and then set isLoggedIn to either true or false.
    setIsLoggedIn(true);
  }, []);

  if (isLoggedIn === null) {
    return <Loader />;
  }

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
