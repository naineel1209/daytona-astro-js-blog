export const getArticlesQuery = (limit: number, page: number) => (`
    *[_type == "article" && draft == false] | order(date desc){
        _id,
        title,
        description,
        author,
        date,
        image,
        tags,
        slug,
        starred,
        draft
    }[${(page - 1) * limit}...${page * limit}]
`);

export const getLatestArticlesQuery = (limit: number, page: number) => (`
    *[_type == "article" && draft == false] | order(date desc){
        _id,
        title,
        description,
        author,
        date,
        image,
        tags,
        slug,
        starred,
        draft
    }[${(page - 1) * limit}...${page * limit}]
`);

export const getStarredArticleQuery = (limit: number, page: number) => (`
    *[_type == "article" && starred == true && draft == false] | order(date desc){
        _id,
        title,
        description,
        author,
        date,
        image,
        tags,
        slug,
        starred,
        draft
    }[${(page - 1) * limit}...${page * limit}]
`)

export const getArticleBySlugQuery = (slug: string) => (`
    *[_type == "article" && slug.current == "${slug}" && draft == false]{
        _id,
        title,
        description,
        author,
        date,
        image,
        tags,
        slug,
        starred,
        draft,
        content
    }[0]
`)

export const getArticlesBySearchQuery = (search: string, limit: number, page: number) => (`
    *[_type == "article" && draft == false && title match "${search}*" || description match "${search}*" || author match "${search}*" || tags[] match "${search}*"] | order(date desc){
        _id,
        title,
        description,
        author,
        date,
        image,
        tags,
        slug,
        starred,
        draft
    }[${(page - 1) * limit}...${page * limit}]
`);