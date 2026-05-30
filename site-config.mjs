function trimTrailingSlash(value) {
  return value === "/" ? value : value.replace(/\/+$/, "");
}

export function createSiteConfig(env = process.env) {
  return {
    site: trimTrailingSlash(env.SITE_URL || "https://YOUR_GITHUB_USERNAME.github.io"),
    base: trimTrailingSlash(env.BASE_PATH || "/Tyeblog"),
  };
}

