type TSlug = {
    current: string,
    _type: 'slug',
}

export type TArticles = {
    _id: string,
    title: string,
    description: string,
    author: string,
    date: string,
    starred: boolean,
    draft: boolean,
    image: string,
    tags: string[],
    slug: TSlug,
}

export type TArticle = TArticles & {
    content: string,
}