type methods = 'GET' | 'POST' | 'PUT' | 'DELETE';

const json = (response: Response) => response.json();

export abstract class TransportBaseService {
  protected resourceUrl: string;

  private readonly baseUrl: string = 'https://jsonplaceholder.typicode.com/';

  private readonly itemsPerPage: number = 10;

  protected fetch(method: methods, page: number) {
    const paginationUrl = typeof page === 'number'
      ? this.createPaginationQuery(page)
      : '';

    return fetch(`${this.baseUrl}${this.resourceUrl}${paginationUrl}`, { method })
      .then(json);
  }

  createPaginationQuery(page: number, itemsPerPage: number = this.itemsPerPage) {
    let ids = new Array(itemsPerPage)
        .fill(1)
        .map((v, idx) => `id=${parseInt(`${page}${idx + 1}`, 10)}`);

    return `?${ids.join('&')}`;
  }

}