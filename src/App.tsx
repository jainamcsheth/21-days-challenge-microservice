import React from 'react';
import styles from './app.module.scss';
import './css/common.scss';

const App: React.FC<{}> = () => {
  return (
    <div className={styles.demoCss}>
      Initial Setup
    </div>
  );
};

export default App;
