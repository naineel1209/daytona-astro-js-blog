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

export const getLatestArticlesQuery = (limit: number) => (`
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
    }[0...${limit}]
`);

export const getStarredArticleQuery = (limit: number) => (`
    *[_type == "article" && starred == true && draft == false] | order(date desc){
        _id,
        title,
        slug,
        starred,
        draft
    }
`)