import { CardModel, ICard } from '../../models/Card.Model';

export interface IDemoProps {
  onPageChange: (page: number) => void;
  cards: ICard[];
  setCards: (cards: CardModel[]) => void;
}