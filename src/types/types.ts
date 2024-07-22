type TSlug = {
    current: string,
    _type: 'slug',
}

type TArticleAuthor = {
    _id: string,
    name: string,
    bio: string,
    image: string,
    slug: TSlug,
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
}

export type TArticle = TArticles & {
    content: string,
}