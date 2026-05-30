import { getCollection, type CollectionEntry } from "astro:content";

export const SITE_TITLE = "TYE.LOG";
export const SITE_DESCRIPTION = "关于前端、系统设计与工具链的长期技术记录。";
export const AUTHOR = "Tye";

export function withBase(path = "/") {
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return `${base}${normalizedPath}` || "/";
}

export function formatDate(date: Date) {
    return new Intl.DateTimeFormat("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(date);
}

export async function getPublishedPosts() {
    const posts = await getCollection("posts", ({ data }) => !data.draft);
    return posts.sort(
        (left, right) => right.data.publishedAt.valueOf() - left.data.publishedAt.valueOf(),
    );
}

export function getTags(posts: CollectionEntry<"posts">[]) {
    return [...new Set(posts.flatMap((post) => post.data.tags))].sort((a, b) =>
        a.localeCompare(b, "zh-CN"),
    );
}

export function getSeries(posts: CollectionEntry<"posts">[]) {
    return [...new Set(posts.flatMap((post) => (post.data.series ? [post.data.series] : [])))].sort(
        (a, b) => a.localeCompare(b, "zh-CN"),
    );
}
