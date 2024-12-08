import rss from '@astrojs/rss';
import { getSanityRSSArticles } from '../data/articles';

export async function GET(context: any) {
    const articles = await getSanityRSSArticles();

    return rss({
        title: 'Astro + Sanity Blog',
        description: 'A blog about Daytona + Astro + Sanity CMS built using Daytona + Astro + Sanity CMS.',
        site: context.site,
        stylesheet: '/stylesheet.xsl',
        items: articles.map((article) => {
            return {
                title: article.title,
                description: article.description,
                pubDate: new Date(article.date),
                link: `${context.site}/articles/${article.slug.current}`,
                customData: `<language>en-us</language>
                <starred>${article.starred}</starred>
                <views>${article.views}</views>`,
            }
        }),
        customData: `<language>en-us</language>`,
    })
}