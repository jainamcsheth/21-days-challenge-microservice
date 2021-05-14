import cx from 'classnames';
import React, { useState } from 'react';
import { Route, useRoutes } from 'react-router-dom';
import styles from './app.module.scss';
import { Home } from './components/home/home';
import { Status } from './components/libs/status';
import { CustomRouteProps, loginRoutes } from './routes';

interface AppViewProps {
  /**
   * Desired routes to be loaded.
   */
  routes: CustomRouteProps;
}

const AppView: React.FC<AppViewProps> = ({ routes }) => {
  const routedComponent = useRoutes(Object.values(routes));

  return (
    <div className={cx('appWrapper', styles.outerBox)}>{routedComponent}</div>
  );
};

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  const checkForSession = () => {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const onLoggedIn = () => setIsLoggedIn(true);

  const onLoggedOut = () => setIsLoggedIn(false);

  if (isLoggedIn === null) {
    checkForSession();
  }
  if (!isLoggedIn) {
    return <AppView routes={loginRoutes(onLoggedIn)} />;
  }

  return (
    <>
      <div className={cx('appWrapper', styles.outerBox)}>
        <Status onLoggedOut={onLoggedOut} />
        <Route path="/challenge" element={<Home />} />
      </div>
    </>
  );
};

export default App;
