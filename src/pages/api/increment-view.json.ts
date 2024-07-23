import { incrementArticleViews } from "../../data/articles";

export async function PATCH({ params, request }: { params: any, request: Request }) {
    const url = new URL(request.url);

    const articleId = url.searchParams.get("articleId");

    if (!articleId) {
        return new Response("Missing articleId", { status: 400 });
    }

    await incrementArticleViews(articleId);

    return new Response("Success", { status: 200 });
}