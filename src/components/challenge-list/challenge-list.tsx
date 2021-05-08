import React from "react";
import { Card } from "../card/card";
import styles from './challenge-list.module.scss';

export const ChallengeList: React.FC<{ challengeListData: { name: string, id: number, icon: string, status: string }[] }> = ({ challengeListData }) => (
  <section className={styles.row}>
    {challengeListData.map((item) => <Card key={item.id} name={item.name} status={item.status} url={item.icon} />)}
  </section>

)
