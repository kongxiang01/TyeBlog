import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const dist = new URL("../dist/", import.meta.url);
const distPath = fileURLToPath(dist);
const read = (path) => readFileSync(new URL(path, dist), "utf8");
const basePath = (process.env.BASE_PATH || "/TyeBlog").replace(/\/+$/, "");
const escapedBasePath = basePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

assert.equal(existsSync(join(distPath, "posts", "draft-static-sites")), false);
assert.match(read("index.html"), new RegExp(`${escapedBasePath}/posts/`));
assert.match(read("index.html"), new RegExp(`${escapedBasePath}/favicon\\.svg`));
assert.match(read("rss.xml"), new RegExp(`${escapedBasePath}/posts/astro-content-collections/`));
assert.equal(existsSync(join(distPath, "sitemap-index.xml")), true);

console.log("dist verification passed: draft filtering, base paths, RSS, sitemap");
