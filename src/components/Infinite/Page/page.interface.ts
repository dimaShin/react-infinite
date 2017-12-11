import { Items } from '../infinite.interfaces';

export interface IPageProps {
  shown: boolean;
  height?: number;
  setHeight: (height: number) => void;
  renderItem: (item: {}) => void;
  items: Items;
  saveRef: (el: Element) => void;
  ref: Element;
}