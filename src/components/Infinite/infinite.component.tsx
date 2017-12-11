import * as React from 'react';

import { InfiniteProps, InfiniteState, IInfinitePage, Items } from './infinite.interfaces';

import { InfinitePage } from './Page';

import * as styles from './infinite.styles.scss';

export class Infinite extends React.PureComponent<InfiniteProps, InfiniteState> {

  public state = {
    pages: null,
    page: 0,
    itemsPerPage: 20,
    prevScroll: 0,
    pageHeight: 0,
  };

  private wrpEl: Element | null = null;

  componentWillMount() {
    this.onUpdate(this.props, this.state);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillReceiveProps(props: InfiniteProps, state: InfiniteState) {
    this.onUpdate(props, state);
  }

  renderPage({ idx, items }: IInfinitePage) {
    return (
      <InfinitePage
        key={idx}
        items={items}
      />
    );
  }

  render() {
    const { pages } = this.state;

    return (
      <div
        ref={el => this.wrpEl = el}
        className={styles.infiniteContainer}
      >
        {pages && (pages as IInfinitePage[]).map((p: IInfinitePage) => this.renderPage(p))}
      </div>
    );
  }

  private isScrollingUp = () => {
    const { prevScroll } = this.state;
    const scrollingUp = window.scrollY > prevScroll;
    this.setState({
      prevScroll: window.scrollY
    });

    return scrollingUp;
  }

  private getCurrentPage = () => {
    const { pageHeight } = this.state;
    return this.isScrollingUp()
      ? Math.floor((window.scrollY + window.innerHeight) / pageHeight)
      : Math.floor(window.scrollY / pageHeight);
  }

  private onScroll = (): void => {
    const { pages } = this.state;
    const { loadMore } = this.props;
    const currentPage = this.getCurrentPage();

    if (pages && !pages[currentPage]) {
      loadMore(currentPage);
    }

    this.setState({ page: currentPage });
  }

  private getPages(items: Items): IInfinitePage[] {
    const { itemsPerPage } = this.state;

    const pages: IInfinitePage[] = [];

    items.reduce((acc, item, idx) => {
      const itemPage = Math.floor(idx / (itemsPerPage + 1));

      if (!acc[itemPage]) {
        acc[itemPage] = {
          items: [],
          idx: itemPage,
          shown: true,
        };
      }

      acc[itemPage].items.push(item);

      return pages;
    }, pages);

    return pages;
  }

  private onUpdate({ items }: InfiniteProps, state: InfiniteState) {
    if (this.props.items !== items || !this.state.pages) {
      this.setState({
        pages: this.getPages(this.props.items),
      });
    }
  }
}