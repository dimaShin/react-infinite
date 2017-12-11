export interface InfiniteProps {
  loadMore: (page: number) => void;
  items: Items;
  loader?: JSX.Element;
  page?: number;
  itemsPerPage?: number;
  renderItem: (item: ({})) => JSX.Element;
  keyField?: string;
}

export interface InfiniteState {
  page: number;
  pages: IInfinitePage[] | null;
  itemsPerPage: number;
  prevScroll: number;
  pageHeight: number;
}

export interface IInfinitePage {
  idx: number;
  items: Items;
  shown?: boolean;
  height?: number;
}

export type Items = {}[];