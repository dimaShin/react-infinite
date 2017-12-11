import { InfinitePage as Component } from './page.component';
import { compose, lifecycle, withState } from 'recompose';
import { IPageProps } from './page.interface';
import { resizeServie } from '../../../services/resize.service';

export const InfinitePage = compose<IPageProps, {}>(
  withState('height', 'setHeight', 0),
  withState('ref', 'setRef', 0),
  lifecycle({
    componentDidMount() {
      const { setHeight, ref } = this.props as IPageProps;
      setHeight(ref.clientHeight);
      resizeServie.listenTo(ref, (({ height }) => setHeight(height)));
    },
    componentDidUpdate() {
      const { setHeight, ref } = this.props as IPageProps;
      setHeight(ref.clientHeight);
    },
    shouldComponentUpdate({ shown }: IPageProps) {
      return shown !== (this.props as IPageProps).shown;
    }
  }),
)(Component);