import { notFound } from "next/navigation"
import LiveTimeStamp from "../LiveTimeStamp";

type Props = {
    searchParams?: Article;
}

function ArticlePage({ searchParams }: Props) {
    alert(searchParams)
    if ((searchParams && Object.entries(searchParams).length === 0) || !searchParams) {
        return notFound();
    }
    const article: Article = searchParams;
    return (
        <article>
            <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
                {article.image && (
                    <img className="h-50 max-w-md mx-auto md:max-w-g lg:max-w-xl object-cover rounded-lg shadow-md" src={article.image} alt={searchParams.title} />
                )}
                <div className="px-10">
                    <h1 className="headerTitle px-0 no-underline pb-2">{article.title}</h1>
                    <div>
                        <h2 className="font-bold">
                            By: {article.author}
                        </h2>
                        <h2 className="font-bold pl-4">Source: {article.source}</h2>
                        <div className="pl-4"><LiveTimeStamp time={article.published_at} /></div>
                    </div>
                    <p className="pt-4">{article.description}</p>
                </div>
            </section>
        </article>
    )

}

export default ArticlePage