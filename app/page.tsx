import { categories } from "../constants"
import fetchNews from "../lib/fetchNews"
import NewsList from "./NewsList"
import Header from './Header'
//import { news } from "./example"

async function Homepage() {
    const news: NewsResponse = await fetchNews(categories.join(","))
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    return (
        <div>
            {/* <Header /> */}
            <NewsList news={news} />
        </div>
    )
}

export default Homepage