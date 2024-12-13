export interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  url: string;
}

export interface ArticlesResponse {
  articles: Article[];
  totalPages: number;
}
