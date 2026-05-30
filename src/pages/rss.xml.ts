import rss from "@astrojs/rss";
import { getPublishedPosts, SITE_DESCRIPTION, SITE_TITLE, withBase } from "../lib/site";

export async function GET(context: { site?: URL }) {
    const posts = await getPublishedPosts();
    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site ?? new URL("https://YOUR_GITHUB_USERNAME.github.io"),
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.publishedAt,
            link: withBase(`/posts/${post.id}/`),
        })),
    });
}
