import { useEffect, useState } from "react";
import { getSanityLatestArticles } from "../../data/articles";
import HighlightedHeading from "../utils/HighlightedHeading.astro";
import ArticleBanner from "../subcomponents/article-utils/ArticleBanner.astro";

const LatestArticles = (props) => {
    const [page, setPage] = useState(1);
    const [articles, setArticles] = useState([]);


    const fetchArticles = async () => {
        const data = await getSanityLatestArticles(page);
        setArticles(data);
    };

    useEffect(() => {
        fetchArticles();
    }, [page]);

    return (
        <>
            <div className="grid grid-rows-1 gap-[1rem] place-items-center">
                {articles.map((article) => (
                    <ArticleBanner article={article} />
                ))}
            </div>
            <button
                id="load-more"
                className="w-[100%] h-[3rem] bg-blue-300 text-white rounded-md"
                onClick={() => setPage(page + 1)}
            >
                Load More
            </button>
        </>
    );
};

export default LatestArticles;
