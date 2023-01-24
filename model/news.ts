export interface Author {
  about: number;
  created: number;
  id: string;
  karma: number;
  submitted: Array<number>;
}

export interface NewsItem {
  by: string;
  descendants: number;
  id: number;
  kids: Array<number>;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  author: Author;
}
