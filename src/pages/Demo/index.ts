import { withHandlers, compose, withState, lifecycle } from 'recompose';

import { cardService } from '../../services/card.service';

import { Demo as Component } from './demo.component';
import { IDemoProps } from './demo.interfaces';

export const Demo =  compose<IDemoProps, {}>(
  withState('cards', 'setCards', 0),
  withHandlers({
    onPageChange: ({ setCards }) => (page: number) => {
      cardService.getCards(page).then(cards => setCards(cards));
    }
  }),
  lifecycle({
    componentDidMount() {
      const { setCards } = this.props as IDemoProps;
      cardService.getCards(0).then(cards => setCards(cards));
    }
  }),
)(Component);