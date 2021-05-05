import React from 'react';
import { Card } from '../card/card';
import { User } from '../user/user';
import styles from './home.module.scss';

export const Home: React.FC = () => (
  <div className={styles.outerBg}>
    <div className={styles.innerBg}>
      <div className={styles.headerRow}>
        <nav>burger icon</nav>
        <span className={styles.progress}>32% Done</span>
      </div>
      <div className={styles.row}>
        <div className={styles.leftBar}>
          <User />
        </div>

        <div className={styles.mainContent}>

          <section className={styles.row}>
            <Card />
            <Card />
            <Card />
          </section>

          <section className={styles.row}>
            <Card />
            <Card />
            <Card />
          </section>

        </div>
      </div>
    </div>
  </div>
)
