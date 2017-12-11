import { TransportBaseService } from './transport.base.service';
import { CardModel, ICard } from '../models/Card.Model';

class CardService extends TransportBaseService {
  resourceUrl = 'photos';

  createCard(cardData: ICard): CardModel {
    return new CardModel(cardData);
  }

  onFetchSuccess = (data: ICard[]) => data.map(d => this.createCard(d as ICard));

  getCards(page: number): Promise<ICard[]> {
    return this.fetch('GET', page).then(data => this.onFetchSuccess(data));
  }
}

export const cardService = new CardService();