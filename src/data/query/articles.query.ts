export const getArticlesQuery = (limit: number, page: number) => (`
    *[_type == "article" && !(_id in path('drafts.**'))] | order(date desc){
        _id,
        title,
        description,
        author -> {
            _id,
            name,
            bio,
            "imageUrl": imageUrl.asset -> url,
            slug
        },
        date,
        tags,
        slug,
        starred,
        views,
        "imageUrl": imageUrl.asset -> url
    }[${(page - 1) * limit}...${page * limit}]
`);

export const getLatestArticlesQuery = (limit: number, page: number) => (`
    *[_type == "article" && !(_id in path('drafts.**'))] | order(date desc){
        _id,
        title,
        description,
        author -> {
            _id,
            name,
            bio,
            "imageUrl": imageUrl.asset -> url,
            slug
        },
        date,
        tags,
        slug,
        starred,
        views,
        "imageUrl": imageUrl.asset -> url
    }[${(page - 1) * limit}...${page * limit}]
`);

export const getStarredArticleQuery = (limit: number, page: number) => (`
    *[_type == "article" && starred == true && !(_id in path('drafts.**'))] | order(date desc){
        _id,
        title,
        description,
        author -> {
            _id,
            name,
            bio,
            "imageUrl": imageUrl.asset -> url,
            slug
        },
        date,
        tags,
        slug,
        starred,
        views,
        "imageUrl": imageUrl.asset -> url
    }[${(page - 1) * limit}...${page * limit}]
`);

export const getArticleBySlugQuery = (slug: string) => (`
    *[_type == "article" && slug.current == "${slug}" && !(_id in path('drafts.**'))]{
        _id,
        title,
        description,
        author -> {
            _id,
            name,
            bio,
            "imageUrl": imageUrl.asset -> url,
            slug
        },
        date,
        tags,
        slug,
        starred,
        content,
        views,
        "imageUrl": imageUrl.asset -> url
    }[0]
`);

export const getArticlesBySearchQuery = (search: string, limit: number, page: number) => (`
    *[_type == "article" && !(_id in path('drafts.**')) && (title match "${search}*" || description match "${search}*" || author.name match "${search}*" || tags[] match "${search}*")] | order(date desc){
        _id,
        title,
        description,
        author -> {
            _id,
            name,
            bio,
            "imageUrl": imageUrl.asset -> url,
            slug
        },
        date,
        tags,
        slug,
        starred,
        views,
        "imageUrl": imageUrl.asset -> url
    }[${(page - 1) * limit}...${page * limit}]
`);

export const getTotalArticlesQuery = `
    count(*[_type == "article" && !(_id in path('drafts.**'))])
`;

export const getRSSArticlesQuery = `
    *[_type == "article" && !(_id in path('drafts.**'))] | order(date desc){
        _id,
        title,
        description,
        date,
        tags,
        slug,
        starred,
        views
    }
`;
