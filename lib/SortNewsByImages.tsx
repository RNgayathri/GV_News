export default function SortNewsByImages(news: NewsResponse) {
    const newsWithImage = news.data.filter((item) => item.image != null);
    const newsWithOutImage = news.data.filter((item) => item.image == null);
    const sortedResponse = {
        pagination: news.pagination,
        data: [...newsWithImage, ...newsWithOutImage]
    }
    return sortedResponse;
}