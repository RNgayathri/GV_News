'use client'
import { notFound, useSearchParams } from "next/navigation"
import LiveTimeStamp from "../LiveTimeStamp";

// type Props = {
//     searchParams?: Article;
// }

function ArticlePage() {
    const searchParams = useSearchParams();
    if ((searchParams && Object.entries(searchParams).length === 0) || !searchParams) {
        return notFound();
    }
    const image = searchParams?.get('image') || undefined;
    const title = searchParams?.get('title') || undefined;
    const published_at = searchParams?.get('published_at') || "NAN";
    return (
        <article>
            <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
                {searchParams?.get('image') && (
                    <img className="h-50 max-w-md mx-auto md:max-w-g lg:max-w-xl object-cover rounded-lg shadow-md" src={image} alt={title} />
                )}
                <div className="px-10">
                    <h1 className="headerTitle px-0 no-underline pb-2">{title}</h1>
                    <div>
                        <h2 className="font-bold">
                            By: {searchParams?.get('author')}
                        </h2>
                        <h2 className="font-bold pl-4">Source: {searchParams?.get('source')}</h2>
                        <div className="pl-4"><LiveTimeStamp time={published_at} /></div>
                    </div>
                    <p className="pt-4">{searchParams?.get('description')}</p>
                </div>
            </section>
        </article>
    )

}

export default ArticlePage