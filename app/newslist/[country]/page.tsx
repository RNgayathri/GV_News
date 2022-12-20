import { countries } from "../../CountryConstants";
import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../NewsList";

type Props = {
    params: { country: string };
}

async function NewsCategory({ params: { country } }: Props) {
    const news: NewsResponse = await fetchNews(country);
    return (
        <div>
            <h1 className="headerTitle">{country}</h1>
            <NewsList news={news} />
        </div>
    )
}

export default NewsCategory

export async function generateStaticParams() {
    return countries.map(country => ({
        country: country.code
    }))
}