import * as React from 'react';

import * as styles from './card.styles.scss';

import { ICardProps } from './card.interfaces';

export const Card: React.StatelessComponent<ICardProps> = ({ data: { title,  url } }) => (
  <div className={styles.card}>
    <img className={styles.avatar} src={url} />
    <div className={styles.title}>{title}</div>
  </div>
);