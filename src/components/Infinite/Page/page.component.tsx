import * as React from 'react';
import { IPageProps } from './page.interface';

export const InfinitePage: React.StatelessComponent<IPageProps> =
  ({ shown, height, renderItem, items, saveRef }) => {
  return shown
    ? (
      <div
        ref={(el: HTMLDivElement) => saveRef(el)}
      >
        {items.map((item: ({})) => renderItem(item))} //
      </div>
    )
    : (<div style={{ height: `${height}px`}} />);
};