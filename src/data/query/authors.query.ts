// TODO - paginate the query in future
export const getAuthorsQuery = () => (`
    *[_type == "author"] {
        _id,
        name,
        shortBio,
        bio,
        image,
        "imageUrl": imageUrl.asset -> url,
        slug,
    }
`);

export const getAuthorBySlugQuery = (slug: string) => (`
    *[_type == "author" && slug.current == "${slug}"][0] {
        _id,
        name,
        shortBio,
        bio,
        image,
        "imageUrl": imageUrl.asset -> url,
        slug,
        'articles': *[_type == "article" && references(^._id) && !(_id in path('drafts.**'))] | order(date desc) {
            _id,
            title,
            description,
            date,
            tags,
            slug,
            starred,
            views,
            "imageUrl": imageUrl.asset -> url
        }
    }
`);
