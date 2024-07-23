type TSlug = {
    current: string,
    _type: 'slug',
}

export type TArticleAuthor = {
    _id: string,
    name: string,
    shortBio: string,
    bio: string,
    image: string,
    slug: TSlug,
    articles?: TArticles[],
}

export type TArticles = {
    _id: string,
    title: string,
    description: string,
    author: TArticleAuthor,
    date: string,
    starred: boolean,
    draft: boolean,
    image: string,
    tags: string[],
    slug: TSlug,
    views: number,
}

export type TArticle = TArticles & {
    content: string,
}