import * as React from 'react';
import { Infinite } from '../../components/Infinite';
import * as styles from './demo.styles.scss';

import { Card } from '../../components/Card';
import { IDemoProps } from './demo.interfaces';
import { CardModel } from '../../models/Card.Model';

export const Demo: React.StatelessComponent<IDemoProps> = ({ onPageChange, cards }) => (
  <div className={styles.demoPage}>
    {cards && <Infinite
      items={cards}
      renderItem={(item: CardModel) => <Card data={item} />}
      loadMore={onPageChange}
    />}
  </div>
);