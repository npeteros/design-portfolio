export interface NewsArticle {
    author: string;
    content: string | null;
    description: string | null;
    publishedAt: string;
    source: {
        id: string,
        name: string
    },
    title: string;
    url: string;
    urlToImage: string | null;
}