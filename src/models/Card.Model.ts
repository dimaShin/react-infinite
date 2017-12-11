export interface ICard {
  title: string;
  url: string;
}

export class CardModel implements ICard {
  title = '';
  url = '';

  constructor({ title, url }: ICard) {
    this.url = url;
    this.title = title;
  }
}