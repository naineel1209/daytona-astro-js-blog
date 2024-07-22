//TODO - paginate the query in future
export const getAuthorsQuery = () => (`*[_type == "author"] {
    _id,
    name,
    shortBio,
    bio,
    image,
    slug,
}`);

export const getAuthorBySlugQuery = (slug: string) => (`*[_type == "author" && slug.current == "${slug}"][0] {
    _id,
    name,
    shortBio,
    bio,
    image,
    slug,
}`);