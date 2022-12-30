import { gql } from "graphql-request";
import SortNewsByImages from "./SortNewsByImages";

const fetchNews = async (category?: Category | string, country?: string | "US IN", keywords?: string, isDynamic?: boolean) => {
  const query = gql`query MyQuery( 
        $access_key: String! 
        $categories: String! 
        $keywords: String
        $country: String
        ){
      myQuery(access_key: $access_key categories: $categories countries: $country sort: "published_desc" keywords: $keywords) {
        data {
          author
          category
          country
          description
          image
          language
          source
          published_at
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }`;
  const res = await fetch('https://alquizar.stepzen.net/api/hissing-quokka/__graphql', {
    method: 'POST',
    cache: isDynamic ? "no-cache" : "default", next: isDynamic ? { revalidate: 0 } : { revalidate: 20 }, headers: {
      "Content-Type": "application/json",
      Authorization: `ApiKey ${process.env.STEPZEN_API_KEY}`
    },
    body: JSON.stringify(
      {
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
          countries: country
        }
      }
    )
  });
  // console.log("new data", category, keywords, country);

  const newsResponse = await res.json();

  const news = SortNewsByImages(newsResponse.data.myQuery);

  // console.log(news)

  return news;
}
export default fetchNews;

//stepzen import curl "http://api.mediastack.com/v1/news?access_key=99df706efaf1fc61d6d13d2027390bba"