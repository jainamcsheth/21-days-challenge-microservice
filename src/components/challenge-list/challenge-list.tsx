import React from "react";
import { Card } from "../card/card";
import styles from './challenge-list.module.scss';

// const challengeData = [{
//   name: 'SOmething',
//   id: 2121,
//   icon: 'some url',
//   status: 'Not Started'
// },
// {
//   name: 'SOmething2',
//   id: 1111,
//   icon: 'some url icon',
//   status: 'Not Started'
// }]

// const challengeList = challengeData.map((item) => <Card key={item.id} />
// )

export const ChallengeList: React.FC<{ challengeListData: { name: string, id: number, icon: string, status: string }[] }> = ({ challengeListData }) => (
  // const challengeList = challengeListData.map((item) => <Card key={item.id} />
  <section className={styles.row}>
    {challengeListData.map((item) => <Card key={item.id} name={item.name} status={item.status} url={item.icon} />)}
  </section>

)
