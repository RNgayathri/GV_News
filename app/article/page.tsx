import { notFound } from "next/navigation"
import LiveTimeStamp from "../LiveTimeStamp";

type Props = {
    searchParams?: Article;
}

function ArticlePage({ searchParams }: Props) {
    console.log(searchParams)
    if (!searchParams) {
        return notFound();
    }
    const article: Article = searchParams;
    return (
        <article>
            <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
                {searchParams.image && (
                    <img className="h-50 max-w-md mx-auto md:max-w-g lg:max-w-xl object-cover rounded-lg shadow-md" src={searchParams.image} alt={searchParams.title} />
                )}
                <div className="px-10">
                    <h1 className="headerTitle px-0 no-underline pb-2">{searchParams.title}</h1>
                    <div>
                        <h2 className="font-bold">
                            By: {searchParams.author}
                        </h2>
                        <h2 className="font-bold pl-4">Source: {searchParams.source}</h2>
                        <p className="pl-4"><LiveTimeStamp time={searchParams.published_at} /></p>
                    </div>
                    <p className="pt-4">{searchParams.description}</p>
                </div>
            </section>
        </article>
    )

}

export default ArticlePage